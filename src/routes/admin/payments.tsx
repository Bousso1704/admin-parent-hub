import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge, StatCard } from "@/components/app/stat-card";
import { CreditCard, AlertTriangle, Wallet } from "lucide-react";
import { adminPayments, adminStats, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/payments")({
  head: () => metaFor("Paiements", "Suivi des encaissements de scolarité, cantine, transport et inscriptions."),
  component: () => (
    <AdminListPage
      title="Paiements"
      subtitle="Encaissements de l'année scolaire"
      addLabel="Enregistrer un paiement"
      summary={
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard label="Paiements reçus" value={fcfa(adminStats.paymentsReceived)} icon={CreditCard} tone="success" />
          <StatCard label="Impayés" value={fcfa(adminStats.unpaid)} icon={AlertTriangle} tone="destructive" />
          <StatCard label="Taux de recouvrement" value="73,7 %" icon={Wallet} tone="gold" />
        </div>
      }
      columns={["Reçu", "Date", "Élève", "Motif", "Montant", "Mode", "Statut"]}
      rows={adminPayments}
      cells={(p) => [
        <span className="font-mono text-xs">{p.recu}</span>,
        p.date,
        <span className="font-medium">{p.eleve}</span>,
        p.motif,
        fcfa(p.montant),
        p.mode,
        <StatusBadge status={p.statut} />,
      ]}
    />
  ),
});
