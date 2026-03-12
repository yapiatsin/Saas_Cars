from decimal import Decimal

from django.db import migrations


def create_default_formules(apps, schema_editor):
    FormuleSouscription = apps.get_model("Gest_saas", "FormuleSouscription")

    plans = [
        {
            "code": "STANDARD",
            "nom": "Standard",
            "description": "Jusqu'à 5 utilisateurs et 20 véhicules avec 3 catégories de véhicules.",
            "montant": Decimal("100000.00"),
            "type_facturation": "mensuelle",
            "duree_jours": 30,
            "max_utilisateurs": 5,
            "nombre_comptes_inclus": 5,
            "max_categories_vehicule": 3,
            "max_vehicules": 20,
            "est_active": True,
            "est_illimitee": False,
        },
        {
            "code": "PRO",
            "nom": "Pro",
            "description": "Jusqu'à 15 utilisateurs, 80 véhicules et 10 catégories de véhicules.",
            "montant": Decimal("180000.00"),
            "type_facturation": "mensuelle",
            "duree_jours": 30,
            "max_utilisateurs": 15,
            "nombre_comptes_inclus": 15,
            "max_categories_vehicule": 10,
            "max_vehicules": 80,
            "est_active": True,
            "est_illimitee": False,
        },
        {
            "code": "ENTERPRISE",
            "nom": "Enterprise",
            "description": "Utilisateurs, véhicules et catégories illimités avec fonctionnalités avancées.",
            "montant": Decimal("250000.00"),
            "type_facturation": "mensuelle",
            "duree_jours": 30,
            "max_utilisateurs": 999999,
            "nombre_comptes_inclus": 50,
            "max_categories_vehicule": 999999,
            "max_vehicules": 999999,
            "est_active": True,
            "est_illimitee": True,
        },
    ]

    for data in plans:
        FormuleSouscription.objects.update_or_create(
            code=data["code"],
            defaults=data,
        )


def delete_default_formules(apps, schema_editor):
    FormuleSouscription = apps.get_model("Gest_saas", "FormuleSouscription")
    FormuleSouscription.objects.filter(code__in=["STANDARD", "PRO", "ENTERPRISE"]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("Gest_saas", "0002_initial"),
    ]

    operations = [
        migrations.RunPython(create_default_formules, delete_default_formules),
    ]

