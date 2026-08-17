import { createFileRoute } from "@tanstack/react-router";
import { Wallet, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { StatCard } from "@/components/app/stat-card";
import { fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/balance")({
  head: () => metaFor("Solde à payer", "Solde restant à régler pour la scolarité de votre enfant."),
  component: Balance,
});

function Balance() {
  const child = useChild();
  const total = child.frais.reduce((s, f) => s + f.total, 0);
  const paye = child.frais.reduce((s, f) => s + f.paye, 0);
  return (
    <>
      <PageHeader title="Solde à payer" subtitle={`${child.prenom} — ${child.classe}`} actions={<ChildSelector />} />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total des frais" value={fcfa(total)} icon={Wallet} />
        <StatCard label="Déjà payé" value={fcfa(paye)} icon={CheckCircle2} tone="success" />
        <StatCard label="Reste à payer" value={fcfa(total - paye)} icon={AlertTriangle} tone={total - paye > 0 ? "destructive" : "success"} />
      </div>
    </>
  );
}
