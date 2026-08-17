import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { adminLevels } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/levels")({
  head: () => metaFor("Niveaux", "Organisation des niveaux et cycles de l'école franco-arabe."),
  component: () => (
    <AdminListPage
      title="Niveaux"
      subtitle="Cycles de la maternelle au lycée"
      addLabel="Nouveau niveau"
      columns={["Niveau", "Cycle", "Classes", "Effectif"]}
      rows={adminLevels}
      cells={(l) => [<span className="font-medium">{l.niveau}</span>, l.cycle, l.classes, l.effectif]}
    />
  ),
});
