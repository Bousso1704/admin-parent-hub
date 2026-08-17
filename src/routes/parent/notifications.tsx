import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { parentNotifications } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/notifications")({
  head: () => metaFor("Notifications", "Notifications de l'école concernant vos enfants."),
  component: () => (
    <>
      <PageHeader title="Notifications" subtitle="Informations concernant vos enfants" />
      <div className="space-y-3">
        {parentNotifications.map((n) => (
          <div key={n.titre} className="card-elevated flex items-start gap-4 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Bell className="h-4 w-4" /></span>
            <div>
              <p className="text-sm font-semibold">{n.titre}</p>
              <p className="text-sm text-muted-foreground">{n.texte}</p>
              <p className="mt-1 text-xs text-muted-foreground">{n.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  ),
});
