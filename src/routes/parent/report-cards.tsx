import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Printer, Eye } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataTable } from "@/components/app/data-table";
import logo from "@/assets/logo.png";
import { SCHOOL, moyenne } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/report-cards")({
  head: () => metaFor("Bulletins", "Consultez et imprimez les bulletins trimestriels de votre enfant."),
  component: ReportCards,
});

function ReportCards() {
  const child = useChild();
  const [open, setOpen] = useState<string | null>(null);
  const bulletin = child.bulletins.find((b) => b.trimestre === open);

  return (
    <>
      <PageHeader title="Bulletins" subtitle={`${child.prenom} ${child.nom} — ${child.classe}`} actions={<ChildSelector />} />
      <DataTable
        columns={["Année scolaire", "Trimestre", "Classe", "Moyenne générale", "Rang", "Actions"]}
        rows={child.bulletins}
        render={(b) => [
          b.annee,
          <span className="font-medium">{b.trimestre}</span>,
          child.classe,
          `${b.moyenne.toFixed(2)}/20`,
          b.rang,
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setOpen(b.trimestre)}><Eye className="mr-1 h-4 w-4" /> Voir le bulletin</Button>
            <Button size="sm" onClick={() => { setOpen(b.trimestre); setTimeout(() => window.print(), 300); }}><Printer className="mr-1 h-4 w-4" /> Imprimer</Button>
          </div>,
        ]}
      />

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader><DialogTitle>Bulletin scolaire</DialogTitle></DialogHeader>
          {bulletin && (
            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <img src={logo} alt="Logo de l'école" width={56} height={56} className="h-14 w-14" loading="lazy" />
                <div>
                  <p className="font-display text-lg font-semibold">{SCHOOL.name}</p>
                  <p className="text-xs text-muted-foreground">{SCHOOL.address} • Année scolaire {bulletin.annee}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p><strong>Élève :</strong> {child.prenom} {child.nom}</p>
                <p><strong>Classe :</strong> {child.classe}</p>
                <p><strong>Matricule :</strong> {child.matricule}</p>
                <p><strong>Trimestre :</strong> {bulletin.trimestre}</p>
              </div>
              {[["Matières françaises", child.notesFr], ["Matières arabes", child.notesAr]].map(([titre, notes]) => (
                <div key={titre as string}>
                  <p className="mb-2 font-semibold">{titre as string}</p>
                  <table className="w-full text-left text-sm">
                    <thead><tr className="bg-muted"><th className="p-2">Matière</th><th className="p-2">Note</th><th className="p-2">Coef.</th><th className="p-2">Moyenne</th></tr></thead>
                    <tbody>
                      {(notes as { matiere: string; note: number; coef: number }[]).map((n) => (
                        <tr key={n.matiere} className="border-t border-border">
                          <td className="p-2">{n.matiere}</td><td className="p-2">{n.note}/20</td><td className="p-2">{n.coef}</td><td className="p-2">{n.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2 border-t border-border pt-4">
                <p><strong>Moyenne française :</strong> {moyenne(child.notesFr).toFixed(2)}/20</p>
                <p><strong>Moyenne arabe :</strong> {moyenne(child.notesAr).toFixed(2)}/20</p>
                <p><strong>Moyenne générale :</strong> {bulletin.moyenne.toFixed(2)}/20</p>
                <p><strong>Rang :</strong> {bulletin.rang}</p>
              </div>
              <p><strong>Appréciation :</strong> {child.appreciation}</p>
              <div className="grid grid-cols-2 gap-6 pt-6 text-xs text-muted-foreground">
                <div className="border-t border-border pt-2">Signature de l'enseignant</div>
                <div className="border-t border-border pt-2">Signature du directeur</div>
              </div>
              <Button className="w-full" onClick={() => window.print()}><Printer className="mr-2 h-4 w-4" /> Imprimer le bulletin</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
