export const SCHOOL = {
  name: "École Fatoumata Binetou Niass",
  tagline: "Enseignement franco-arabe d'excellence",
  year: "2025 - 2026",
  address: "Cité Keur Gorgui, Dakar, Sénégal",
  phone: "+221 33 800 12 34",
};

export const fcfa = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";

export const adminStats = {
  students: 850,
  parents: 620,
  teachers: 45,
  classes: 25,
  paymentsReceived: 24_500_000,
  unpaid: 8_750_000,
  expenses: 12_300_000,
  salaries: 9_500_000,
};

export const studentsByLevel = [
  { name: "Maternelle", value: 120 },
  { name: "Élémentaire", value: 340 },
  { name: "Collège", value: 250 },
  { name: "Lycée", value: 140 },
];

export const studentsByClass = [
  { name: "CI", value: 62 },
  { name: "CP", value: 70 },
  { name: "CE1", value: 68 },
  { name: "CE2", value: 74 },
  { name: "CM1", value: 66 },
  { name: "CM2", value: 71 },
  { name: "6e", value: 64 },
  { name: "5e", value: 58 },
  { name: "4e", value: 55 },
  { name: "3e", value: 52 },
];

export const studentsByProgram = [
  { name: "Enseignement français", value: 850 },
  { name: "Enseignement arabe", value: 690 },
  { name: "Double programme", value: 620 },
];

export const monthlyFinance = [
  { mois: "Oct", paiements: 3_200_000, depenses: 1_650_000 },
  { mois: "Nov", paiements: 2_950_000, depenses: 1_720_000 },
  { mois: "Déc", paiements: 3_450_000, depenses: 1_980_000 },
  { mois: "Jan", paiements: 2_780_000, depenses: 1_540_000 },
  { mois: "Fév", paiements: 3_100_000, depenses: 1_610_000 },
  { mois: "Mar", paiements: 2_640_000, depenses: 1_480_000 },
  { mois: "Avr", paiements: 3_380_000, depenses: 1_720_000 },
  { mois: "Mai", paiements: 3_000_000, depenses: 1_600_000 },
];

export const paidVsUnpaid = [
  { name: "Élèves à jour", value: 612 },
  { name: "Élèves non à jour", value: 238 },
];

export const academicResults = [
  { niveau: "CI-CP", francais: 14.2, arabe: 15.1 },
  { niveau: "CE1-CE2", francais: 13.6, arabe: 14.7 },
  { niveau: "CM1-CM2", francais: 13.1, arabe: 14.2 },
  { niveau: "6e-5e", francais: 12.4, arabe: 13.8 },
  { niveau: "4e-3e", francais: 12.9, arabe: 13.5 },
];

export type AdminStudent = {
  matricule: string;
  nom: string;
  classe: string;
  niveau: string;
  programme: string;
  tuteur: string;
  solde: number;
  statut: "À jour" | "Partiel" | "Impayé";
};

export const adminStudents: AdminStudent[] = [
  { matricule: "EFB-2026-0125", nom: "Aminata Diop", classe: "CM2 A", niveau: "Élémentaire", programme: "Double", tuteur: "Ibrahima Diop", solde: 200_000, statut: "Partiel" },
  { matricule: "EFB-2026-0126", nom: "Moussa Diop", classe: "5e B", niveau: "Collège", programme: "Double", tuteur: "Ibrahima Diop", solde: 0, statut: "À jour" },
  { matricule: "EFB-2026-0127", nom: "Fatou Diop", classe: "CE2 A", niveau: "Élémentaire", programme: "Français", tuteur: "Ibrahima Diop", solde: 75_000, statut: "Partiel" },
  { matricule: "EFB-2026-0131", nom: "Ousmane Ndiaye", classe: "6e A", niveau: "Collège", programme: "Double", tuteur: "Awa Ndiaye", solde: 0, statut: "À jour" },
  { matricule: "EFB-2026-0142", nom: "Khadija Sow", classe: "CM1 B", niveau: "Élémentaire", programme: "Arabe", tuteur: "Modou Sow", solde: 320_000, statut: "Impayé" },
  { matricule: "EFB-2026-0158", nom: "Cheikh Fall", classe: "3e A", niveau: "Collège", programme: "Double", tuteur: "Rama Fall", solde: 0, statut: "À jour" },
  { matricule: "EFB-2026-0163", nom: "Mariama Ba", classe: "CP A", niveau: "Élémentaire", programme: "Français", tuteur: "Seynabou Ba", solde: 150_000, statut: "Partiel" },
  { matricule: "EFB-2026-0170", nom: "Abdoulaye Sarr", classe: "4e B", niveau: "Collège", programme: "Arabe", tuteur: "Bara Sarr", solde: 410_000, statut: "Impayé" },
];

