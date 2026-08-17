import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { PaymentHistory } from "@/components/app/payment-history";

export const Route = createFileRoute("/parent/payment-history")({
  head: () => metaFor("Historique des paiements", "Tous les reçus de paiement de votre enfant, consultables et imprimables."),
  component: () => {
    const child = useChild();
    return (
      <>
        <PageHeader title="Historique des paiements" subtitle={`${child.prenom} — ${child.classe}`} actions={<ChildSelector />} />
        <PaymentHistory />
      </>
    );
  },
});
