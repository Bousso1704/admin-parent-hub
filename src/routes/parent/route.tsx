import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app/shell";
import { parentNav } from "@/lib/nav";
import { useRoleGuard } from "@/lib/auth";

export const Route = createFileRoute("/parent")({
  component: ParentLayout,
});

function ParentLayout() {
  const { allowed, ready } = useRoleGuard("parent");
  if (!ready || !allowed) {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-sm text-muted-foreground">
        Vérification de votre session...
      </div>
    );
  }
  return (
    <AppShell groups={parentNav} spaceLabel="Espace parent">
      <Outlet />
    </AppShell>
  );
}