export const adminParents = [
  { nom: "Ibrahima Diop", tel: "+221 77 123 45 67", email: "parent@ecole.test", enfants: 3, solde: 275_000 },
  { nom: "Awa Ndiaye", tel: "+221 76 887 21 09", email: "awa.ndiaye@mail.test", enfants: 1, solde: 0 },
  { nom: "Modou Sow", tel: "+221 78 445 90 12", email: "modou.sow@mail.test", enfants: 2, solde: 320_000 },
  { nom: "Rama Fall", tel: "+221 77 990 44 31", email: "rama.fall@mail.test", enfants: 1, solde: 0 },
  { nom: "Seynabou Ba", tel: "+221 70 331 55 02", email: "seynabou.ba@mail.test", enfants: 2, solde: 150_000 },
];

export const adminClasses = [
  { classe: "CP A", niveau: "Élémentaire", effectif: 34, prof: "Mme Ndèye Fall", salle: "B12" },
  { classe: "CE2 A", niveau: "Élémentaire", effectif: 36, prof: "M. Alioune Kane", salle: "B14" },
  { classe: "CM1 B", niveau: "Élémentaire", effectif: 32, prof: "Mme Aïcha Mbaye", salle: "B21" },
  { classe: "CM2 A", niveau: "Élémentaire", effectif: 38, prof: "Mme Aïssatou Ndiaye", salle: "B22" },
  { classe: "6e A", niveau: "Collège", effectif: 40, prof: "M. Cheikh Diallo", salle: "C03" },
  { classe: "5e B", niveau: "Collège", effectif: 37, prof: "M. Serigne Mbacké", salle: "C08" },
  { classe: "4e B", niveau: "Collège", effectif: 35, prof: "Mme Coumba Sy", salle: "C11" },
  { classe: "3e A", niveau: "Collège", effectif: 33, prof: "M. Ibrahima Faye", salle: "C15" },
];

export const adminLevels = [
  { niveau: "Maternelle", classes: 4, effectif: 120, cycle: "Préscolaire" },
  { niveau: "Élémentaire", classes: 10, effectif: 340, cycle: "Primaire" },
  { niveau: "Collège", classes: 8, effectif: 250, cycle: "Moyen" },
  { niveau: "Lycée", classes: 3, effectif: 140, cycle: "Secondaire" },
];

export const adminSubjects = [
  { matiere: "Français", programme: "Français", coef: 3, enseignants: 8 },
  { matiere: "Mathématiques", programme: "Français", coef: 3, enseignants: 7 },
  { matiere: "Sciences (SVT)", programme: "Français", coef: 2, enseignants: 4 },
  { matiere: "Histoire-Géographie", programme: "Français", coef: 2, enseignants: 3 },
  { matiere: "Anglais", programme: "Français", coef: 2, enseignants: 3 },
  { matiere: "Langue arabe", programme: "Arabe", coef: 3, enseignants: 6 },
  { matiere: "Coran / Tajwid", programme: "Arabe", coef: 2, enseignants: 5 },
  { matiere: "Fiqh", programme: "Arabe", coef: 1, enseignants: 3 },
  { matiere: "Sîra", programme: "Arabe", coef: 1, enseignants: 2 },
];

