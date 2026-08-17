import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminEvaluations } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/evaluations")({
  head: () => metaFor("Évaluations", "Devoirs et compositions programmés ou notés par classe et par matière."),
  component: () => (
    <AdminListPage
      title="Évaluations"
      subtitle="Devoirs, compositions et récitations"
      addLabel="Nouvelle évaluation"
      columns={["Date", "Classe", "Matière", "Type", "Moyenne", "Statut"]}
      rows={adminEvaluations}
      cells={(e) => [
        e.date,
        <span className="font-medium">{e.classe}</span>,
        e.matiere,
        e.type,
        e.moyenne ? e.moyenne.toFixed(1) : "—",
        <StatusBadge status={e.statut} />,
      ]}
    />
  ),
});
