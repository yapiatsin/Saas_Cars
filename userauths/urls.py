from django.urls import path
from userauths.views import *
from django.contrib.auth import views as auth_views
from .views import PasswordChangeView
name = "userauths"

urlpatterns = [
    path("inscription/", entreprise_signup_view, name="signup_entreprise"),
    path("inscription/<str:code>/", entreprise_signup_view, name="signup_entreprise_code"),
    path("choix-formule/<str:code>/", choix_formule_view, name="choix_formule"),
    path("verify-email/<str:token>/", verify_email_view, name="verify_email"),
    path("renvoyer-verification-email/", resend_verification_email_view, name="resend_verification_email"),

    path("se-connecter/", loginview, name="login"),
    path("onboarding/", onboarding_view, name="onboarding"),
    path("onboarding/termine/", onboarding_complete_view, name="onboarding_complete"),
    path("deconnexion/", logout_view, name="log_out"),
    path("pb/", pb_home, name="pb_holdind"),

    path("liste-comptes/", list_users, name="compte"),
    path('utilisateur/<int:user_id>/permissions/', edit_user_permissions, name='edit_user_permissions'),

    path('creer-chef-exploitation/', add_chefexploit, name="addchefexploit"),
    path('creer-comptable/', add_comptable, name="addcomptable"),
    path('creer-gerant/', add_gerant, name="addgerant"),
    path('modifier-gerant/<int:pk>/', edit_gerant, name="edit_gerant"),
    path('modifier-gerant-user/<int:user_id>/', edit_gerant_by_user, name="edit_gerant_by_user"),

    path('supprimer-gerant/<int:pk>/', delete_gerant, name="del_gernt"),
    path('supprimer-comptable/<int:pk>/', delete_comptable, name="del_comptable"),
    path('supprimer-chef-exploitation/<int:pk>/', delete_chefexploit, name="del_chef_exploit"),

    path('mot-de-passe-oublie/', ForgotPasswordView.as_view(), name="mot_passe_oublie"),

    path('otp/', OptValid.as_view(), name='otp'),
    path('request-email/', RequestEmailView.as_view(), name='request_email'),

    path('verifier-otp/', VerifyOtpView.as_view(), name='verify_otp'),
    path('changer-mot-de-passe/', PasswordChangeView.as_view(), name='change_password'),

    path('changer-mot-de-passe/form/', PasswordChangeView.as_view(template_name="userauths/chang_password.html"), name="chang_pass"),
    path('succes-mot-de-passe/', password_success, name="password_success"),

    path('toggle-actif/<int:pk>/', toggle_active_user, name='toggle_active_user'),

    # ==================== GESTION DES PERMISSIONS ====================
    path('permissions/', PermissionListView.as_view(), name='list_permissions'),
    path('permissions/creer/', PermissionCreateView.as_view(), name='create_permission'),
    path('permissions/<int:pk>/modifier/', PermissionUpdateView.as_view(), name='update_permission'),
    path('permissions/<int:pk>/supprimer/', delete_permission, name='delete_permission'),
    path('permissions/export-excel/', ExportPermissionExcelView.as_view(), name='export_permissions_excel'),
    path('permissions/import-excel/', ImportPermissionExcelView.as_view(), name='import_permissions_excel'),

    # ==================== GESTION DES CATÉGORIES ====================
    path('categories/', CategorieListView.as_view(), name='list_categories'),
    path('categories/creer/', CategorieCreateView.as_view(), name='create_categorie'),
    path('categories/<int:pk>/modifier/', CategorieUpdateView.as_view(), name='update_categorie'),
    path('categories/<int:pk>/supprimer/', delete_categorie, name='delete_categorie'),
    path('categories/export-excel/', ExportCategoriesExcelView.as_view(), name='export_categories_excel'),
]