export const adminTeachers = [
  { nom: "Mme Aïssatou Ndiaye", matiere: "Français", programme: "Français", classes: "CM2 A, CM1 B", tel: "+221 77 222 11 04" },
  { nom: "M. Cheikh Diallo", matiere: "Mathématiques", programme: "Français", classes: "6e A, 5e B", tel: "+221 76 554 33 21" },
  { nom: "Cheikh Ahmadou Bâ", matiere: "Langue arabe", programme: "Arabe", classes: "CM2 A, CE2 A", tel: "+221 78 112 66 08" },
  { nom: "Oustaz Serigne Fall", matiere: "Coran / Tajwid", programme: "Arabe", classes: "Tous niveaux", tel: "+221 77 903 71 55" },
  { nom: "Mme Coumba Sy", matiere: "Sciences", programme: "Français", classes: "4e B, 3e A", tel: "+221 70 664 12 89" },
];

export const adminEvaluations = [
  { date: "12/08/2026", classe: "CM2 A", matiere: "Mathématiques", type: "Devoir n°2", moyenne: 13.4, statut: "Notée" },
  { date: "10/08/2026", classe: "CM2 A", matiere: "Langue arabe", type: "Composition", moyenne: 15.2, statut: "Notée" },
  { date: "08/08/2026", classe: "5e B", matiere: "Français", type: "Devoir n°2", moyenne: 12.1, statut: "Notée" },
  { date: "05/08/2026", classe: "6e A", matiere: "Coran", type: "Récitation", moyenne: 16.8, statut: "Notée" },
  { date: "20/08/2026", classe: "3e A", matiere: "Sciences", type: "Composition", moyenne: 0, statut: "Planifiée" },
];

export const adminReportCards = [
  { classe: "CM2 A", trimestre: "Trimestre 2", effectif: 38, generes: 38, moyenne: 13.6, statut: "Publié" },
  { classe: "CE2 A", trimestre: "Trimestre 2", effectif: 36, generes: 36, moyenne: 14.1, statut: "Publié" },
  { classe: "5e B", trimestre: "Trimestre 2", effectif: 37, generes: 30, moyenne: 12.8, statut: "En cours" },
  { classe: "3e A", trimestre: "Trimestre 2", effectif: 33, generes: 0, moyenne: 0, statut: "À générer" },
];

export const adminPayments = [
  { recu: "RC-2026-00125", date: "10/08/2026", eleve: "Aminata Diop", motif: "Scolarité", montant: 100_000, mode: "Mobile Money", statut: "Payé" },
  { recu: "RC-2026-00124", date: "08/08/2026", eleve: "Moussa Diop", motif: "Cantine", montant: 45_000, mode: "Espèces", statut: "Payé" },
  { recu: "RC-2026-00123", date: "05/08/2026", eleve: "Ousmane Ndiaye", motif: "Scolarité", montant: 150_000, mode: "Virement", statut: "Payé" },
  { recu: "RC-2026-00122", date: "02/08/2026", eleve: "Mariama Ba", motif: "Inscription", montant: 50_000, mode: "Mobile Money", statut: "Payé" },
  { recu: "RC-2026-00121", date: "28/07/2026", eleve: "Fatou Diop", motif: "Transport", montant: 30_000, mode: "Espèces", statut: "Payé" },
];

export const adminExpenses = [
  { date: "12/08/2026", categorie: "Fournitures", libelle: "Manuels scolaires arabes", montant: 850_000, statut: "Payée" },
  { date: "07/08/2026", categorie: "Énergie", libelle: "Facture SENELEC", montant: 420_000, statut: "Payée" },
  { date: "03/08/2026", categorie: "Maintenance", libelle: "Réfection salles B", montant: 1_250_000, statut: "En attente" },
  { date: "01/08/2026", categorie: "Transport", libelle: "Carburant bus scolaires", montant: 380_000, statut: "Payée" },
];

