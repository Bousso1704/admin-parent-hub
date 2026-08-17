import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { metaFor } from "@/components/app/admin-page";

export const Route = createFileRoute("/parent/child-profile")({
  head: () => metaFor("Profil de l'enfant", "Accès rapide au profil de l'enfant sélectionné."),
  component: () => {
    const { childId } = useAuth();
    return <Navigate to="/parent/children/$id" params={{ id: childId }} replace />;
  },
});
