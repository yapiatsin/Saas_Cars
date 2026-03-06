from django.db import models
from shortuuid.django_fields import ShortUUIDField
from django.utils.html import mark_safe 
from django.utils import timezone
from userauths.models import CustomUser
from simple_history.models import HistoricalRecords 
from userauths.models import Administ
#-------------------------categorie de vehicule-----------------------------#

##formule de souscription nb categorie de vehicule et nb vehicule
class CategoVehi(models.Model):
    cid = ShortUUIDField(unique=True, length=6, prefix='AT', alphabet="abcd1234")
    auteur = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='user_add_categovehi'
    )
    entreprise = models.ForeignKey(
        'Entreprise',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='categories_vehicule'
    )
    category = models.CharField(max_length=10)
    date_saisie = models.DateField(auto_now_add=True)
    recette_defaut = models.IntegerField(default=0)
    perte_par_30min = models.IntegerField(default=0)

    class Meta:
        unique_together = [['entreprise', 'category']]

    def __str__(self):
        return self.category

    def save(self, *args, **kwargs):
        if not self.entreprise_id and self.auteur_id and getattr(self.auteur, 'entreprise_id', None):
            self.entreprise_id = self.auteur.entreprise_id
        super().save(*args, **kwargs)
 
class Vehicule(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_veh')
    entreprise = models.ForeignKey(
        'Entreprise',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='vehicules'
    )
    immatriculation = models.CharField(unique=True, max_length=30)
    marque = models.CharField(max_length=20)
    duree = models.IntegerField(default=0)
    image = models.ImageField(upload_to="CARS", null=True, blank=True,)
    photo_carte_grise = models.ImageField(upload_to="Photo_Carte_Grise", null=True, blank=True,)
    num_cart_grise = models.CharField(max_length=50, unique=True)
    num_Chassis = models.CharField(max_length=50, unique=True)
    date_acquisition = models.DateField()
    cout_acquisition = models.IntegerField(default=0)
    dat_edit_carte_grise = models.DateField()
    date_mis_service = models.DateField()
    category = models.ForeignKey(CategoVehi, on_delete=models.CASCADE, related_name="catego_vehicule")
    car_statut = models.BooleanField(default=True)
    motif_sorti = models.CharField(max_length=100, null=True, blank=True)
    date_saisie = models.DateField(auto_now_add=True)
    history = HistoricalRecords()

    def save(self, *args, **kwargs):
        if not self.entreprise_id and self.auteur_id and getattr(self.auteur, 'entreprise_id', None):
            self.entreprise_id = self.auteur.entreprise_id
        super().save(*args, **kwargs)

    def __str__(self):
        return self.immatriculation
    @property
    def age(self):
        import datetime
        date_nai = self.date_mis_service
        tday = datetime.date.today() 
        age = (tday.year - date_nai.year) - int((date_nai.month,tday.day ) < (date_nai.month, tday.day))
        return age
    @property
    def color_age(self):
        """Retourne une couleur selon la durée"""
        if self.age <= self.duree / 2:
            return "success"
        elif self.age < self.duree:
            return "warning"
        else:
            return "danger"

class DocumentVehicule(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name='documents')
    nom_doc = models.CharField(max_length=100)
    image = models.ImageField(upload_to='documents_vehicules/', null=True, blank=True)
    date_saisie = models.DateField(auto_now_add=True)
    history = HistoricalRecords()
    class Meta:
        ordering = ['-date_saisie']
    def __str__(self):
        return f"{self.nom_doc} - {self.vehicule.immatriculation}"

class Recette(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL,null=True, blank=True, related_name='user_add_rec')
    chauffeur = models.CharField(max_length=50)
    cpte_comptable = models.CharField(max_length=100)
    numero_fact = models.CharField(max_length=20)
    Num_piece = models.CharField(max_length=100)
    vehicule = models.ForeignKey(Vehicule, related_name="recettes", on_delete=models.CASCADE)
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def save(self, *args, **kwargs):
        if self.auteur:
            self.auteur_nom = f"{self.auteur.username} ({self.auteur.email})"
        super().save(*args, **kwargs)
    def __str__(self): 
        return '%s ' % (self.vehicule.immatriculation)

class ChargeFixe(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_chf')
    libelle = models.CharField(max_length=100, null=True, blank=True)
    vehicule = models.ForeignKey(Vehicule, related_name="chargefixes", on_delete=models.CASCADE)
    montant = models.IntegerField(default=0.0)
    cpte_comptable = models.CharField(max_length=100)
    Num_piece = models.CharField(max_length=100)
    Num_fact = models.CharField(max_length=100)
    date_saisie = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self) : 
        return '%s ' % (self.vehicule.immatriculation)
    
class ChargeVariable(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_var')
    libelle = models.CharField(max_length=100, null=True, blank=True)
    vehicule = models.ForeignKey(Vehicule, related_name="chargevariables", on_delete=models.CASCADE)
    montant = models.IntegerField(default=0.0)
    cpte_comptable = models.CharField(max_length=100)
    Num_piece = models.CharField(max_length=100)
    Num_fact = models.CharField(max_length=100)
    date_saisie = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self) : 
        return '%s ' % (self.vehicule.immatriculation)
    
class ChargeAdminis(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_chadm')
    libelle = models.CharField(max_length=100)
    montant = models.IntegerField(default=0.0)
    cpte_comptable = models.CharField(max_length=100)
    Num_piece = models.CharField(max_length=100)
    Num_fact = models.CharField(max_length=100)
    date_saisie = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self) : 
        return '%s ' % (self.libelle)

class Prevision(models.Model):
    mois = models.DateField()
    montant_previs= models.IntegerField(default=0)
    def __str__(self):
        return '%s - %s' % (self.mois, self.montant_previs)
    def calculer_difference(self):
        recettes_du_mois = Recette.objects.filter(date__year=self.mois.year, date__month=self.mois.month)
        somme_recettes_du_mois = recettes_du_mois.aggregate(models.Sum('montant'))['montant__sum'] or 0
        difference = self.montant_previs - somme_recettes_du_mois
        return somme_recettes_du_mois, difference

class Billetage(models.Model):
    valeur = models.IntegerField(choices=[(10000, '10000'),  
                                          (5000, '5000'),     
                                          (2000, '2000'),    
                                          (1000, '1000'),    
                                          (500, '500'),      
                                          (200, '200'),
                                          (100, '100'), 
                                          (50, '50'), 
                                          (25, '25'),
                                          (10, '10'),           
                                          (5, '5')]
                                        )        
    nombre = models.IntegerField(default=0)
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='bielletages')
    type = models.CharField(max_length=10, choices=[('Billet', 'Billet'), ('Pièce', 'Pièce')])
    date_saisie = models.DateField(auto_now_add=True)
    history = HistoricalRecords()
    def calculer_produit(self):
        return self.valeur * self.nombre

