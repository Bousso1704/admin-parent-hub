import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin/profile")({
  head: () => metaFor("Mon profil", "Profil du compte administrateur de l'école."),
  component: AdminProfile,
});

function AdminProfile() {
  return (
    <>
      <PageHeader title="Mon profil" subtitle="Compte administrateur" />
      <div className="card-elevated max-w-xl space-y-4 p-6">
        <div className="flex items-center gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 font-display text-xl font-semibold text-primary">
            DG
          </span>
          <div>
            <p className="font-display text-lg font-semibold">Direction de l'école</p>
            <p className="text-sm text-muted-foreground">admin@ecole.test</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-nom">Nom affiché</Label>
          <Input id="p-nom" defaultValue="Direction de l'école" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-mail">Email</Label>
          <Input id="p-mail" defaultValue="admin@ecole.test" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-mdp">Nouveau mot de passe</Label>
          <Input id="p-mdp" type="password" placeholder="••••••••" />
        </div>
        <Button onClick={() => toast.success("Profil mis à jour (démonstration)")}>Enregistrer</Button>
      </div>
    </>
  );
}
