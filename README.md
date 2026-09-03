# École Connect

# SYSTÈME DE CONNEXION — PARENT ET ADMINISTRATEUR

L'application doit proposer **deux types de connexion** :

1. **Espace Administrateur**
2. **Espace Parent**

⚠️ Le système reste **100 % front-end**.

Il ne faut pas créer d'authentification réelle ni de backend.

Utiliser des comptes fictifs/mockés et simuler la connexion avec React state et/ou localStorage.

---

# 1. PAGE DE CONNEXION

Créer une page `/login` moderne.

Afficher :

**École Fatoumata Binetou Niass**

Titre :

**Bienvenue dans votre espace**

Proposer deux choix :

### 👨‍💼 Administrateur

Bouton :

**Se connecter en tant qu'administrateur**

### 👨‍👩‍👧 Parent

Bouton :

**Se connecter en tant que parent**

---

# 2. CONNEXION ADMINISTRATEUR

Créer un compte administrateur fictif pour la démonstration.

Exemple :

Email :
`admin@ecole.test`

Mot de passe :
`admin123`

⚠️ Ces identifiants sont uniquement fictifs et doivent être utilisés pour simuler la connexion côté front-end.

Après connexion :

`/login` → `/admin/dashboard`

---

# 3. ESPACE ADMINISTRATEUR

Créer un dashboard spécifique à l'administrateur.

## Sidebar administrateur

### TABLEAU DE BORD

* Dashboard

### SCOLARITÉ

* Élèves
* Parents
* Classes
* Niveaux
* Matières
* Enseignants
* Évaluations
* Bulletins

### FINANCES

* Paiements
* Élèves non payés
* Rappels de paiement
* Dépenses
* Salaires

### PERSONNEL

* Personnel
* Enseignants

### RAPPORTS

* Rapports
* Statistiques

### ADMINISTRATION

* Utilisateurs
* Année scolaire
* Notifications
* Paramètres

### COMPTE

* Mon profil
* Déconnexion

---

# 4. DASHBOARD ADMINISTRATEUR

Afficher :

### Élèves

850

### Parents

620

### Enseignants

45

### Classes

25

### Paiements reçus

24 500 000 FCFA

### Impayés

8 750 000 FCFA

### Dépenses

12 300 000 FCFA

### Salaires

9 500 000 FCFA

Créer des graphiques :

* Élèves par niveau
* Élèves par classe
* Élèves par programme
* Paiements mensuels
* Dépenses mensuelles
* Revenus vs dépenses
* Élèves payés / non payés
* Résultats scolaires

---

# 5. ESPACE PARENT

Créer un espace complètement différent de celui de l'administrateur.

Après connexion parent :

`/login` → `/parent/dashboard`

Le parent ne doit voir **que les informations concernant son ou ses enfants**.

---

# 6. COMPTE PARENT FICTIF

Créer un compte de démonstration :

Email :
`parent@ecole.test`

Mot de passe :
`parent123`

⚠️ Connexion simulée uniquement côté front-end.

---

# 7. SIDEBAR PARENT

Créer une sidebar simplifiée.

### ACCUEIL

* Tableau de bord

### MES ENFANTS

* Mes enfants
* Profil de l'enfant
* Classe

### SCOLARITÉ

* Notes et évaluations
* Bulletins
* Emploi du temps
* Présences

### FINANCES

* Frais scolaires
* Paiements
* Solde à payer
* Historique des paiements

### COMMUNICATION

* Notifications
* Annonces de l'école

### COMPTE

* Mon profil
* Paramètres
* Déconnexion

---

# 8. DASHBOARD PARENT

Créer un tableau de bord chaleureux et simple.

Afficher une carte pour chaque enfant.

Exemple :

### 👧 Aminata Diop

Classe : CM2 A

Statut :

**Élève active**

Afficher :

* Classe
* Niveau
* Moyenne générale
* Rang
* Présence
* Solde scolaire

---

# 9. PLUSIEURS ENFANTS

Un parent peut avoir plusieurs enfants inscrits dans l'école.

Créer un sélecteur :

**Sélectionner un enfant**

Exemple :

* Aminata Diop — CM2 A
* Moussa Diop — 5e B
* Fatou Diop — CE2 A

