import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { adminParents, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/parents")({
  head: () => metaFor("Parents", "Répertoire des parents d'élèves, contacts et soldes de scolarité."),
  component: () => (
    <AdminListPage
      title="Parents"
      subtitle="620 familles enregistrées"
      addLabel="Nouveau parent"
      columns={["Nom", "Téléphone", "Email", "Enfants", "Solde dû"]}
      rows={adminParents}
      cells={(p) => [<span className="font-medium">{p.nom}</span>, p.tel, p.email, p.enfants, fcfa(p.solde)]}
    />
  ),
});
