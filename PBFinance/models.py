from django.db import models
from django.utils import timezone
from userauths.models import CustomUser

class CategorieOnglet(models.Model):
    """Catégorie principale du menu (ex: MEDIA)."""
    libelle = models.CharField(max_length=100, verbose_name="Catégorie")
    lien = models.URLField(
        max_length=500,
        blank=True,
        null=True,
        verbose_name="Lien du contenu (optionnel)"
    )
    ordre = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    actif = models.BooleanField(default=True)
    class Meta:
        verbose_name = "Catégorie onglet"
        verbose_name_plural = "Catégories onglets"
        ordering = ['ordre', 'libelle']
    def __str__(self):
        return self.libelle

class SousCategorieOnglet(models.Model):
    """Sous-catégorie d'un onglet (ex: Photo, Videos, Evènements sous MEDIA)."""
    categorie = models.ForeignKey(
        CategorieOnglet,
        on_delete=models.CASCADE,
        related_name='sous_categories',
        verbose_name="Catégorie parente"
    )
    libelle = models.CharField(max_length=100, verbose_name="Sous-catégorie")
    lien = models.URLField(
        max_length=500,
        blank=True,
        null=True,
        verbose_name="Lien du contenu"
    )
    ordre = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    actif = models.BooleanField(default=True)
    class Meta:
        verbose_name = "Sous-catégorie onglet"
        verbose_name_plural = "Sous-catégories onglets"
        ordering = ['categorie', 'ordre', 'libelle']
    def __str__(self):
        return f"{self.categorie.libelle} › {self.libelle}"

class PageAccueil(models.Model):
    """Configuration de la page d'accueil (libellé, style, fond)."""
    libelle = models.CharField(max_length=200, verbose_name="Libellé")
    taille_texte = models.PositiveIntegerField(
        default=16,
        verbose_name="Taille du texte (px)",
        help_text="Taille de police en pixels"
    )
    background = models.ImageField(
        upload_to='accueil/backgrounds',
        blank=True,
        null=True,
        verbose_name="Image de fond"
    )
    couleur_fond = models.CharField(
        max_length=20,
        blank=True,
        default="#ffffff",
        verbose_name="Couleur de fond (hex)"
    )
    ordre = models.PositiveIntegerField(default=0)
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Bloc page d'accueil"
        verbose_name_plural = "Page d'accueil"
    def __str__(self):
        return self.libelle


class NosService(models.Model):
    """Section Nos Services : libellé, image, description, lien détail."""
    libelle = models.CharField(max_length=200, verbose_name="Libellé")
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    description = models.TextField(blank=True, verbose_name="Description")
    lien_detail = models.URLField(
        max_length=500,
        blank=True,
        null=True,
        verbose_name="Lien pour détail"
    )
    ordre = models.PositiveIntegerField(default=0)
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Nos Services"
        ordering = ['ordre', 'libelle']
    def __str__(self):
        return self.libelle

class Presentation(models.Model):
    """Section Présentation : libellé, description, image."""
    libelle = models.CharField(max_length=200, verbose_name="Libellé")
    description = models.TextField(verbose_name="Description")
    image = models.ImageField(upload_to='presentation/', blank=True, null=True)
    ordre = models.PositiveIntegerField(default=0)
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Présentation"
        verbose_name_plural = "Présentations"
        ordering = ['ordre']
    def __str__(self):
        return self.libelle

class AnnonceEvenement(models.Model):
    """Annonce / bandeau évènement (image)."""
    image = models.ImageField(upload_to='annonces/evenements/')
    libelle = models.CharField(max_length=150, blank=True, verbose_name="Libellé")
    lien = models.URLField(max_length=500, blank=True, null=True)
    date_debut = models.DateField(blank=True, null=True)
    date_fin = models.DateField(blank=True, null=True)
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = "Annonce évènement"
        verbose_name_plural = "Annonces évènements"
        ordering = ['-date_creation']
    def __str__(self):
        return self.libelle or f"Annonce #{self.pk}"

class AnnonceInformation(models.Model):
    """Annonces et informations (actualités, alertes, etc.)."""
    titre = models.CharField(max_length=200, verbose_name="Titre")
    contenu = models.TextField(verbose_name="Contenu")
    image = models.ImageField(upload_to='annonces/infos/', blank=True, null=True)
    date_publication = models.DateTimeField(default=timezone.now)
    actif = models.BooleanField(default=True)
    ordre = models.PositiveIntegerField(default=0)
    date_creation = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = "Annonce / Information"
        verbose_name_plural = "Annonces & Informations"
        ordering = ['-date_publication']
    def __str__(self):
        return self.titre