Lorsque le parent sélectionne un enfant, toutes les informations affichées doivent correspondre à cet enfant.

---

# 10. PROFIL DE L'ENFANT

Afficher :

* Photo
* Nom
* Prénom
* Matricule
* Date de naissance
* Niveau
* Classe
* Programme
* Enseignant principal

Afficher également :

### Programme

* Enseignement français
* Enseignement arabe

---

# 11. NOTES ET ÉVALUATIONS

Créer une page permettant au parent de consulter les résultats de son enfant.

Afficher :

### Enseignement français

| Matière       |  Note | Coefficient | Moyenne |
| ------------- | ----: | ----------: | ------: |
| Français      | 15/20 |           2 |      15 |
| Mathématiques | 14/20 |           3 |      14 |
| Sciences      | 16/20 |           2 |      16 |

### Enseignement arabe

| Matière |  Note | Coefficient | Moyenne |
| ------- | ----: | ----------: | ------: |
| Arabe   | 16/20 |           2 |      16 |
| Coran   | 18/20 |           2 |      18 |
| Fiqh    | 15/20 |           1 |      15 |

Afficher :

* Moyenne générale
* Moyenne française
* Moyenne arabe
* Rang
* Appréciation

Le parent peut consulter les résultats mais **ne peut pas modifier les notes**.

---

# 12. BULLETINS

Créer une page permettant au parent de consulter les bulletins.

Afficher :

* Année scolaire
* Trimestre
* Classe
* Moyenne générale
* Rang

Ajouter :

**Voir le bulletin**

et

**Imprimer le bulletin**

Le bulletin doit contenir :

* Logo de l'école
* Nom de l'école
* Nom de l'élève
* Classe
* Année scolaire
* Matières françaises
* Matières arabes
* Notes
* Coefficients
* Moyennes
* Moyenne générale
* Rang
* Appréciations
* Signatures

---

# 13. PAIEMENTS PARENT

Créer une page `/parent/payments`.

Afficher :

### Frais scolaires

* Inscription
* Scolarité
* Cantine
* Transport
* Autres frais

Pour chaque frais :

* Montant total
* Montant payé
* Reste à payer
* Date limite
* Statut

Exemple :

**Scolarité annuelle**

Total : 600 000 FCFA

Payé : 400 000 FCFA

Reste : 200 000 FCFA

Statut :

🟠 Partiellement payé

---

# 14. HISTORIQUE DES PAIEMENTS

Afficher :

| Reçu | Date | Motif | Montant | Mode | Statut |
| ---- | ---- | ----- | ------: | ---- | ------ |

Exemple :

RC-2026-00125 | 10/08/2026 | Scolarité | 100 000 FCFA | Mobile Money | Payé

Ajouter :

**Voir le reçu**

et

**Imprimer le reçu**

---

# 15. RAPPELS DE PAIEMENT

Dans le dashboard parent, afficher une alerte lorsque des frais restent à payer.

Exemple :

### ⚠️ Paiement en attente

Il reste **200 000 FCFA** à régler pour la scolarité de Aminata Diop.

Date limite :

**30 septembre 2026**

Afficher :

**Voir les détails**

Le rappel est uniquement visuel.

---

# 16. PRÉSENCES

Créer une page `/parent/attendance`.

Afficher :

* Nombre de jours présents
* Absences
* Retards
* Taux de présence

Créer un calendrier avec les jours :

🟢 Présent

🔴 Absent

🟠 Retard

Le parent peut uniquement consulter ces informations.

---

# 17. EMPLOI DU TEMPS

Créer `/parent/schedule`.

Afficher l'emploi du temps de l'enfant.

Exemple :

| Heure | Lundi    | Mardi    | Mercredi | Jeudi    | Vendredi |
| ----- | -------- | -------- | -------- | -------- | -------- |
| 08:00 | Français | Maths    | Arabe    | Sciences | Maths    |
| 10:00 | Arabe    | Français | Coran    | Français | Arabe    |
| 14:00 | Sciences | Coran    | Maths    | Arabe    | Français |

Ajouter une distinction visuelle entre :

**Cours français**

et

**Cours arabe**

---

# 18. NOTIFICATIONS PARENT

Créer `/parent/notifications`.

Afficher des notifications fictives :

