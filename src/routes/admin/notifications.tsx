import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";

export const Route = createFileRoute("/admin/notifications")({
  head: () => metaFor("Notifications", "Notifications internes de l'administration de l'école."),
  component: AdminNotifications,
});

const items = [
  { t: "8 nouveaux paiements enregistrés aujourd'hui", d: "17/08/2026" },
  { t: "238 élèves présentent un solde impayé", d: "16/08/2026" },
  { t: "Bulletins du Trimestre 2 publiés pour CM2 A et CE2 A", d: "15/08/2026" },
  { t: "Salaires de juillet versés au personnel enseignant", d: "12/08/2026" },
  { t: "Facture SENELEC réglée : 420 000 FCFA", d: "07/08/2026" },
];

function AdminNotifications() {
  return (
    <>
      <PageHeader title="Notifications" subtitle="Activité récente de l'établissement" />
      <div className="space-y-3">
        {items.map((n) => (
          <div key={n.t} className="card-elevated flex items-start gap-4 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Bell className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium">{n.t}</p>
              <p className="text-xs text-muted-foreground">{n.d}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