export const adminSalaries = [
  { nom: "Mme Aïssatou Ndiaye", poste: "Enseignante français", brut: 320_000, net: 285_000, statut: "Versé" },
  { nom: "Cheikh Ahmadou Bâ", poste: "Enseignant arabe", brut: 300_000, net: 268_000, statut: "Versé" },
  { nom: "M. Cheikh Diallo", poste: "Enseignant maths", brut: 340_000, net: 302_000, statut: "Versé" },
  { nom: "Mme Bineta Gueye", poste: "Secrétaire", brut: 210_000, net: 192_000, statut: "En attente" },
];

export const adminStaff = [
  { nom: "Mme Bineta Gueye", poste: "Secrétaire générale", service: "Administration", tel: "+221 77 445 12 03" },
  { nom: "M. Pape Sarr", poste: "Comptable", service: "Finances", tel: "+221 76 220 89 41" },
  { nom: "M. Malick Ndour", poste: "Surveillant général", service: "Vie scolaire", tel: "+221 78 771 30 22" },
  { nom: "Mme Fatou Cissé", poste: "Infirmière", service: "Santé", tel: "+221 70 118 62 90" },
];

export const adminUsers = [
  { nom: "Directeur Général", email: "admin@ecole.test", role: "Administrateur", statut: "Actif" },
  { nom: "Pape Sarr", email: "comptable@ecole.test", role: "Comptable", statut: "Actif" },
  { nom: "Bineta Gueye", email: "secretariat@ecole.test", role: "Secrétariat", statut: "Actif" },
  { nom: "Ibrahima Diop", email: "parent@ecole.test", role: "Parent", statut: "Actif" },
];

/* ---------------- PARENT SIDE ---------------- */

export type Child = {
  id: string;
  prenom: string;
  nom: string;
  emoji: string;
  matricule: string;
  naissance: string;
  classe: string;
  niveau: string;
  programme: string;
  enseignant: string;
  moyenne: number;
  rang: string;
  presence: number;
  solde: number;
  appreciation: string;
  notesFr: { matiere: string; note: number; coef: number }[];
  notesAr: { matiere: string; note: number; coef: number }[];
  frais: {
    libelle: string;
    total: number;
    paye: number;
    limite: string;
  }[];
  paiements: {
    recu: string;
    date: string;
    motif: string;
    montant: number;
    mode: string;
  }[];
  presences: { jours: number; absences: number; retards: number };
  calendrier: { jour: number; statut: "present" | "absent" | "retard" }[];
  emploi: Record<string, { heure: string; cours: string; type: "fr" | "ar" }[]>;
  bulletins: { trimestre: string; moyenne: number; rang: string; annee: string }[];
};

const calendrier = (absents: number[], retards: number[]) =>
  Array.from({ length: 30 }, (_, i) => {
    const jour = i + 1;
    const statut = absents.includes(jour)
      ? ("absent" as const)
      : retards.includes(jour)
        ? ("retard" as const)
        : ("present" as const);
    return { jour, statut };
  });

