---
layout: Post
title: Dashboard Aquaphoenix
description: Gestion des bon de commande, des tarifs, des clients, gestion des rapport, génération de pdf, envoi automatique de mail, monitoring, etc...
date: '2023-08-01'
tags:
  - laravel
  - filamanentPhp
  - mailtrap
  - pdf
  - monitoring
logo:
  src: /icons/laravel.svg
  alt: laravel
images:
  - src: /projects/project-1.png
    alt: Control Panel Dashboard
    overlay:
      src: /projects/project-1-mobile.png
      alt: Control Panel Mobile
  - src: /projects/project-1.png
    alt: Customers Dashboard
attributes:
  - label: Durée
    value: Indéterminée
  - label: Role
    value: Développement Fullstack
  - label: Atmosphere
    value: Cool
  - label: Technology
    value: Laravel 10 & PHP 8.1 & MySQL 8 & TailwindCSS 3 
---

---

## **Projet Aquaphoenix**
Génération de bon de livraison.
[Aquaphoenix](https://aquaphoenix.jsprod.fr/) Lien du projet.

### Technologies Utilisées

- **Laravel**: Framework PHP moderne et puissant.
- **Filament**: Interface d'administration élégante pour Laravel.
- **Breeze**: Authetification.
- **domPDF**: Bibliothèque pour la génération de fichiers PDF depuis des vues HTML.
- **SQL**: Langage de requête pour la gestion des bases de données relationnelles.

### Dépendances du Projet (Composer)

```json
"require": {
    "php": "^8.1",
    "guzzlehttp/guzzle": "^7.2",
    "laravel/framework": "^10.10",
    "laravel/sanctum": "^3.2",
    "laravel/tinker": "^2.8",
    "barryvdh/laravel-dompdf": "^2.0",
    "filament/filament": "^3.0",
    "filament/spatie-laravel-media-library-plugin": "^3.0",
    "filament/spatie-laravel-settings-plugin": "^3.0",
    "filament/spatie-laravel-tags-plugin": "^3.0",
    "filament/spatie-laravel-translatable-plugin": "^3.0",
    "flowframe/laravel-trend": "^0.1.1"
},
"require-dev": {
    "fakerphp/faker": "^1.9.1",
    "laravel/breeze": "^1.23",
    "laravel/pint": "^1.0",
    "laravel/sail": "^1.18",
    "mockery/mockery": "^1.4.4",
    "nunomaduro/collision": "^7.0",
    "phpunit/phpunit": "^10.1",
    "spatie/laravel-ignition": "^2.0",
    "nunomaduro/larastan": "^2.1"
}
```

### Fonctionnalités Principales

1. **Espace Admin avec FilamentPHP**

   - Utilisation de FilamentPHP pour une interface d'administration intuitive.

2. **Génération et Sauvegarde de Bon de Livraison en PDF**

   - Utilisation de domPDF pour générer des bons de livraison au format PDF.

3. **Rapport Mensuel**

   - Tableau de bord affichant les livraisons du mois précédent, du mois en cours, et le poids total du mois en cours.

4. **Tableau de Bords**

   - Création d'un tableau de bord comprenant des statistiques clés.
   - Affichage du nombre de livraisons du mois précédent, du mois en cours, et du poids total en kg pour le mois en cours.

5. **Graphiques Statistiques**

   - Graphique illustrant les livraisons par mois.
   - Graphique représentant le total des poids (en kg) par mois.

6. **Gestion des Données**

   - Création, modification et suppression de désignations, clients et livraisons.

7. **Rapport des Livraisons par Mois**

   - Génération automatisée d'un rapport détaillé des livraisons par mois.

---