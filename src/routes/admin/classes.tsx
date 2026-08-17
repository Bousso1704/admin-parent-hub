import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { adminClasses } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/classes")({
  head: () => metaFor("Classes", "Gestion des classes de l'école, effectifs, enseignants principaux et salles."),
  component: () => (
    <AdminListPage
      title="Classes"
      subtitle="25 classes réparties sur 4 niveaux"
      addLabel="Nouvelle classe"
      columns={["Classe", "Niveau", "Effectif", "Enseignant principal", "Salle"]}
      rows={adminClasses}
      cells={(c) => [<span className="font-medium">{c.classe}</span>, c.niveau, c.effectif, c.prof, c.salle]}
    />
  ),
});