export const children: Child[] = [
  {
    id: "aminata",
    prenom: "Aminata",
    nom: "Diop",
    emoji: "👧",
    matricule: "EFB-2026-0125",
    naissance: "14 mars 2015",
    classe: "CM2 A",
    niveau: "Élémentaire",
    programme: "Français + Arabe",
    enseignant: "Mme Aïssatou Ndiaye",
    moyenne: 15.4,
    rang: "3e / 38",
    presence: 96,
    solde: 200_000,
    appreciation: "Élève sérieuse et appliquée. Excellents résultats en arabe, continuez ainsi.",
    notesFr: [
      { matiere: "Français", note: 15, coef: 2 },
      { matiere: "Mathématiques", note: 14, coef: 3 },
      { matiere: "Sciences", note: 16, coef: 2 },
    ],
    notesAr: [
      { matiere: "Arabe", note: 16, coef: 2 },
      { matiere: "Coran", note: 18, coef: 2 },
      { matiere: "Fiqh", note: 15, coef: 1 },
    ],
    frais: [
      { libelle: "Inscription", total: 50_000, paye: 50_000, limite: "15/09/2026" },
      { libelle: "Scolarité annuelle", total: 600_000, paye: 400_000, limite: "30/09/2026" },
      { libelle: "Cantine", total: 120_000, paye: 120_000, limite: "30/10/2026" },
      { libelle: "Transport", total: 90_000, paye: 60_000, limite: "30/10/2026" },
      { libelle: "Autres frais", total: 25_000, paye: 25_000, limite: "30/11/2026" },
    ],
    paiements: [
      { recu: "RC-2026-00125", date: "10/08/2026", motif: "Scolarité", montant: 100_000, mode: "Mobile Money" },
      { recu: "RC-2026-00108", date: "12/07/2026", motif: "Scolarité", montant: 150_000, mode: "Virement" },
      { recu: "RC-2026-00091", date: "20/06/2026", motif: "Cantine", montant: 120_000, mode: "Espèces" },
      { recu: "RC-2026-00074", date: "15/09/2025", motif: "Inscription", montant: 50_000, mode: "Mobile Money" },
    ],
    presences: { jours: 112, absences: 4, retards: 3 },
    calendrier: calendrier([7, 18], [3, 24]),
    emploi: {
      Lundi: [
        { heure: "08:00", cours: "Français", type: "fr" },
        { heure: "10:00", cours: "Arabe", type: "ar" },
        { heure: "14:00", cours: "Sciences", type: "fr" },
      ],
      Mardi: [
        { heure: "08:00", cours: "Maths", type: "fr" },
        { heure: "10:00", cours: "Français", type: "fr" },
        { heure: "14:00", cours: "Coran", type: "ar" },
      ],
      Mercredi: [
        { heure: "08:00", cours: "Arabe", type: "ar" },
        { heure: "10:00", cours: "Coran", type: "ar" },
        { heure: "14:00", cours: "Maths", type: "fr" },
      ],
      Jeudi: [
        { heure: "08:00", cours: "Sciences", type: "fr" },
        { heure: "10:00", cours: "Français", type: "fr" },
        { heure: "14:00", cours: "Arabe", type: "ar" },
      ],
      Vendredi: [
        { heure: "08:00", cours: "Maths", type: "fr" },
        { heure: "10:00", cours: "Arabe", type: "ar" },
        { heure: "14:00", cours: "Français", type: "fr" },
      ],
    },
    bulletins: [
      { trimestre: "Trimestre 1", moyenne: 14.8, rang: "5e / 38", annee: "2025 - 2026" },
      { trimestre: "Trimestre 2", moyenne: 15.4, rang: "3e / 38", annee: "2025 - 2026" },
    ],
  },
  {
    id: "moussa",
    prenom: "Moussa",
    nom: "Diop",
    emoji: "👦",
    matricule: "EFB-2026-0126",
    naissance: "2 juillet 2012",
    classe: "5e B",
    niveau: "Collège",
    programme: "Français + Arabe",
    enseignant: "M. Serigne Mbacké",
    moyenne: 13.2,
    rang: "11e / 37",
    presence: 92,
    solde: 0,
    appreciation: "Résultats corrects. Doit renforcer la régularité en mathématiques.",
    notesFr: [
      { matiere: "Français", note: 12, coef: 2 },
      { matiere: "Mathématiques", note: 11, coef: 3 },
      { matiere: "Sciences", note: 14, coef: 2 },
    ],
    notesAr: [
      { matiere: "Arabe", note: 15, coef: 2 },
      { matiere: "Coran", note: 16, coef: 2 },
      { matiere: "Fiqh", note: 14, coef: 1 },
    ],
    frais: [
      { libelle: "Inscription", total: 50_000, paye: 50_000, limite: "15/09/2026" },
      { libelle: "Scolarité annuelle", total: 750_000, paye: 750_000, limite: "30/09/2026" },
      { libelle: "Cantine", total: 120_000, paye: 120_000, limite: "30/10/2026" },
      { libelle: "Transport", total: 90_000, paye: 90_000, limite: "30/10/2026" },
      { libelle: "Autres frais", total: 25_000, paye: 25_000, limite: "30/11/2026" },
    ],
    paiements: [
      { recu: "RC-2026-00124", date: "08/08/2026", motif: "Cantine", montant: 45_000, mode: "Espèces" },
      { recu: "RC-2026-00099", date: "05/07/2026", motif: "Scolarité", montant: 250_000, mode: "Virement" },
      { recu: "RC-2026-00061", date: "18/09/2025", motif: "Inscription", montant: 50_000, mode: "Mobile Money" },
    ],
    presences: { jours: 108, absences: 8, retards: 5 },
    calendrier: calendrier([4, 5, 21], [9, 16, 27]),
    emploi: {
      Lundi: [
        { heure: "08:00", cours: "Maths", type: "fr" },
        { heure: "10:00", cours: "Arabe", type: "ar" },
        { heure: "14:00", cours: "Histoire-Géo", type: "fr" },
      ],
      Mardi: [
        { heure: "08:00", cours: "Français", type: "fr" },
        { heure: "10:00", cours: "Fiqh", type: "ar" },
        { heure: "14:00", cours: "Anglais", type: "fr" },
      ],
      Mercredi: [
        { heure: "08:00", cours: "Coran", type: "ar" },
        { heure: "10:00", cours: "Maths", type: "fr" },
        { heure: "14:00", cours: "Arabe", type: "ar" },
      ],
      Jeudi: [
        { heure: "08:00", cours: "Sciences", type: "fr" },
        { heure: "10:00", cours: "Arabe", type: "ar" },
        { heure: "14:00", cours: "Français", type: "fr" },
      ],
      Vendredi: [
        { heure: "08:00", cours: "Coran", type: "ar" },
        { heure: "10:00", cours: "Maths", type: "fr" },
        { heure: "14:00", cours: "Sîra", type: "ar" },
      ],
    },
    bulletins: [
      { trimestre: "Trimestre 1", moyenne: 12.6, rang: "15e / 37", annee: "2025 - 2026" },
      { trimestre: "Trimestre 2", moyenne: 13.2, rang: "11e / 37", annee: "2025 - 2026" },
    ],
  },
  {
    id: "fatou",
    prenom: "Fatou",
    nom: "Diop",
    emoji: "👧",
    matricule: "EFB-2026-0127",
    naissance: "9 novembre 2017",
    classe: "CE2 A",
    niveau: "Élémentaire",
    programme: "Français + Arabe",
    enseignant: "M. Alioune Kane",
    moyenne: 16.1,
    rang: "1re / 36",
    presence: 99,
    solde: 75_000,
    appreciation: "Excellente élève, première de la classe. Félicitations du conseil.",
    notesFr: [
      { matiere: "Français", note: 17, coef: 2 },
      { matiere: "Mathématiques", note: 16, coef: 3 },
      { matiere: "Sciences", note: 15, coef: 2 },
    ],
    notesAr: [
      { matiere: "Arabe", note: 16, coef: 2 },
      { matiere: "Coran", note: 17, coef: 2 },
      { matiere: "Fiqh", note: 15, coef: 1 },
    ],
    frais: [
      { libelle: "Inscription", total: 50_000, paye: 50_000, limite: "15/09/2026" },
      { libelle: "Scolarité annuelle", total: 550_000, paye: 500_000, limite: "30/09/2026" },
      { libelle: "Cantine", total: 120_000, paye: 95_000, limite: "30/10/2026" },
      { libelle: "Transport", total: 90_000, paye: 90_000, limite: "30/10/2026" },
      { libelle: "Autres frais", total: 25_000, paye: 25_000, limite: "30/11/2026" },
    ],
    paiements: [
      { recu: "RC-2026-00121", date: "28/07/2026", motif: "Transport", montant: 30_000, mode: "Espèces" },
      { recu: "RC-2026-00103", date: "10/07/2026", motif: "Scolarité", montant: 200_000, mode: "Mobile Money" },
      { recu: "RC-2026-00066", date: "16/09/2025", motif: "Inscription", montant: 50_000, mode: "Virement" },
    ],
    presences: { jours: 118, absences: 1, retards: 1 },
    calendrier: calendrier([13], [22]),
    emploi: {
      Lundi: [
        { heure: "08:00", cours: "Français", type: "fr" },
        { heure: "10:00", cours: "Coran", type: "ar" },
        { heure: "14:00", cours: "Maths", type: "fr" },
      ],
      Mardi: [
        { heure: "08:00", cours: "Arabe", type: "ar" },
        { heure: "10:00", cours: "Français", type: "fr" },
        { heure: "14:00", cours: "Éveil", type: "fr" },
      ],
      Mercredi: [
        { heure: "08:00", cours: "Maths", type: "fr" },
        { heure: "10:00", cours: "Arabe", type: "ar" },
        { heure: "14:00", cours: "Coran", type: "ar" },
      ],
      Jeudi: [
        { heure: "08:00", cours: "Sciences", type: "fr" },
        { heure: "10:00", cours: "Arabe", type: "ar" },
        { heure: "14:00", cours: "Français", type: "fr" },
      ],
      Vendredi: [
        { heure: "08:00", cours: "Coran", type: "ar" },
        { heure: "10:00", cours: "Français", type: "fr" },
        { heure: "14:00", cours: "Arabe", type: "ar" },
      ],
    },
    bulletins: [
      { trimestre: "Trimestre 1", moyenne: 15.9, rang: "2e / 36", annee: "2025 - 2026" },
      { trimestre: "Trimestre 2", moyenne: 16.1, rang: "1re / 36", annee: "2025 - 2026" },
    ],
  },
];

