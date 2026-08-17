import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app/shell";
import { adminNav } from "@/lib/nav";
import { useRoleGuard } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const { allowed, ready } = useRoleGuard("admin");
  if (!ready || !allowed) {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-sm text-muted-foreground">
        Vérification de votre session...
      </div>
    );
  }
  return (
    <AppShell groups={adminNav} spaceLabel="Espace administrateur">
      <Outlet />
    </AppShell>
  );
}