class SoldeJour(models.Model):
    date_saisie = models.DateField(unique=True)
    montant = models.IntegerField(default=0)
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_sold')
    date = models.DateField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return '%s - %s' % (self.date_saisie, self.montant)
    
class Encaissement(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_enc')
    Num_piece = models.CharField(max_length=100)
    libelle = models.CharField(max_length=100)
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return '%s - %s' % (self.libelle, self.montant)

class Decaissement(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_dec')
    Num_piece = models.CharField(max_length=100)
    libelle = models.CharField(max_length=200)
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return '%s - %s' % (self.libelle, self.montant)
  
class Vignette(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_vig')
    vehicule = models.ForeignKey(Vehicule, related_name="vignettes", on_delete=models.CASCADE)
    montant = models.IntegerField(default=0)
    image = models.ImageField(upload_to="vignettes_fil", blank=True)
    date_saisie = models.DateField()
    date_proch = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
         return '%s - %s' % (self.vehicule.immatriculation, self.montant)
    @property
    def jours_vign_restant(self):
        jours_vign_restant = (self.date_proch - timezone.now().date()).days
        return jours_vign_restant

MOTIF_REPARATION=(
    ('Visite', 'Visite'),
    ('Panne', 'Panne'),
    ('Accident', 'Accident'),
)
class Reparation(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_rep')
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name="reparations")
    date_entree = models.DateTimeField()
    date_sortie = models.DateTimeField()
    motif = models.CharField(max_length=20, choices=MOTIF_REPARATION)
    image = models.ImageField(upload_to="reparation_fil", blank=True)
    num_fich = models.CharField(max_length=50)
    description = models.TextField(max_length=500, null=True, blank=True)
    montant = models.IntegerField(default=0)
    prestation = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return '%s ' % (self.vehicule.immatriculation)  

LIEU_PIECE = (
    ('INTERNE', 'INTERNE'),
    ('EXTERNE', 'EXTERNE'),
)
class Piece(models.Model):
    reparation = models.ForeignKey(Reparation, on_delete=models.CASCADE, related_name="pieces")
    libelle = models.CharField(max_length=30, null=True, blank=True)
    lieu = models.CharField(max_length=20, choices=LIEU_PIECE)
    quantite = models.PositiveIntegerField(default=1)
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    auteur = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, related_name='user_piece', null=True, blank=True)
    history = HistoricalRecords()
    @property
    def prix_total(self):
        return self.quantite * self.montant
    def __str__(self):
        return '%s ' % (self.libelle)
    
class PiecEchange(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name='user_piechange')
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name="piechang")
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return '%s ' % (self.vehicule.immatriculation)

class LignePiecEchange(models.Model):
    piecec = models.ForeignKey(PiecEchange, on_delete=models.CASCADE, related_name="lignes")
    libelle = models.CharField(max_length=30, null=True, blank=True)
    lieu = models.CharField(max_length=20, choices=LIEU_PIECE)
    montant = models.IntegerField(default=0)
    quantite = models.PositiveIntegerField(default=1)
    @property
    def prix_total(self):
        return self.quantite * self.montant
    def __str__(self):
        return f"{self.libelle} ({self.quantite}) - {self.montant} FCFA"

class Entretien(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_ent')
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name="entretiens")
    image = models.ImageField(upload_to="entretiens_fil", blank=True)
    date_Entret = models.DateTimeField()
    date_sortie = models.DateTimeField()
    date_proch = models.DateField()
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return self.vehicule.immatriculation
    @property
    def jours_ent_restant(self):
        jours_ent_restant = (self.date_proch - timezone.now().date()).days
        return jours_ent_restant

class Autrarret(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_aut')
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name="autrarrets")
    libelle = models.CharField(max_length=50, null=True, blank=True)
    date_arret = models.DateTimeField()
    date_sortie = models.DateTimeField()
    numfich = models.CharField(max_length=100, null=True, blank=True)
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return '%s ' % (self.vehicule.immatriculation)

class VisiteTechnique(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.SET_NULL, null=True, blank=True, related_name='user_add_vis')
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name="visites")
    date_vis = models.DateTimeField()
    date_sortie = models.DateTimeField()
    image = models.ImageField(upload_to="visites_fil", blank=True)
    date_proch= models.DateField()
    montant = models.IntegerField(default=0)
    date_saisie = models.DateField(auto_now_add=True)
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return self.vehicule.immatriculation
    @property
    def jour_restant(self):
        jours_restant = (self.date_proch - timezone.now().date()).days
        return jours_restant
    