* Nouveau bulletin disponible
* Note ajoutée
* Réunion de parents
* Rappel de paiement
* Annonce de l'école
* Absence signalée
* Modification de l'emploi du temps

---

# 19. ANNONCES DE L'ÉCOLE

Créer une page permettant au parent de consulter :

* Actualités
* Réunions
* Événements
* Informations importantes
* Vacances scolaires

---

# 20. PROFIL DU PARENT

Créer `/parent/profile`.

Afficher :

* Photo
* Nom
* Prénom
* Téléphone
* Email
* Adresse

Ajouter :

* Modifier mon profil
* Modifier mon mot de passe

Ces modifications restent locales côté front-end.

---

# 21. SÉCURITÉ VISUELLE ET PERMISSIONS

Même si le système est uniquement front-end, simuler deux rôles :

### ADMINISTRATEUR

Peut :

* Voir tous les élèves
* Voir tous les parents
* Voir toutes les classes
* Ajouter/modifier/supprimer
* Gérer les paiements
* Gérer les dépenses
* Gérer les salaires
* Gérer les notes
* Gérer le personnel
* Voir les rapports

### PARENT

Peut uniquement :

* Voir ses enfants
* Voir les notes
* Voir les bulletins
* Voir les présences
* Voir l'emploi du temps
* Voir les paiements
* Voir les reçus
* Voir les notifications
* Voir les annonces

Le parent ne doit jamais voir :

* les autres élèves ;
* les salaires ;
* les dépenses de l'école ;
* les comptes des autres parents ;
* les données financières globales ;
* les paramètres administrateur.

---

# 22. NAVIGATION

Utiliser React Router.

Routes publiques :

`/`

`/login`

Routes administrateur :

`/admin/dashboard`

`/admin/students`

`/admin/parents`

`/admin/classes`

`/admin/subjects`

`/admin/evaluations`

`/admin/report-cards`

`/admin/payments`

`/admin/unpaid-students`

`/admin/payment-reminders`

`/admin/staff`

`/admin/salaries`

`/admin/expenses`

`/admin/reports`

`/admin/settings`

Routes parent :

`/parent/dashboard`

`/parent/children`

`/parent/children/:id`

`/parent/grades`

`/parent/report-cards`

`/parent/payments`

`/parent/attendance`

`/parent/schedule`

`/parent/notifications`

`/parent/announcements`

`/parent/profile`

---

# 23. EXPÉRIENCE UTILISATEUR

L'expérience doit être différente selon le rôle.

### Administrateur

Interface professionnelle de gestion avec :

* tableaux ;
* statistiques ;
* graphiques ;
* filtres ;
* actions CRUD ;
* rapports ;
* finances.

### Parent

Interface beaucoup plus simple avec :

* cartes des enfants ;
* notes ;
* bulletins ;
* paiements ;
* notifications ;
* emploi du temps ;
* présences.

Le parent doit pouvoir comprendre son tableau de bord en quelques secondes.

---

# 24. DESIGN

Le design doit être celui d'une **école franco-arabe moderne**.

Utiliser une identité visuelle élégante et professionnelle.

Prévoir :

* Mode clair
* Mode sombre
* Design responsive
* Icônes Lucide
* Graphiques Recharts
* Animations légères
* Toasts
* Modales
* Badges de statut
* Cartes statistiques
* Tableaux modernes

Le site doit être parfaitement utilisable sur :

* ordinateur ;
* tablette ;
* téléphone.

---

# 25. RAPPEL FINAL

Construire uniquement le **front-end**.

Utiliser des données mockées.

Simuler les comptes :

### Administrateur

Email : `admin@ecole.test`
Mot de passe : `admin123`

### Parent

Email : `parent@ecole.test`
Mot de passe : `parent123`

Après connexion, rediriger automatiquement l'utilisateur vers son espace selon son rôle.

L'application finale doit donner l'impression d'être un véritable **logiciel professionnel de gestion d'une école franco-arabe**, avec deux espaces distincts :

**ESPACE ADMINISTRATEUR**
Gestion complète de l'école.

**ESPACE PARENT**
Suivi des enfants, notes, bulletins, paiements, présences, emploi du temps et notifications.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://admin-parent-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/13953d2b-43f2-484e-9750-ff24e4626299).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
