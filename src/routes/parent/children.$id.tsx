import { createFileRoute, useParams } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { children } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/children/$id")({
  head: () => metaFor("Profil de l'enfant", "Fiche détaillée de votre enfant : identité, classe, programme et enseignant."),
  component: ChildProfile,
});

function ChildProfile() {
  const { id } = useParams({ from: "/parent/children/$id" });
  const child = children.find((c) => c.id === id) ?? children[0]!;
  const infos = [
    ["Nom", child.nom],
    ["Prénom", child.prenom],
    ["Matricule", child.matricule],
    ["Date de naissance", child.naissance],
    ["Niveau", child.niveau],
    ["Classe", child.classe],
    ["Programme", child.programme],
    ["Enseignant principal", child.enseignant],
  ];
  return (
    <>
      <PageHeader title={`${child.prenom} ${child.nom}`} subtitle={`${child.classe} — ${child.niveau}`} />
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card-elevated p-6 text-center">
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-primary/10 text-5xl">{child.emoji}</div>
          <p className="mt-4 font-display text-xl font-semibold">{child.prenom} {child.nom}</p>
          <p className="text-sm text-muted-foreground">{child.matricule}</p>
          <div className="mt-3 flex justify-center"><StatusBadge status="Élève active" /></div>
        </div>
        <div className="card-elevated p-6 lg:col-span-2">
          <p className="font-display text-lg font-semibold">Informations de l'élève</p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {infos.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 font-display text-lg font-semibold">Programme</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Enseignement français</span>
            <span className="rounded-full bg-gold/25 px-3 py-1 text-sm font-medium text-gold-foreground">Enseignement arabe</span>
          </div>
        </div>
      </div>
    </>
  );
}
