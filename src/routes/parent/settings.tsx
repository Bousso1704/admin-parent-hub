import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/lib/theme";

export const Route = createFileRoute("/parent/settings")({
  head: () => metaFor("Paramètres", "Préférences d'affichage et de notifications de votre espace parent."),
  component: ParentSettings,
});

function ParentSettings() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <PageHeader title="Paramètres" subtitle="Préférences de votre espace" />
      <div className="card-elevated max-w-xl space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm">Mode sombre</span>
          <Switch checked={dark} onCheckedChange={toggle} />
        </div>
        {["Recevoir les notifications de notes", "Recevoir les rappels de paiement", "Recevoir les annonces de l'école"].map((l) => (
          <div key={l} className="flex items-center justify-between gap-4">
            <span className="text-sm">{l}</span>
            <Switch defaultChecked onCheckedChange={() => toast.info("Préférence enregistrée localement")} />
          </div>
        ))}
      </div>
    </>
  );
}