class Patente(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name='user_add_pat')
    vehicule = models.ForeignKey(Vehicule, related_name="patantes", on_delete=models.CASCADE)
    montant = models.IntegerField(default=0)
    image = models.ImageField(upload_to="patentes_fil", blank=True)
    date_saisie = models.DateField()
    date_proch = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
         return '%s - %s' % (self.vehicule.immatriculation, self.montant)
    @property
    def jours_pate_restant(self):
        jours_pate_restant = (self.date_proch - timezone.now().date()).days
        return jours_pate_restant
    
class Stationnement(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name='user_add_sta')
    vehicule = models.ForeignKey(Vehicule, related_name="cart_station", on_delete=models.CASCADE)
    montant = models.IntegerField(default=0)
    image = models.ImageField(upload_to="carte_station_fil", blank=True)
    date_saisie = models.DateField()
    date_proch = models.DateField()
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):  
        return '%s - %s' % (self.vehicule.immatriculation, self.montant)
    @property
    def jours_cartsta_restant(self):
        jours_cartsta_restant = (self.date_proch - timezone.now().date()).days
        return jours_cartsta_restant

class Assurance(models.Model):
    auteur = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name='user_add_ass')
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE, related_name="assurances")
    image = models.ImageField(upload_to="assurances_fil", blank=True)
    date_saisie = models.DateField()
    date_proch = models.DateField()
    montant = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return self.vehicule.immatriculation
    @property
    def jours_assu_restant(self):
        jours_assu_restant = (self.date_proch - timezone.now().date()).days
        return jours_assu_restant

