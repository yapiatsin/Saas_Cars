# Gest_saas/mixins.py
"""
Mixins réutilisables pour l'isolation multi-tenant, l'accès aux véhicules
selon le rôle, et l'application des limites de souscription.
"""
from django.contrib import messages
from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin


class EntrepriseMixin:
    """
    Fournit des méthodes pour filtrer les querysets par l'entreprise
    de l'utilisateur connecté.  À inclure dans toute vue manipulant
    des données sensibles.
    """

    def get_entreprise(self):
        return getattr(self.request.user, 'entreprise', None)

    def filter_by_entreprise(self, queryset):
        """Filtre un queryset dont le modèle a un champ `entreprise`."""
        entreprise = self.get_entreprise()
        if entreprise is None:
            return queryset.none()
        return queryset.filter(entreprise=entreprise)

    def filter_by_vehicule_entreprise(self, queryset):
        """Filtre un queryset dont le modèle a un FK `vehicule → entreprise`."""
        entreprise = self.get_entreprise()
        if entreprise is None:
            return queryset.none()
        return queryset.filter(vehicule__entreprise=entreprise)


class VehiculeAccessMixin(EntrepriseMixin):
    """
    Gère l'accès aux véhicules selon le type d'utilisateur :
    - gerant : uniquement les catégories qui lui sont assignées
    - autres : tous les véhicules de l'entreprise
    Remplace le pattern if user_type=="gerant" copié-collé partout.
    """

    def get_vehicules_queryset(self, car_statut=True):
        from Gest_saas.models import Vehicule, Gerant
        user = self.request.user
        entreprise = self.get_entreprise()

        qs = Vehicule.objects.select_related('category')
        if entreprise:
            qs = qs.filter(entreprise=entreprise)
        if car_statut is not None:
            qs = qs.filter(car_statut=car_statut)

        if user.user_type == "gerant":
            try:
                gerant = user.gerant
                categories = gerant.gerant_voiture.all()
                if categories.exists():
                    qs = qs.filter(category__in=categories)
                else:
                    qs = qs.none()
            except Gerant.DoesNotExist:
                qs = qs.none()

        return qs


class SubscriptionLimitMixin(LoginRequiredMixin):
    """
    Vérifie les limites de la souscription active avant la création
    de ressources (véhicules, catégories, utilisateurs).

    Dans la vue, définir :
        subscription_resource_type = 'vehicule' | 'categorie' | 'utilisateur'
    """
    subscription_resource_type = None
    login_url = 'login'

    def check_subscription_limit(self, resource_type):
        """
        Retourne (ok: bool, message: str).
        """
        user = self.request.user
        entreprise = getattr(user, 'entreprise', None)

        if entreprise is None:
            return False, "Aucune entreprise associée à votre compte."

        souscription = entreprise.souscription_active
        if souscription is None:
            return False, "Aucune souscription active. Veuillez souscrire à une formule."

        formule = souscription.formule
        if formule.est_illimitee:
            return True, ""

        if resource_type == 'vehicule':
            from Gest_saas.models import Vehicule
            count = Vehicule.objects.filter(entreprise=entreprise).count()
            if count >= formule.max_vehicules:
                return (
                    False,
                    f"Limite de {formule.max_vehicules} véhicules atteinte "
                    f"pour votre formule « {formule.nom} ».",
                )

        elif resource_type == 'categorie':
            from Gest_saas.models import CategoVehi
            count = CategoVehi.objects.filter(entreprise=entreprise).count()
            if count >= formule.max_categories_vehicule:
                return (
                    False,
                    f"Limite de {formule.max_categories_vehicule} catégories atteinte "
                    f"pour votre formule « {formule.nom} ».",
                )

        elif resource_type == 'utilisateur':
            from userauths.models import CustomUser
            count = CustomUser.objects.filter(entreprise=entreprise, is_active=True).count()
            if count >= formule.max_utilisateurs:
                return (
                    False,
                    f"Limite de {formule.max_utilisateurs} utilisateurs atteinte "
                    f"pour votre formule « {formule.nom} ».",
                )

        return True, ""

    def dispatch(self, request, *args, **kwargs):
        # On vérifie la limite uniquement sur les requêtes POST (création réelle)
        if request.method == 'POST' and self.subscription_resource_type:
            ok, message = self.check_subscription_limit(
                self.subscription_resource_type
            )
            if not ok:
                messages.error(request, message)
                return redirect(request.META.get('HTTP_REFERER', '/'))
        return super().dispatch(request, *args, **kwargs)
