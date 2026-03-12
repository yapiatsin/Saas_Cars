from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.contrib.auth.models import PermissionsMixin
from django.db.models import Q
from shortuuid.django_fields import ShortUUIDField
from django.utils.crypto import get_random_string
from django.conf import settings
from datetime import timedelta
from django.utils import timezone

USER=(
    ("admin","Administrateur"),
    ("gestionnaire","Gestionnaire"),
    ("comptable","Comptable"),
    ("gerant","Gerant flotte"),
    )

GENDER_SELECTION = (
    ('Homme', 'Homme'),
    ('Femme', 'Femme'),
)
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, null= False)
    username = models.CharField(max_length=100)
    gender = models.CharField(max_length=20, choices=GENDER_SELECTION)
    user_type=models.CharField(default="1", choices=USER, max_length=20)
    is_active = models.BooleanField(default=False)
    # Rattachement multi-tenant : chaque utilisateur appartient à une entreprise (optionnel)
    entreprise = models.ForeignKey(
        'Gest_saas.Entreprise',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='users'
    )
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_groups',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions'
    )
    email_verified = models.BooleanField(default=False, verbose_name="Email vérifié")
    email_verified_at = models.DateTimeField(null=True, blank=True, verbose_name="Email vérifié le")
    def __str__(self):
        return '%s - %s ' %(self.username, self.email,)

class PasswordResetToken(models.Model):
    """
    Token pour la réinitialisation de mot de passe
    """
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='password_reset_tokens',
        verbose_name="Utilisateur"
    )
    token = models.CharField(max_length=64, unique=True, verbose_name="Token")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Créé le")
    expires_at = models.DateTimeField(verbose_name="Expire le")
    used = models.BooleanField(default=False, verbose_name="Utilisé")
    used_at = models.DateTimeField(null=True, blank=True, verbose_name="Utilisé le")
    ip_address = models.GenericIPAddressField(null=True, blank=True, verbose_name="Adresse IP")
    class Meta:
        verbose_name = "Token de réinitialisation"
        verbose_name_plural = "Tokens de réinitialisation"
        ordering = ['-created_at']
    def __str__(self):
        return f"Token pour {self.user.email} - {self.token[:10]}..."
    def save(self, *args, **kwargs):
        if not self.token:
            self.token = get_random_string(64)
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(hours=24)
        super().save(*args, **kwargs)
    def is_valid(self):
        """Vérifie si le token est valide"""
        return (
            not self.used and
            timezone.now() < self.expires_at
        )

class PasswordResetOTP(models.Model):
    """
    OTP (One-Time Password) pour la réinitialisation de mot de passe
    OTP de 6 chiffres, valide pendant 5 minutes
    """
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='password_reset_otps',
        verbose_name="Utilisateur"
    )
    otp = models.CharField(max_length=6, verbose_name="OTP")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Créé le")
    expires_at = models.DateTimeField(verbose_name="Expire le")
    used = models.BooleanField(default=False, verbose_name="Utilisé")
    used_at = models.DateTimeField(null=True, blank=True, verbose_name="Utilisé le")
    ip_address = models.GenericIPAddressField(null=True, blank=True, verbose_name="Adresse IP")
    attempts = models.IntegerField(default=0, verbose_name="Tentatives de vérification")
    
    class Meta:
        verbose_name = "OTP de réinitialisation"
        verbose_name_plural = "OTPs de réinitialisation"
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', '-created_at']),
            models.Index(fields=['otp', 'expires_at']),
        ]
    
    def __str__(self):
        return f"OTP pour {self.user.email} - {self.otp}"
    
    def save(self, *args, **kwargs):
        if not self.otp:
            # Générer un OTP de 6 chiffres
            import random
            self.otp = str(random.randint(100000, 999999))
        if not self.expires_at:
            # Expire après 5 minutes
            self.expires_at = timezone.now() + timedelta(minutes=5)
        super().save(*args, **kwargs)
    
    def is_valid(self):
        """Vérifie si l'OTP est valide"""
        return (
            not self.used and
            timezone.now() < self.expires_at and
            self.attempts < 5  # Maximum 5 tentatives
        )
    
    def increment_attempts(self):
        """Incrémente le nombre de tentatives"""
        self.attempts += 1
        self.save(update_fields=['attempts'])