class Gerant(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE,related_name='gerants')
    create_by = models.ForeignKey(Administ, on_delete=models.CASCADE, related_name="admingerants")
    gerant_voiture = models.ManyToManyField(CategoVehi, blank=True, related_name="gerants")
    nom = models.CharField(max_length=255,)
    prenom = models.CharField(max_length=30,)
    commune = models.CharField(max_length=255, null=True, blank=True)
    tel1 = models.CharField(max_length=255, null=True, blank=True)
    tel2 = models.CharField(max_length=255, null=True, blank=True)
    date_creation=models.DateField(auto_now_add=True)
    objects = models.Manager()
    def __str__(self):
        return '%s - %s - %s ' %(self.nom, self.user.user_type, self.user.username)

class Entreprise(models.Model):
    """
    Représente un client (entreprise) du SaaS.
    """
    cid = ShortUUIDField(unique=True, length=8, prefix='ent-', alphabet="abcd1234")
    proprietaire = models.ForeignKey(
        Administ,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='entreprises_creees'
    )
    nom = models.CharField(max_length=255)
    sigle = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    telephone = models.CharField(max_length=50, null=True, blank=True)
    adresse = models.CharField(max_length=255, null=True, blank=True)
    ville = models.CharField(max_length=100, null=True, blank=True)
    pays = models.CharField(max_length=100, null=True, blank=True)
    site_web = models.URLField(null=True, blank=True)
    logo = models.ImageField(upload_to='entreprises/logo/', null=True, blank=True)
    actif = models.BooleanField(default=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    history = HistoricalRecords()
    class Meta:
        verbose_name = "Entreprise"
        verbose_name_plural = "Entreprises"

    def __str__(self):
        return self.nom

    @property
    def souscription_active(self):
        """
        Retourne la souscription active courante (si elle existe).
        """
        today = timezone.now().date()
        return self.souscriptions.filter(
            statut=Souscription.STATUT_ACTIVE,
            date_debut__lte=today,
            date_fin__gte=today,
        ).order_by('-date_debut').first()

class FormuleSouscription(models.Model):
    """
    Offre de souscription (pack) à laquelle une entreprise peut s'abonner.
    """
    FACTURATION_CHOICES = (
        ('mensuelle', 'Mensuelle'),
        ('trimestrielle', 'Trimestrielle'),
        ('annuelle', 'Annuelle'),
    )
    cid = ShortUUIDField(unique=True, length=8, prefix='for-', alphabet="abcd1234")
    nom = models.CharField(max_length=150)
    code = models.CharField(max_length=50, unique=True)
    description = models.TextField(null=True, blank=True)
    # Tarif de base de la formule pour la période de facturation
    montant = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        help_text="Montant TTC de la formule pour la période de facturation."
    )
    type_facturation = models.CharField(max_length=20, choices=FACTURATION_CHOICES, default='mensuelle')
    duree_jours = models.PositiveIntegerField(
        default=30,
        help_text="Durée de validité par souscription (en jours)."
    )
    # Plafond global d'utilisateurs pour l'entreprise
    max_utilisateurs = models.PositiveIntegerField(
        default=5,
        help_text="Nombre maximum d'utilisateurs par entreprise pour cette formule."
    )
    # Nombre de comptes explicitement inclus dans la formule
    nombre_comptes_inclus = models.PositiveIntegerField(
        default=5,
        help_text="Nombre de comptes utilisateurs inclus dans la formule."
    )
    # Nombre max de catégories de véhicules (CategoVehi) par entreprise pour cette formule
    max_categories_vehicule = models.PositiveIntegerField(
        default=5,
        help_text="Nombre maximum de catégories de véhicules (CategoVehi) pour cette formule."
    )
    # Nombre max de véhicules par entreprise pour cette formule
    max_vehicules = models.PositiveIntegerField(
        default=20,
        help_text="Nombre maximum de véhicules gérés pour cette formule."
    )
    est_active = models.BooleanField(default=True)
    est_illimitee = models.BooleanField(
        default=False,
        help_text="Si vrai, ignore les plafonds max_utilisateurs / max_vehicules."
    )
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    history = HistoricalRecords()
    class Meta:
        verbose_name = "Formule de souscription"
        verbose_name_plural = "Formules de souscription"
    def __str__(self):
        return self.nom
    @property
    def tarif_mensuel(self):
        """
        Retourne un tarif normalisé à la mensualité à partir du montant et du type de facturation.
        Utile pour afficher/comparer facilement les offres.
        """
        if self.type_facturation == 'mensuelle':
            return self.montant
        if self.type_facturation == 'trimestrielle':
            return self.montant / 3
        if self.type_facturation == 'annuelle':
            return self.montant / 12
        return self.montant

