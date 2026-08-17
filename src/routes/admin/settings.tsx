import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SCHOOL } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/settings")({
  head: () => metaFor("Paramètres", "Paramètres généraux de l'établissement et préférences de la plateforme."),
  component: Settings,
});

function Settings() {
  return (
    <>
      <PageHeader title="Paramètres" subtitle="Configuration générale de l'établissement" />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card-elevated space-y-4 p-6">
          <p className="font-display text-lg font-semibold">Informations de l'école</p>
          <div className="space-y-2">
            <Label htmlFor="nom">Nom de l'école</Label>
            <Input id="nom" defaultValue={SCHOOL.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adr">Adresse</Label>
            <Input id="adr" defaultValue={SCHOOL.address} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tel">Téléphone</Label>
            <Input id="tel" defaultValue={SCHOOL.phone} />
          </div>
          <Button onClick={() => toast.success("Paramètres enregistrés (démonstration)")}>Enregistrer</Button>
        </div>

        <div className="card-elevated space-y-5 p-6">
          <p className="font-display text-lg font-semibold">Préférences</p>
          {[
            "Rappels de paiement automatiques",
            "Publication automatique des bulletins",
            "Notifications aux parents par SMS",
            "Double programme activé (français / arabe)",
          ].map((label, i) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <span className="text-sm">{label}</span>
              <Switch defaultChecked={i !== 2} onCheckedChange={() => toast.info("Préférence modifiée localement")} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
