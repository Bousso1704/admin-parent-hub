import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parentProfile } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/profile")({
  head: () => metaFor("Mon profil", "Vos informations personnelles de parent d'élève."),
  component: ParentProfile,
});

function ParentProfile() {
  const [form, setForm] = useState(parentProfile);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });
  return (
    <>
      <PageHeader title="Mon profil" subtitle="Vos informations personnelles" />
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card-elevated p-6 text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-primary/10 text-4xl">👨</div>
          <p className="mt-3 font-display text-lg font-semibold">{form.prenom} {form.nom}</p>
          <p className="text-sm text-muted-foreground">Parent d'élève</p>
        </div>
        <div className="card-elevated space-y-4 p-6 lg:col-span-2">
          <p className="font-display text-lg font-semibold">Modifier mon profil</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="pr">Prénom</Label><Input id="pr" value={form.prenom} onChange={set("prenom")} /></div>
            <div className="space-y-2"><Label htmlFor="no">Nom</Label><Input id="no" value={form.nom} onChange={set("nom")} /></div>
            <div className="space-y-2"><Label htmlFor="te">Téléphone</Label><Input id="te" value={form.tel} onChange={set("tel")} /></div>
            <div className="space-y-2"><Label htmlFor="em">Email</Label><Input id="em" value={form.email} onChange={set("email")} /></div>
            <div className="space-y-2 sm:col-span-2"><Label htmlFor="ad">Adresse</Label><Input id="ad" value={form.adresse} onChange={set("adresse")} /></div>
          </div>
          <Button onClick={() => toast.success("Profil mis à jour (modification locale)")}>Modifier mon profil</Button>

          <div className="border-t border-border pt-4">
            <p className="font-display text-lg font-semibold">Modifier mon mot de passe</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="a">Mot de passe actuel</Label><Input id="a" type="password" placeholder="••••••••" /></div>
              <div className="space-y-2"><Label htmlFor="b">Nouveau mot de passe</Label><Input id="b" type="password" placeholder="••••••••" /></div>
            </div>
            <Button variant="outline" className="mt-4" onClick={() => toast.success("Mot de passe modifié (démonstration)")}>Modifier mon mot de passe</Button>
          </div>
        </div>
      </div>
    </>
  );
}
