import { createFileRoute } from "@tanstack/react-router";
import { FileBarChart, Download } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { Button } from "@/components/ui/button";
import { ChartCard, MonthlyAreaChart } from "@/components/app/charts";
import { monthlyFinance } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/reports")({
  head: () => metaFor("Rapports", "Rapports scolaires et financiers exportables de l'établissement."),
  component: Reports,
});

const reports = [
  { titre: "Rapport financier trimestriel", desc: "Encaissements, impayés, dépenses et solde de trésorerie." },
  { titre: "Rapport de scolarité", desc: "Effectifs, mouvements d'élèves et répartition par programme." },
  { titre: "Rapport des résultats", desc: "Moyennes par classe, taux de réussite, mentions." },
  { titre: "Rapport de présence", desc: "Absences et retards par classe et par mois." },
  { titre: "Rapport du personnel", desc: "Effectif enseignant, charges salariales et affectations." },
  { titre: "Rapport de recouvrement", desc: "Familles relancées et évolution des impayés." },
];

function Reports() {
  return (
    <>
      <PageHeader title="Rapports" subtitle="Documents de synthèse de l'établissement" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((r) => (
          <div key={r.titre} className="card-elevated p-5">
            <FileBarChart className="h-6 w-6 text-primary" />
            <p className="mt-3 font-display text-base font-semibold">{r.titre}</p>
            <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
            <Button variant="outline" size="sm" className="mt-4" onClick={() => toast.info("Génération simulée du rapport")}>
              <Download className="mr-2 h-4 w-4" /> Générer
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <ChartCard title="Revenus vs dépenses" subtitle="Synthèse annuelle">
          <MonthlyAreaChart
            data={monthlyFinance}
            keys={[
              { key: "paiements", color: "var(--chart-1)", label: "Revenus" },
              { key: "depenses", color: "var(--chart-4)", label: "Dépenses" },
            ]}
          />
        </ChartCard>
      </div>
    </>
  );
}
