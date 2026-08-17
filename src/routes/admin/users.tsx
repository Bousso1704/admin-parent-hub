import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { adminUsers } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/users")({
  head: () => metaFor("Utilisateurs", "Comptes et rôles d'accès à la plateforme de gestion scolaire."),
  component: () => (
    <AdminListPage
      title="Utilisateurs"
      subtitle="Comptes et rôles d'accès à la plateforme"
      addLabel="Nouvel utilisateur"
      columns={["Nom", "Email", "Rôle", "Statut"]}
      rows={adminUsers}
      cells={(u) => [<span className="font-medium">{u.nom}</span>, u.email, u.role, <StatusBadge status={u.statut} />]}
    />
  ),
});
