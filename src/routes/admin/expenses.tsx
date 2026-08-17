import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminExpenses, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/expenses")({
  head: () => metaFor("Dépenses", "Suivi des dépenses de fonctionnement de l'école."),
  component: () => (
    <AdminListPage
      title="Dépenses"
      subtitle="Dépenses de fonctionnement et d'investissement"
      addLabel="Nouvelle dépense"
      columns={["Date", "Catégorie", "Libellé", "Montant", "Statut"]}
      rows={adminExpenses}
      cells={(d) => [d.date, d.categorie, <span className="font-medium">{d.libelle}</span>, fcfa(d.montant), <StatusBadge status={d.statut} />]}
    />
  ),
});
