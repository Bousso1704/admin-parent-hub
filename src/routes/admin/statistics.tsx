import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { BarsChart, ChartCard, DonutChart, ResultsLineChart } from "@/components/app/charts";
import { academicResults, paidVsUnpaid, studentsByClass, studentsByLevel, studentsByProgram } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/statistics")({
  head: () => metaFor("Statistiques", "Statistiques détaillées des effectifs, résultats et recouvrement."),
  component: () => (
    <>
      <PageHeader title="Statistiques" subtitle="Analyse détaillée des données de l'école" />
      <div className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="Élèves par niveau">
          <BarsChart data={studentsByLevel} />
        </ChartCard>
        <ChartCard title="Élèves par classe">
          <BarsChart data={studentsByClass} color="var(--chart-2)" />
        </ChartCard>
        <ChartCard title="Élèves par programme">
          <DonutChart data={studentsByProgram} />
        </ChartCard>
        <ChartCard title="Recouvrement">
          <DonutChart data={paidVsUnpaid} />
        </ChartCard>
        <ChartCard title="Résultats scolaires par cycle">
          <ResultsLineChart data={academicResults} />
        </ChartCard>
      </div>
    </>
  ),
});
