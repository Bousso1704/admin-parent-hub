import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { DataTable } from "@/components/app/data-table";
import { moyenne } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/grades")({
  head: () => metaFor("Notes et évaluations", "Consultez les notes de votre enfant en programme français et arabe."),
  component: Grades,
});

function Grades() {
  const child = useChild();
  const mFr = moyenne(child.notesFr);
  const mAr = moyenne(child.notesAr);
  const table = (rows: { matiere: string; note: number; coef: number }[]) => (
    <DataTable
      columns={["Matière", "Note", "Coefficient", "Moyenne"]}
      rows={rows}
      render={(r) => [<span className="font-medium">{r.matiere}</span>, `${r.note}/20`, r.coef, r.note.toFixed(0)]}
    />
  );
  return (
    <>
      <PageHeader title="Notes et évaluations" subtitle={`${child.prenom} ${child.nom} — ${child.classe}`} actions={<ChildSelector />} />
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          ["Moyenne générale", `${child.moyenne.toFixed(2)}/20`],
          ["Moyenne française", `${mFr.toFixed(2)}/20`],
          ["Moyenne arabe", `${mAr.toFixed(2)}/20`],
          ["Rang", child.rang],
        ].map(([k, v]) => (
          <div key={k} className="card-elevated p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{k}</p>
            <p className="mt-2 font-display text-xl font-semibold">{v}</p>
          </div>
        ))}
      </div>
      <h2 className="mt-8 mb-3 font-display text-xl font-semibold">Enseignement français</h2>
      {table(child.notesFr)}
      <h2 className="mt-8 mb-3 font-display text-xl font-semibold">Enseignement arabe</h2>
      {table(child.notesAr)}
      <div className="card-elevated mt-6 p-5">
        <p className="font-display text-base font-semibold">Appréciation de l'enseignant</p>
        <p className="mt-2 text-sm text-muted-foreground">{child.appreciation}</p>
        <p className="mt-4 text-xs text-muted-foreground">Consultation uniquement : les notes ne peuvent pas être modifiées par les parents.</p>
      </div>
    </>
  );
}
