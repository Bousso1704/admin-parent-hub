import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { FeesList } from "./fees";
import { PaymentHistory } from "@/components/app/payment-history";
import { fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/payments")({
  head: () => metaFor("Paiements", "Frais scolaires, soldes et historique des paiements de votre enfant."),
  component: Payments,
});

function Payments() {
  const child = useChild();
  return (
    <>
      <PageHeader title="Paiements" subtitle={`${child.prenom} ${child.nom} — ${child.classe}`} actions={<ChildSelector />} />
      {child.solde > 0 && (
        <div className="mb-6 rounded-2xl border border-warning/40 bg-warning/12 p-5">
          <p className="font-display text-lg font-semibold">⚠️ Solde à régler</p>
          <p className="mt-1 text-sm">Il reste <strong>{fcfa(child.solde)}</strong> à régler. Date limite : 30 septembre 2026.</p>
        </div>
      )}
      <h2 className="mb-3 font-display text-xl font-semibold">Frais scolaires</h2>
      <FeesList />
      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">Historique des paiements</h2>
      <PaymentHistory />
    </>
  );
}