class Banniere(models.Model):
    """Bannière : texte + contact."""
    texte = models.TextField(verbose_name="Texte de la bannière")
    contact = models.CharField(
        max_length=200,
        blank=True,
        verbose_name="Contact (téléphone ou autre)"
    )
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Bannière"
        verbose_name_plural = "Bannières"
    def __str__(self):
        return (self.texte[:50] + "...") if len(self.texte) > 50 else self.texte

class ReseauSocial(models.Model):
    """Réseaux sociaux : icône/image + lien."""
    nom = models.CharField(max_length=50, verbose_name="Nom du réseau")
    icon = models.CharField(
        max_length=100,
        blank=True,
        help_text="Classe CSS ou nom d'icône (ex: fa-facebook)"
    )
    image = models.ImageField(upload_to='reseaux/', blank=True, null=True)
    lien = models.URLField(max_length=500, verbose_name="Lien")
    ordre = models.PositiveIntegerField(default=0)
    actif = models.BooleanField(default=True)
    class Meta:
        verbose_name = "Réseau social"
        verbose_name_plural = "Réseaux sociaux"
        ordering = ['ordre']

    def __str__(self):
        return self.nom

class PartenSpons(models.Model):
    """Partenaire ou sponsor : logo, nom, lien, description."""
    TYPE_CHOIX = [
        ('partenaire', 'Partenaire'),
        ('sponsor', 'Sponsor'),
    ]
    type_entite = models.CharField(
        max_length=20,
        choices=TYPE_CHOIX,
        default='partenaire',
        verbose_name="Type"
    )
    nom = models.CharField(max_length=150, verbose_name="Nom")
    logo = models.ImageField(upload_to='partenaires_sponsors/', blank=True, null=True)
    lien = models.URLField(max_length=500, blank=True, null=True, verbose_name="Site web")
    description = models.TextField(blank=True, verbose_name="Description")
    ordre = models.PositiveIntegerField(default=0, verbose_name="Ordre d'affichage")
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = "Partenaire / Sponsor"
        verbose_name_plural = "Partenaires & Sponsors"
        ordering = ['type_entite', 'ordre', 'nom']
    def __str__(self):
        return f"{self.get_type_entite_display()} - {self.nom}"

class Footer(models.Model):
    """Pied de page : texte, BP, contacts, email (configuration unique)."""
    texte = models.TextField(blank=True, verbose_name="Texte du footer")
    localisation_bp = models.CharField(
        max_length=300,
        blank=True,
        verbose_name="Localisation / B.P."
    )
    contact_1 = models.CharField(max_length=100, blank=True, verbose_name="Contact 1")
    contact_2 = models.CharField(max_length=100, blank=True, verbose_name="Contact 2")
    contact_3 = models.CharField(max_length=100, blank=True, verbose_name="Contact 3")
    email = models.EmailField(blank=True, verbose_name="Email")
    date_modification = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Footer"
        verbose_name_plural = "Footer"
    def __str__(self):
        return "Configuration du footer"

# ============== Galerie & Équipe ==============
class Photo(models.Model):
    """Photo : image, libellé, date de poste automatique."""
    libelle = models.CharField(max_length=200, verbose_name="Libellé")
    image = models.ImageField(upload_to='photo/')
    date_poste = models.DateTimeField(auto_now_add=True)
    actif = models.BooleanField(default=True)
    ordre = models.PositiveIntegerField(default=0)
    class Meta:
        verbose_name = "Photo"
        verbose_name_plural = "Photos"
        ordering = ['-date_poste', 'ordre']
    def __str__(self):
        return f"{self.libelle} - {self.date_poste.date()}"

class PageContact(models.Model):
    """Configuration de la page Contact (texte, coordonnées, formulaire)."""
    titre = models.CharField(max_length=200, default="Contactez-nous")
    introduction = models.TextField(blank=True, verbose_name="Texte d'introduction")
    adresse = models.TextField(blank=True)
    telephone = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    horaires = models.TextField(blank=True, verbose_name="Horaires d'ouverture")
    carte_embed = models.TextField(
        blank=True,
        help_text="Code iframe Google Maps ou autre"
    )
    actif_formulaire = models.BooleanField(default=True)
    date_modification = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Page Contact"
        verbose_name_plural = "Page Contact"
    def __str__(self):
        return self.titre