class EmailVerificationToken(models.Model):
    """
    Token pour la vérification d'email
    """
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='email_verification_tokens',
        verbose_name="Utilisateur"
    )
    token = models.CharField(max_length=64, unique=True, verbose_name="Token")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Créé le")
    expires_at = models.DateTimeField(verbose_name="Expire le")
    used = models.BooleanField(default=False, verbose_name="Utilisé")
    used_at = models.DateTimeField(null=True, blank=True, verbose_name="Utilisé le")
    class Meta:
        verbose_name = "Token de vérification d'email"
        verbose_name_plural = "Tokens de vérification d'email"
        ordering = ['-created_at']

    def __str__(self):
        return f"Token vérification pour {self.user.email} - {self.token[:10]}..."

    def save(self, *args, **kwargs):
        if not self.token:
            self.token = get_random_string(64)
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(hours=48)
        super().save(*args, **kwargs)
    def is_valid(self):
        """Vérifie si le token est valide"""
        return (
            not self.used and
            timezone.now() < self.expires_at
        )

class TypeCustomPermission(models.Model):
    cid = ShortUUIDField(unique=True, length=6, prefix='pb-', alphabet="abcd1234", editable=False)
    categorie = models.CharField(max_length=100)
    def __str__(self):
        return self.categorie

class CustomPermission(models.Model):
    name = models.CharField(max_length=100)
    categorie = models.ForeignKey(TypeCustomPermission, on_delete=models.CASCADE,related_name='cat_permis')
    url = models.CharField(max_length=255)
    users = models.ManyToManyField(CustomUser, related_name='custom_permissions', blank=True)
    # Les permissions sont rattachées aux formules de souscription
    formules = models.ManyToManyField(
        'Gest_saas.FormuleSouscription',
        related_name='permissions',
        blank=True,
        help_text="Formules pour lesquelles cette permission est incluse."
    )
    def __str__(self):
        return self.name

class Administ(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE,related_name='administs')
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=30)
    commune = models.CharField(max_length=255, null=True, blank=True)
    tel1 = models.CharField(max_length=255, null=True, blank=True)
    tel2 = models.CharField(max_length=255, null=True, blank=True)
    date_creation=models.DateField(auto_now_add=True)
    objects = models.Manager()
    def __str__(self):
        return '%s - %s' % (self.user.username, self.nom)
    
class Chefexploitation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE,related_name='ads')
    create_by = models.ForeignKey(Administ, on_delete=models.CASCADE, related_name="adminchef")
    nom = models.CharField(max_length=255, null=True, blank=True)
    prenom = models.CharField(max_length=30)
    commune = models.CharField(max_length=255, null=True, blank=True)
    tel1 = models.CharField(max_length=255, null=True, blank=True)
    tel2 = models.CharField(max_length=255, null=True, blank=True)
    date_creation=models.DateField(auto_now_add=True)
    objects = models.Manager()
    def __str__(self):
        return '%s - %s - %s ' %(self.nom, self.user.user_type,  self.user.username)
    
class Comptable(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE,related_name='cmpt')
    create_by = models.ForeignKey(Administ, on_delete=models.CASCADE, related_name="admincomptables")
    nom = models.CharField(max_length=255, null=True, blank=True)
    prenom = models.CharField(max_length=30)
    # date_naissance = models.DateField()
    commune = models.CharField(max_length=255, null=True, blank=True)
    tel1 = models.CharField(max_length=255, null=True, blank=True)
    tel2 = models.CharField(max_length=255, null=True, blank=True)
    date_creation=models.DateField(auto_now_add=True)
    objects = models.Manager()
    def __str__(self):
        return '%s - %s - %s '%(self.nom, self.user.user_type,  self.user.username)
    
class PWD_FORGET(models.Model):
    otp = models.IntegerField()
    status = models.CharField(max_length=1 ,default="0")
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    creat_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return '%s - %s ' %(self.user_id.username, self.user_id.email)

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    profession = models.CharField(max_length=50, null=True, blank="True")
    gender = models.CharField(max_length=20, choices=GENDER_SELECTION)
    commune = models.CharField(max_length=50, null=True, blank="True")
    def __str__(self):
        return f'{self.user.username}'
    