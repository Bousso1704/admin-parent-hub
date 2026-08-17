import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminReportCards } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/report-cards")({
  head: () => metaFor("Bulletins", "Génération et publication des bulletins trimestriels par classe."),
  component: () => (
    <AdminListPage
      title="Bulletins"
      subtitle="Génération des bulletins par classe et par trimestre"
      addLabel="Générer des bulletins"
      columns={["Classe", "Trimestre", "Effectif", "Générés", "Moyenne", "Statut"]}
      rows={adminReportCards}
      cells={(b) => [
        <span className="font-medium">{b.classe}</span>,
        b.trimestre,
        b.effectif,
        b.generes,
        b.moyenne ? b.moyenne.toFixed(1) : "—",
        <StatusBadge status={b.statut} />,
      ]}
    />
  ),
});
