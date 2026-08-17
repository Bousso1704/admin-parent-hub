import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { adminTeachers } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/teachers")({
  head: () => metaFor("Enseignants", "Corps enseignant de l'école : matières, classes et contacts."),
  component: () => (
    <AdminListPage
      title="Enseignants"
      subtitle="45 enseignants des programmes français et arabe"
      addLabel="Nouvel enseignant"
      columns={["Nom", "Matière", "Programme", "Classes", "Téléphone"]}
      rows={adminTeachers}
      cells={(t) => [<span className="font-medium">{t.nom}</span>, t.matiere, t.programme, t.classes, t.tel]}
    />
  ),
});
