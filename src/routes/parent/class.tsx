import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { adminClasses } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/class")({
  head: () => metaFor("Classe", "Informations sur la classe de votre enfant et son enseignant principal."),
  component: ClassPage,
});

function ClassPage() {
  const child = useChild();
  const info = adminClasses.find((c) => c.classe === child.classe);
  return (
    <>
      <PageHeader title="Classe" subtitle={`Classe de ${child.prenom}`} actions={<ChildSelector />} />
      <div className="card-elevated max-w-2xl p-6">
        <p className="font-display text-2xl font-semibold">{child.classe}</p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div><dt className="text-xs uppercase text-muted-foreground">Niveau</dt><dd className="font-medium">{child.niveau}</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Enseignant principal</dt><dd className="font-medium">{child.enseignant}</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Effectif</dt><dd className="font-medium">{info?.effectif ?? 36} élèves</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Salle</dt><dd className="font-medium">{info?.salle ?? "B22"}</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Programme</dt><dd className="font-medium">{child.programme}</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Rang de votre enfant</dt><dd className="font-medium">{child.rang}</dd></div>
        </dl>
      </div>
    </>
  );
}
