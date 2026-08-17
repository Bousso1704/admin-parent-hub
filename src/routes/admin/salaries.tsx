import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminSalaries, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/salaries")({
  head: () => metaFor("Salaires", "Gestion de la masse salariale du personnel enseignant et administratif."),
  component: () => (
    <AdminListPage
      title="Salaires"
      subtitle="Masse salariale mensuelle du personnel"
      addLabel="Nouveau bulletin de paie"
      columns={["Nom", "Poste", "Salaire brut", "Net à payer", "Statut"]}
      rows={adminSalaries}
      cells={(s) => [
        <span className="font-medium">{s.nom}</span>,
        s.poste,
        fcfa(s.brut),
        fcfa(s.net),
        <StatusBadge status={s.statut} />,
      ]}
    />
  ),
});