class Souscription(models.Model):
    """
    Souscription d'une entreprise à une et une seule formule.
    Gère les périodes de validité et la réactivation.
    """
    STATUT_ACTIVE = 'active'
    STATUT_EXPIREE = 'expiree'
    STATUT_SUSPENDUE = 'suspendue'

    STATUT_CHOICES = (
        (STATUT_ACTIVE, 'Active'),
        (STATUT_EXPIREE, 'Expirée'),
        (STATUT_SUSPENDUE, 'Suspendue'),
    )
    entreprise = models.ForeignKey(
        Entreprise,
        on_delete=models.CASCADE,
        related_name='souscriptions'
    )
    formule = models.ForeignKey(
        FormuleSouscription,
        on_delete=models.PROTECT,
        related_name='souscriptions'
    )
    date_debut = models.DateField()
    date_fin = models.DateField()
    statut = models.CharField(max_length=20, choices=STATUT_CHOICES, default=STATUT_ACTIVE)
    renouvellement_auto = models.BooleanField(
        default=False,
        help_text="Si vrai, la souscription pourra être renouvelée automatiquement."
    )
    note_interne = models.TextField(null=True, blank=True)
    cree_par = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='souscriptions_creees'
    )
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    history = HistoricalRecords()
    class Meta:
        verbose_name = "Souscription"
        verbose_name_plural = "Souscriptions"
        ordering = ['-date_debut']
    def __str__(self):
        return f"{self.entreprise} - {self.formule} ({self.date_debut} -> {self.date_fin})"
    @property
    def est_valide(self):
        """
        Indique si la souscription est actuellement valide.
        """
        today = timezone.now().date()
        return (
            self.statut == self.STATUT_ACTIVE and
            self.date_debut <= today <= self.date_fin
        )
    @property
    def jours_restants(self):
        """
        Nombre de jours restants avant expiration (peut être négatif si expirée).
        """
        today = timezone.now().date()
        return (self.date_fin - today).days
    def marquer_expiree_si_necessaire(self):
        """
        Met à jour le statut si la date de fin est dépassée.
        """
        if self.jours_restants < 0 and self.statut == self.STATUT_ACTIVE:
            self.statut = self.STATUT_EXPIREE
            self.save(update_fields=['statut', 'date_modification'])
