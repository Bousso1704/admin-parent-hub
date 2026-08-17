import {
  Banknote, BarChart3, Bell, BookOpen, CalendarDays, CalendarRange, ClipboardList,
  CreditCard, FileBarChart, FileText, GraduationCap, Home, LayoutDashboard, LogOut,
  Megaphone, Receipt, Settings, ShieldCheck, Users, UserCog, UserRound, Wallet,
  Layers, AlertTriangle, BellRing, CalendarCheck, School,
} from "lucide-react";
import type { NavGroup } from "@/components/app/shell";

export const adminNav: NavGroup[] = [
  { title: "Tableau de bord", items: [{ label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard }] },
  {
    title: "Scolarité",
    items: [
      { label: "Élèves", to: "/admin/students", icon: GraduationCap },
      { label: "Parents", to: "/admin/parents", icon: Users },
      { label: "Classes", to: "/admin/classes", icon: School },
      { label: "Niveaux", to: "/admin/levels", icon: Layers },
      { label: "Matières", to: "/admin/subjects", icon: BookOpen },
      { label: "Enseignants", to: "/admin/teachers", icon: UserRound },
      { label: "Évaluations", to: "/admin/evaluations", icon: ClipboardList },
      { label: "Bulletins", to: "/admin/report-cards", icon: FileText },
    ],
  },
  {
    title: "Finances",
    items: [
      { label: "Paiements", to: "/admin/payments", icon: CreditCard },
      { label: "Élèves non payés", to: "/admin/unpaid-students", icon: AlertTriangle },
      { label: "Rappels de paiement", to: "/admin/payment-reminders", icon: BellRing },
      { label: "Dépenses", to: "/admin/expenses", icon: Wallet },
      { label: "Salaires", to: "/admin/salaries", icon: Banknote },
    ],
  },
  {
    title: "Personnel",
    items: [
      { label: "Personnel", to: "/admin/staff", icon: UserCog },
      { label: "Enseignants", to: "/admin/teachers", icon: UserRound },
    ],
  },
  {
    title: "Rapports",
    items: [
      { label: "Rapports", to: "/admin/reports", icon: FileBarChart },
      { label: "Statistiques", to: "/admin/statistics", icon: BarChart3 },
    ],
  },
  {
    title: "Administration",
    items: [
      { label: "Utilisateurs", to: "/admin/users", icon: ShieldCheck },
      { label: "Année scolaire", to: "/admin/school-year", icon: CalendarRange },
      { label: "Notifications", to: "/admin/notifications", icon: Bell },
      { label: "Paramètres", to: "/admin/settings", icon: Settings },
    ],
  },
  {
    title: "Compte",
    items: [
      { label: "Mon profil", to: "/admin/profile", icon: UserRound },
      { label: "Déconnexion", to: "/login", icon: LogOut, action: "logout" },
    ],
  },
];

export const parentNav: NavGroup[] = [
  { title: "Accueil", items: [{ label: "Tableau de bord", to: "/parent/dashboard", icon: Home }] },
  {
    title: "Mes enfants",
    items: [
      { label: "Mes enfants", to: "/parent/children", icon: Users },
      { label: "Profil de l'enfant", to: "/parent/child-profile", icon: UserRound },
      { label: "Classe", to: "/parent/class", icon: School },
    ],
  },
  {
    title: "Scolarité",
    items: [
      { label: "Notes et évaluations", to: "/parent/grades", icon: ClipboardList },
      { label: "Bulletins", to: "/parent/report-cards", icon: FileText },
      { label: "Emploi du temps", to: "/parent/schedule", icon: CalendarDays },
      { label: "Présences", to: "/parent/attendance", icon: CalendarCheck },
    ],
  },
  {
    title: "Finances",
    items: [
      { label: "Frais scolaires", to: "/parent/fees", icon: Wallet },
      { label: "Paiements", to: "/parent/payments", icon: CreditCard },
      { label: "Solde à payer", to: "/parent/balance", icon: Banknote },
      { label: "Historique des paiements", to: "/parent/payment-history", icon: Receipt },
    ],
  },
  {
    title: "Communication",
    items: [
      { label: "Notifications", to: "/parent/notifications", icon: Bell },
      { label: "Annonces de l'école", to: "/parent/announcements", icon: Megaphone },
    ],
  },
  {
    title: "Compte",
    items: [
      { label: "Mon profil", to: "/parent/profile", icon: UserRound },
      { label: "Paramètres", to: "/parent/settings", icon: Settings },
      { label: "Déconnexion", to: "/login", icon: LogOut, action: "logout" },
    ],
  },
];