export const parentProfile = {
  prenom: "Ibrahima",
  nom: "Diop",
  email: "parent@ecole.test",
  tel: "+221 77 123 45 67",
  adresse: "Villa 42, Cité Keur Gorgui, Dakar",
};

export const parentNotifications = [
  { titre: "Nouveau bulletin disponible", texte: "Le bulletin du Trimestre 2 d'Aminata Diop est consultable.", date: "16/08/2026", type: "bulletin" },
  { titre: "Note ajoutée", texte: "Une note de Coran (18/20) a été ajoutée pour Aminata Diop.", date: "15/08/2026", type: "note" },
  { titre: "Réunion de parents", texte: "Réunion des parents du CM2 le samedi 29 août à 10h.", date: "14/08/2026", type: "reunion" },
  { titre: "Rappel de paiement", texte: "Il reste 200 000 FCFA à régler pour la scolarité d'Aminata.", date: "12/08/2026", type: "paiement" },
  { titre: "Annonce de l'école", texte: "Journée culturelle franco-arabe le 5 septembre 2026.", date: "10/08/2026", type: "annonce" },
  { titre: "Absence signalée", texte: "Moussa Diop a été absent le 21/08/2026 (matinée).", date: "09/08/2026", type: "absence" },
  { titre: "Modification de l'emploi du temps", texte: "Le cours de Fiqh du mardi passe de 10h à 11h.", date: "07/08/2026", type: "emploi" },
];

export const announcements = [
  { categorie: "Actualité", titre: "Rentrée scolaire 2026-2027", texte: "Les inscriptions et réinscriptions sont ouvertes du 1er au 25 septembre au secrétariat.", date: "16/08/2026" },
  { categorie: "Réunion", titre: "Réunion des parents d'élèves", texte: "Rencontre avec les enseignants principaux le samedi 29 août à 10h dans la grande salle.", date: "14/08/2026" },
  { categorie: "Événement", titre: "Journée culturelle franco-arabe", texte: "Récitations coraniques, théâtre en français et exposition des travaux d'élèves.", date: "10/08/2026" },
  { categorie: "Information", titre: "Nouvelle procédure de paiement", texte: "Les paiements Mobile Money sont désormais acceptés avec reçu numérique immédiat.", date: "05/08/2026" },
  { categorie: "Vacances", titre: "Vacances de mi-trimestre", texte: "Les cours sont suspendus du 20 au 28 octobre 2026 inclus.", date: "01/08/2026" },
];

export const moyenne = (notes: { note: number; coef: number }[]) => {
  const total = notes.reduce((s, n) => s + n.coef, 0);
  if (!total) return 0;
  return notes.reduce((s, n) => s + n.note * n.coef, 0) / total;
};
