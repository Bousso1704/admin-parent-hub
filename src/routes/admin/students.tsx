import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminStudents, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/students")({
  head: () => metaFor("Élèves", "Liste complète des élèves inscrits, classes, programmes et soldes scolaires."),
  component: () => (
    <AdminListPage
      title="Élèves"
      subtitle="850 élèves inscrits pour l'année en cours"
      addLabel="Nouvel élève"
      columns={["Matricule", "Nom et prénom", "Classe", "Niveau", "Programme", "Tuteur", "Solde", "Statut"]}
      rows={adminStudents}
      cells={(s) => [
        <span className="font-mono text-xs">{s.matricule}</span>,
        <span className="font-medium">{s.nom}</span>,
        s.classe,
        s.niveau,
        s.programme,
        s.tuteur,
        fcfa(s.solde),
        <StatusBadge status={s.statut} />,
      ]}
    />
  ),
});
