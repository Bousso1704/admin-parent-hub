import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CalendarCheck, GraduationCap, Medal, Wallet, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { StatCard, StatusBadge } from "@/components/app/stat-card";
import { Button } from "@/components/ui/button";
import { children, fcfa, parentNotifications } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/dashboard")({
  head: () => metaFor("Espace parent", "Suivi scolaire et financier de vos enfants : moyennes, présences et soldes."),
  component: ParentDashboard,
});

function ParentDashboard() {
  const child = useChild();
  const dettes = children.filter((c) => c.solde > 0);
  const dette = dettes[0];

  return (
    <>
      <PageHeader
        title="Bonjour Ibrahima 👋"
        subtitle="Voici le suivi de vos enfants à l'École Fatoumata Binetou Niass"
        actions={<ChildSelector />}
      />

      {dette && (
        <div className="mb-6 rounded-2xl border border-warning/40 bg-warning/12 p-5">
          <div className="flex flex-wrap items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-warning-foreground" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-semibold">⚠️ Paiement en attente</p>
              <p className="mt-1 text-sm">
                Il reste <strong>{fcfa(dette.solde)}</strong> à régler pour la scolarité de{" "}
                {dette.prenom} {dette.nom}.
              </p>
              <p className="text-sm text-muted-foreground">Date limite : 30 septembre 2026</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/parent/payments">
                Voir les détails <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {children.map((c) => (
          <div key={c.id} className="card-elevated p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-xl font-semibold">
                  {c.emoji} {c.prenom} {c.nom}
                </p>
                <p className="text-sm text-muted-foreground">Classe : {c.classe}</p>
              </div>
              <StatusBadge status="Élève active" />
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Niveau</dt>
                <dd className="font-medium">{c.niveau}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Moyenne générale</dt>
                <dd className="font-medium">{c.moyenne.toFixed(2)} / 20</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Rang</dt>
                <dd className="font-medium">{c.rang}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Présence</dt>
                <dd className="font-medium">{c.presence} %</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-muted-foreground">Solde scolaire</dt>
                <dd className={c.solde > 0 ? "font-semibold text-destructive" : "font-semibold text-success"}>
                  {c.solde > 0 ? fcfa(c.solde) : "À jour"}
                </dd>
              </div>
            </dl>
            <Button asChild variant="outline" size="sm" className="mt-4 w-full">
              <Link to="/parent/children/$id" params={{ id: c.id }}>
                Voir le profil
              </Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <StatCard label="Moyenne générale" value={`${child.moyenne.toFixed(2)} / 20`} hint={`${child.prenom} — ${child.classe}`} icon={GraduationCap} />
        <StatCard label="Rang" value={child.rang} hint="Classement du trimestre" icon={Medal} tone="gold" />
        <StatCard label="Taux de présence" value={`${child.presence} %`} hint={`${child.presences.absences} absences`} icon={CalendarCheck} tone="success" />
        <StatCard
          label="Solde à payer"
          value={child.solde > 0 ? fcfa(child.solde) : "0 FCFA"}
          hint={child.solde > 0 ? "Échéance : 30/09/2026" : "Aucun impayé"}
          icon={Wallet}
          tone={child.solde > 0 ? "destructive" : "success"}
        />
      </div>

      <div className="mt-6 card-elevated p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-semibold">Dernières notifications</p>
          <Button asChild variant="ghost" size="sm">
            <Link to="/parent/notifications">Tout voir</Link>
          </Button>
        </div>
        <ul className="mt-3 divide-y divide-border">
          {parentNotifications.slice(0, 4).map((n) => (
            <li key={n.titre} className="py-3">
              <p className="text-sm font-medium">{n.titre}</p>
              <p className="text-sm text-muted-foreground">{n.texte}</p>
              <p className="text-xs text-muted-foreground">{n.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
