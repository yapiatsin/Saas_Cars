from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('bilan/', base, name='base'),
    path('recette-journaliere/', MyRecetteView.as_view(), name='rec_day'),
    path('recette-journaliere/export-excel/', ExportRecetteMensuelleExcelView.as_view(), name='export_recette_mensuelle_excel'),
    path('temps-arret/', TableaustopView.as_view(), name='temps'),
    path('temps-arret/export-excel/', ExportTempsArretExcelView.as_view(), name='export_temps_arret_excel'),
    path('tableau-de-bord/', DashboardView.as_view(), name='dash'),
    path('saisie-comptable/', SaisiComptaView.as_view(), name='saisi_compta'),
    path('dashboard-garage/', DashboardGaragView.as_view(), name='dashgarage'),
    path('alertes/', GestionalerteView.as_view(), name='alerte'),

    path('fiche-analytique-exploitation/', AnalytiqueFicheView.as_view(), name='analytique_fiche'),
    path('fiche-analytique-exploitation/export-excel/', ExportAnalytiqueFicheExcelView.as_view(), name='export_analytique_fiche_excel'),

    path('saisie-garage/', SaisieGaragView.as_view(), name='saisi_garag'),
    path('saisie-temps-arret/', TempsArretsView.as_view(), name='temps_arrets'),

    path('charge-administrative/', AddChargeAdminisView.as_view(), name='add_chargadminist'),
    path('charge-administrative/<int:pk>/supprimer/', delete_chargadmin, name='delet_charge_admin'),
    path('charge-administrative/<int:pk>/modifier/', UpdateChargeAdminView.as_view(), name='updat_charg_administ'),
    path('charge-administrative/export-excel/', ExportChargeAdminisExcelView.as_view(), name='export_charge_admin_excel'),

    path('caisse/', BilletageView.as_view(), name='billetage'),
    path('caisse/export-excel/', ExportCaisseExcelView.as_view(), name='export_caisse_excel'),
    path('solde-jour/saisir/', AddSoldeJourView.as_view(), name='add_solde'),
    path('solde-jour/<int:pk>/supprimer/', delete_solde, name='delet_solde'),
    path('solde-jour/export-excel/', ExportSoldeJourExcelView.as_view(), name='export_solde_jour'),

    path('decaissement/saisir/', AddDecaissementView.as_view(), name='add_decaisse'),
    path('decaissement/<int:pk>/modifier/', UpdatDecaissementView.as_view(), name='updat_decaisse'),
    path('decaissement/<int:pk>/supprimer/', delete_sortie_caisse, name='delet_socaisse'),
    path('decaissements/export-excel/', ExportDecaissementExcelView.as_view(), name='export_decaissements'),

    path('encaissement/saisir/', AddEncaissementView.as_view(), name='addencaisse'),
    path('encaissement/<int:pk>/modifier/', UpdatEncaissementView.as_view(), name='updat_encaisse'),
    path('encaissement/<int:pk>/supprimer/', delete_entre_caisse, name='delet_encaisse'),
    path('encaissements/export-excel/', ExportEncaissementExcelView.as_view(), name='export_encaissements'),

    #-------------------------------------------Categorie Véhicule---------------------------------------------
    path('categorie-vehicule/ajouter/', AddCategoriVehi.as_view(), name='add_catego_vehi'),
    path('categorie-vehicule/<int:pk>/modifier/', UpdateCategoView.as_view(), name='updat_catego_vehi'),
    path('categorie-vehicule/<cid>/', views.CategoVehiculeListView, name='catego_vehi_list'),
    path('categorie-vehicule/<int:pk>/supprimer/', delete_catego, name='delete_catego'),

    #-------------------------------------------Véhicule---------------------------------
    path('vehicules/', AllVehiculeView.as_view(), name='all_vehi'),
    path('vehicules/hors-parc/', AllVehiculeHorsParrcView.as_view(), name='all_vehi_hors_parc'),
    path('vehicules/historique/', HistoriqueVehiculeView.as_view(), name="historique_vehicule"),
    path('vehicules/historique/export-excel/', ExportHistoriqueVehiculeExcelView.as_view(), name='export_historique_vehicule_excel'),
    path('vehicule/<int:pk>/nouveau/', AddVehiculeExcelView.as_view(), name='add_vehi'),
    path('vehicule/detail-financier/', CarFinanceView.as_view(), name='detail_car_financier'),
    path('vehicule/<int:pk>/modifier/', UpdatVehiculeView.as_view(), name='updat_car'),
    path('vehicule/<int:pk>/toggle-statut/', toggle_car_statut, name='toggle_car_statut'),
    path('vehicules/supprimer-selection/', delete_multiple_vehicules, name='delete_multiple_vehicules'),
    path('vehicules/export-excel/', ExportVehiculeExcelView.as_view(), name='export_vehicules_excel'),
    path('vehicules-hors-parc/export-excel/', ExportVehiculeHorsParcExcelView.as_view(), name='export_vehicules_hors_parc_excel'),

    #-------------------------------------------------------Recette---------------------------------------------
    path('vehicule/<int:pk>/recette/', AddRecetteView.as_view(), name="add_recettes"),
    path('meilleures-recettes/', BestRecetView.as_view(), name="best_recets"),
    path('meilleures-recettes/export-excel/', ExportBestRecetteExcelView.as_view(), name='export_best_recette_excel'),
    path('liste-recettes/', ListRecetView.as_view(), name="list_recet"),
    path('historique-recettes/', HistoriqueRecetteView.as_view(), name="historique_recette"),
    path('historique-recettes/export-excel/', ExportHistoriqueRecetteExcelView.as_view(), name='export_historique_recettes_excel'),
    path('recette/<int:pk>/modifier/', UpdateRecetView.as_view(), name="updat_recet"),
    path('recettes/supprimer-selection/', views.delete_selected_recettes, name='delete_selected_recettes'),
    path('recettes/export-excel/', ExportRecetteExcelView.as_view(), name='export_recettes_excel'),

    #-------------------------------------------CHARGE---------------------------------------------
    path('vehicule/<int:pk>/charge-fixe/', AddChargeFixView.as_view(), name="addcharg_fix"),
    path('charge-fixe/<int:pk>/modifier/', UpdateChargFixView.as_view(), name="upd_charg_fix"),
    path('charges-fixes/supprimer-selection/', views.delete_selected_chargfix, name='delete_selected_chargfix'),
    path('liste-charges-fixes/', ListChargeFixView.as_view(), name="list_charg_fix"),
    path('historique-charges-fixes/', HistoriqueChargeFixeView.as_view(), name="historique_charge_fixe"),
    path('charges-fixes/export-excel/', ExportChargeFixeExcelView.as_view(), name='export_charge_fixe_excel'),

    path('vehicule/<int:pk>/charge-variable/', AddChargeVarView.as_view(), name="addcharg_var"),
    path('charge-variable/<int:pk>/modifier/', UpdateChargeVarView.as_view(), name="updat_charg_var"),
    path('charges-variables/supprimer-selection/', views.delete_selected_chargvar, name='delete_selected_chargvar'),
    path('liste-charges-variables/', ListChargeVarView.as_view(), name="list_charg_var"),
    path('historique-charges-variables/', HistoriqueChargeVariableView.as_view(), name="historique_charge_variable"),
    path('historique-charges-variables/export-excel/', ExportHistoriqueChargeVariableExcelView.as_view(), name='export_historique_charge_variable_excel'),
    path('charges-variables/export-excel/', ExportChargeVariableExcelView.as_view(), name='export_charges_variables_excel'),

    #---------ENTRETIEN-------VISITE------REPARATION-------ASSURANCE-------PIECE-----VIGNETTE-----PATENTE--------PERTE-------ACCIDENT--------#
    path('vehicule/<int:pk>/autre-arret/', AddAutrarretView.as_view(), name="add_autarrets"),
    path('autre-arret/<int:pk>/modifier/', views.UpdateAutrarretView.as_view(), name='updat_autarret'),
    path('liste-autres-arrets/', ListarretView.as_view(), name='liste_aut_arrets'),
    path('autres-arrets/supprimer-selection/', views.delete_selected_autarret, name='delete_selected_autarret'),
    path('autres-arrets/export-excel/', ExportAutrarretExcelView.as_view(), name='export_autrarrets_excel'),

    path('vehicule/<int:pk>/visite/', AddVisitView.as_view(), name="add_visit"),
    path('visite/<int:pk>/modifier/', UpdateVisiteView.as_view(), name="updat_visit"),
    path('liste-visites-techniques/', ListVisitTechniqueView.as_view(), name="list_visit"),
    path('visites/supprimer-selection/', views.delete_selected_visite, name='delete_selected_visite'),
    path('visites-techniques/export-excel/', ExportVisiteTechniqueExcelView.as_view(), name='export_visite_excel'),

    path('vehicule/<int:pk>/entretien/', AddEntretienView.as_view(), name="add_entretien"),
    path('entretien/<int:pk>/modifier/', UpdatEntretienView.as_view(), name="updat_entretien"),
    path('liste-entretiens/', ListEntretienView.as_view(), name="list_entretien"),
    path('entretiens/supprimer-selection/', views.delete_selected_entretien, name='delete_selected_entretien'),
    path('entretien/export-excel/', ExportEntretienExcelView.as_view(), name='export_entretien_excel'),

    path('vehicule/<int:pk>/reparation/', AddReparationView.as_view(), name="add_reparation"),
    path('liste-reparations/', ListReparationView.as_view(), name="list_repa"),
    path('top-reparations/', BestReparationView.as_view(), name="top_repa"),
    path('top-reparations/export-excel/', ExportBestReparationExcelView.as_view(), name='export_top_reparation_excel'),
    path('reparation/<int:pk>/modifier/', UpdateReparationView.as_view(), name="update_reparation"),
    path('reparation/<int:pk>/detail/', DetailReparatView.as_view(), name="detail_reparat"),
    path('reparation/<int:pk>/export-pdf/', ExportReparationPDFView.as_view(), name='export_reparation_pdf'),
    path('reparations/supprimer-selection/', views.delete_selected_reparation, name='delete_selected_reparation'),
    path('reparations/export-excel/', ExportReparationExcelView.as_view(), name='export_reparation_excel'),

    path('liste-pieces/', ListPieceView.as_view(), name="list_piece"),
    path('liste-pieces-changees/', ListPiechangeView.as_view(), name="list_piechange"),
    path('vehicule/<int:pk>/piece-echange/', AddPiecEchangeView.as_view(), name='add_piechange'),
    path('pieces-echangees/supprimer-selection/', views.delete_selected_piechange, name='delete_selected_piechange'),
    path('pieces-echangees/export-excel/', ExportPiecEchangeExcelView.as_view(), name='export_piec_echange_excel'),
    path('pieces/export-excel/', ExportPieceExcelView.as_view(), name='export_piece_excel'),

    path('vehicule/<int:pk>/assurance/', AddAssuranceView.as_view(), name="add_assurance"),
    path('assurance/<int:pk>/modifier/', UpdateAssuranceView.as_view(), name="updat_assurance"),
    path('liste-assurances/', ListAssuranceView.as_view(), name="liste_assurance"),
    path('assurances/supprimer-selection/', views.delete_selected_assurance, name='delete_selected_assurance'),
    path('assurances/export-excel/', ExportAssuranceExcelView.as_view(), name='export_assurance_excel'),

    path('vehicule/<int:pk>/vignette/', AddVignetteView.as_view(), name="add_vignet"),
    path('vignette/<int:pk>/modifier/', UpdatVignetteView.as_view(), name="updat_vignet"),
    path('liste-vignettes/', ListVignetteView.as_view(), name="liste_vignette"),
    path('vignettes/supprimer-selection/', views.delete_selected_vignette, name='delete_selected_vignette'),
    path('vignettes/export-excel/', ExportVignetteExcelView.as_view(), name='export_vignette_excel'),

    path('vehicule/<int:pk>/stationnement/', AddCartStationnementView.as_view(), name="add_station"),
    path('stationnement/<int:pk>/modifier/', UpdatCartStationView.as_view(), name="updat_station"),
    path('liste-stationnements/', ListCartStationView.as_view(), name="liste_station"),
    path('stationnements/supprimer-selection/', views.delete_selected_stat, name='delete_selected_stat'),
    path('stationnements/export-excel/', ExportStationnementExcelView.as_view(), name='export_stationnement_excel'),

    path('vehicule/<int:pk>/patente/', AddPatenteView.as_view(), name="add_patente"),
    path('patente/<int:pk>/modifier/', UpdatPatenteView.as_view(), name="updat_patente"),
    path('liste-patentes/', ListPatenteView.as_view(), name="liste_patente"),
    path('patentes/supprimer-selection/', views.delete_selected_patente, name='delete_selected_patente'),
    path('patentes/export-excel/', ExportPatenteExcelView.as_view(), name='export_patente_excel'),

    path('audit-annuel/', historique, name='historique'),
]
