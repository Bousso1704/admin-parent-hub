import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { StatusBadge } from "@/components/app/stat-card";
import { Progress } from "@/components/ui/progress";
import { fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/fees")({
  head: () => metaFor("Frais scolaires", "Détail des frais scolaires de votre enfant : inscription, scolarité, cantine, transport."),
  component: Fees,
});

export function FeesList() {
  const child = useChild();
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {child.frais.map((f) => {
        const reste = f.total - f.paye;
        const statut = reste === 0 ? "Payé" : f.paye === 0 ? "Impayé" : "Partiellement payé";
        return (
          <div key={f.libelle} className="card-elevated p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-display text-lg font-semibold">{f.libelle}</p>
              <StatusBadge status={statut} />
            </div>
            <Progress value={(f.paye / f.total) * 100} className="mt-4" />
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div><dt className="text-xs text-muted-foreground">Total</dt><dd className="font-medium">{fcfa(f.total)}</dd></div>
              <div><dt className="text-xs text-muted-foreground">Payé</dt><dd className="font-medium text-success">{fcfa(f.paye)}</dd></div>
              <div><dt className="text-xs text-muted-foreground">Reste à payer</dt><dd className={reste ? "font-semibold text-destructive" : "font-medium"}>{fcfa(reste)}</dd></div>
              <div><dt className="text-xs text-muted-foreground">Date limite</dt><dd className="font-medium">{f.limite}</dd></div>
            </dl>
          </div>
        );
      })}
    </div>
  );
}

function Fees() {
  const child = useChild();
  return (
    <>
      <PageHeader title="Frais scolaires" subtitle={`${child.prenom} — ${child.classe}`} actions={<ChildSelector />} />
      <FeesList />
    </>
  );
}
