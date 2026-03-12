from functools import wraps
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.shortcuts import redirect
from django.utils import timezone

def entreprise_active_required(view_func):
    """
    Décorateur pour s'assurer que l'utilisateur a une entreprise
    avec une souscription active et valide.
    """

    @login_required
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        user = request.user
        entreprise = getattr(user, "entreprise", None)
        if entreprise is None:
            return redirect("signup_entreprise")

        souscription = entreprise.souscription_active
        if souscription is None or not souscription.est_valide:
            raise PermissionDenied("Votre souscription n'est plus active.")

        return view_func(request, *args, **kwargs)

    return _wrapped_view


class EntrepriseActiveRequiredMixin:
    """
    Mixin pour les vues CBV qui nécessitent une entreprise
    avec une souscription active.
    """

    def dispatch(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            return redirect("login")

        entreprise = getattr(user, "entreprise", None)
        if entreprise is None:
            return redirect("signup_entreprise")

        souscription = entreprise.souscription_active
        if souscription is None or not souscription.est_valide:
            raise PermissionDenied("Votre souscription n'est plus active.")

        return super().dispatch(request, *args, **kwargs)

#decorators.py
from django.shortcuts import redirect
from django.core.exceptions import PermissionDenied
from userauths.models import CustomPermission

def custom_permission_required(permission_url):
    def decorator(view_func):
        def _wrapped_view(request, *args, **kwargs):
            user = request.user
            if not user.is_authenticated:
                return redirect('login')  # ou ta page d’erreur personnalisée

            # Vérifie si l'utilisateur a la permission avec cette URL
            has_permission = user.custom_permissions.filter(url=permission_url).exists()
            if not has_permission:
                raise PermissionDenied("Vous n'avez pas la permission d'accéder à cette ressource.")
            return view_func(request, *args, **kwargs)
        return _wrapped_view
    return decorator
