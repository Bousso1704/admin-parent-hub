import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminStudents, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/unpaid-students")({
  head: () => metaFor("Élèves non payés", "Liste des élèves présentant un solde de scolarité impayé."),
  component: () => (
    <AdminListPage
      title="Élèves non payés"
      subtitle="Élèves présentant un solde restant à régler"
      withActions={false}
      columns={["Matricule", "Élève", "Classe", "Tuteur", "Reste à payer", "Statut"]}
      rows={adminStudents.filter((s) => s.solde > 0)}
      cells={(s) => [
        <span className="font-mono text-xs">{s.matricule}</span>,
        <span className="font-medium">{s.nom}</span>,
        s.classe,
        s.tuteur,
        <span className="font-semibold text-destructive">{fcfa(s.solde)}</span>,
        <StatusBadge status={s.statut} />,
      ]}
    />
  ),
});