class MessageContact(models.Model):
    """Messages envoyés depuis le formulaire de contact."""
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    sujet = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    date_envoi = models.DateTimeField(auto_now_add=True)
    lu = models.BooleanField(default=False)
    class Meta:
        verbose_name = "Message contact"
        verbose_name_plural = "Messages contact"
        ordering = ['-date_envoi']
    def __str__(self):
        return f"{self.nom} - {self.sujet or self.message[:30]}"

class Equipe(models.Model):
    """Équipe : nom, rôle, description (et optionnellement photo)."""
    nom = models.CharField(max_length=150, verbose_name="Nom")
    role = models.CharField(max_length=150, verbose_name="Rôle")
    description = models.TextField(blank=True, verbose_name="Description")
    image = models.ImageField(upload_to='equipe/', blank=True, null=True)
    ordre = models.PositiveIntegerField(default=0)
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = "Membre équipe"
        verbose_name_plural = "Equipes"
        ordering = ['ordre', 'nom']
    def __str__(self):
        return f"{self.nom} - {self.role}"

# ============== Anciens modèles conservés ==============

class Video(models.Model):
    title = models.CharField(max_length=50)
    video = models.FileField(upload_to='video/%y')
    date = models.DateField(auto_now_add=True)
    date_saisie = models.DateField()
    def __str__(self):
        return '%s - %s' % (self.title, self.video)

class Evenement(models.Model):
    title = models.CharField(max_length=50)
    image = models.FileField(upload_to='evenement')
    text = models.TextField(max_length=5000)
    date_saisie = models.DateField()
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return '%s - %s - %s' % (self.title, self.image, self.auteur)

# ============== Statistiques (visites, clics, pages visitées) ==============
class PageSiteSearch(models.Model):
    nom = models.CharField(max_length=100, verbose_name="Nom de la page")
    slug = models.SlugField(max_length=100, unique=True)
    url_path = models.CharField(
        max_length=300,
        blank=True,
        help_text="Chemin ou pattern d'URL (ex: /services/)"
    )
    class Meta:
        verbose_name = "Page (référentiel)"
        verbose_name_plural = "Pages (référentiel)"
    def __str__(self):
        return self.nom

class Visite(models.Model):
    """Enregistrement d'une visite (pour stats journalières, mensuelles, annuelles)."""
    page = models.ForeignKey(
        PageSiteSearch,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='visites'
    )
    url_visitee = models.CharField(max_length=500, verbose_name="URL visitée")
    titre_page = models.CharField(max_length=200, blank=True)
    date_visite = models.DateTimeField(auto_now_add=True)
    session_key = models.CharField(max_length=100, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.CharField(max_length=500, blank=True)
    class Meta:
        verbose_name = "Visite"
        verbose_name_plural = "Visites"
        ordering = ['-date_visite']
        indexes = [
            models.Index(fields=['date_visite']),
            models.Index(fields=['url_visitee']),
        ]

    def __str__(self):
        return f"{self.url_visitee} - {self.date_visite}"

class Clic(models.Model):
    """Enregistrement d'un clic (bouton, lien, CTA) pour statistiques."""
    element = models.CharField(
        max_length=200,
        verbose_name="Élément cliqué (id, texte, lien)"
    )
    url_page = models.CharField(max_length=500, blank=True)
    date_clic = models.DateTimeField(auto_now_add=True)
    session_key = models.CharField(max_length=100, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    class Meta:
        verbose_name = "Clic"
        verbose_name_plural = "Clics"
        ordering = ['-date_clic']
        indexes = [
            models.Index(fields=['date_clic']),
            models.Index(fields=['element']),
        ]
    def __str__(self):
        return f"{self.element} - {self.date_clic}"

class StatistiqueAgregee(models.Model):
    """Statistiques pré-agrégées (optionnel, pour performances)."""
    PERIODE_CHOIX = [
        ('jour', 'Journalier'),
        ('mois', 'Mensuel'),
        ('annee', 'Annuel'),
    ]
    periode = models.CharField(max_length=10, choices=PERIODE_CHOIX)
    date_debut = models.DateField()
    date_fin = models.DateField()
    url_visitee = models.CharField(max_length=500, blank=True)
    nombre_visites = models.PositiveIntegerField(default=0)
    nombre_clics = models.PositiveIntegerField(default=0)
    date_maj = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Statistique agrégée"
        verbose_name_plural = "Statistiques agrégées"
        unique_together = [['periode', 'date_debut', 'url_visitee']]
        indexes = [models.Index(fields=['periode', 'date_debut']),]
    def __str__(self):
        return f"{self.get_periode_display()} {self.date_debut} - {self.url_visitee or 'global'}"
