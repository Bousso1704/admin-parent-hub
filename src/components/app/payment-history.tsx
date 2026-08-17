import { useState } from "react";
import { Eye, Printer } from "lucide-react";
import { DataTable } from "@/components/app/data-table";
import { StatusBadge } from "@/components/app/stat-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useChild } from "@/components/app/child-selector";
import logo from "@/assets/logo.png";
import { SCHOOL, fcfa } from "@/lib/mock-data";

export function PaymentHistory() {
  const child = useChild();
  const [open, setOpen] = useState<string | null>(null);
  const recu = child.paiements.find((p) => p.recu === open);

  return (
    <>
      <DataTable
        columns={["Reçu", "Date", "Motif", "Montant", "Mode", "Statut", "Actions"]}
        rows={child.paiements}
        render={(p) => [
          <span className="font-mono text-xs">{p.recu}</span>,
          p.date,
          p.motif,
          fcfa(p.montant),
          p.mode,
          <StatusBadge status="Payé" />,
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setOpen(p.recu)}><Eye className="mr-1 h-4 w-4" /> Voir le reçu</Button>
            <Button size="sm" onClick={() => { setOpen(p.recu); setTimeout(() => window.print(), 300); }}><Printer className="mr-1 h-4 w-4" /> Imprimer</Button>
          </div>,
        ]}
      />

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Reçu de paiement</DialogTitle></DialogHeader>
          {recu && (
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <img src={logo} alt="Logo de l'école" width={48} height={48} className="h-12 w-12" loading="lazy" />
                <div>
                  <p className="font-display font-semibold">{SCHOOL.name}</p>
                  <p className="text-xs text-muted-foreground">{SCHOOL.address}</p>
                </div>
              </div>
              <p><strong>N° de reçu :</strong> {recu.recu}</p>
              <p><strong>Date :</strong> {recu.date}</p>
              <p><strong>Élève :</strong> {child.prenom} {child.nom} ({child.classe})</p>
              <p><strong>Motif :</strong> {recu.motif}</p>
              <p><strong>Mode de paiement :</strong> {recu.mode}</p>
              <p className="font-display text-xl font-semibold">{fcfa(recu.montant)}</p>
              <Button className="w-full" onClick={() => window.print()}><Printer className="mr-2 h-4 w-4" /> Imprimer le reçu</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
