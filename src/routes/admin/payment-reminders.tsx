import { createFileRoute } from "@tanstack/react-router";
import { BellRing, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { Button } from "@/components/ui/button";
import { adminStudents, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/payment-reminders")({
  head: () => metaFor("Rappels de paiement", "Envoi de rappels aux familles présentant un solde de scolarité."),
  component: Reminders,
});

function Reminders() {
  const debtors = adminStudents.filter((s) => s.solde > 0);
  return (
    <>
      <PageHeader
        title="Rappels de paiement"
        subtitle="Relances adressées aux familles concernées"
        actions={
          <Button onClick={() => toast.success("Rappels envoyés (simulation)", { description: `${debtors.length} familles notifiées.` })}>
            <Send className="mr-2 h-4 w-4" /> Envoyer tous les rappels
          </Button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        {debtors.map((s) => (
          <div key={s.matricule} className="card-elevated p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold">{s.nom}</p>
                <p className="text-sm text-muted-foreground">
                  {s.classe} • Tuteur : {s.tuteur}
                </p>
              </div>
              <StatusBadge status={s.statut} />
            </div>
            <p className="mt-4 text-sm">
              Reste à payer : <strong className="text-destructive">{fcfa(s.solde)}</strong>
            </p>
            <p className="text-sm text-muted-foreground">Date limite : 30 septembre 2026</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => toast.success(`Rappel envoyé à ${s.tuteur} (simulation)`)}
            >
              <BellRing className="mr-2 h-4 w-4" /> Envoyer un rappel
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
