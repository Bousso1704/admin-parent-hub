import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { adminStaff } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/staff")({
  head: () => metaFor("Personnel", "Personnel administratif et de service de l'école."),
  component: () => (
    <AdminListPage
      title="Personnel"
      subtitle="Équipe administrative et de service"
      addLabel="Nouveau membre"
      columns={["Nom", "Poste", "Service", "Téléphone"]}
      rows={adminStaff}
      cells={(p) => [<span className="font-medium">{p.nom}</span>, p.poste, p.service, p.tel]}
    />
  ),
});
