import { createFileRoute } from "@tanstack/react-router";
import { Banknote, CreditCard, GraduationCap, School, Users, UserRound, Wallet, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { StatCard } from "@/components/app/stat-card";
import { BarsChart, ChartCard, DonutChart, MonthlyAreaChart, ResultsLineChart } from "@/components/app/charts";
import {
  academicResults, adminStats, fcfa, monthlyFinance, paidVsUnpaid, studentsByClass,
  studentsByLevel, studentsByProgram, SCHOOL,
} from "@/lib/mock-data";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Tableau de bord administrateur — École Fatoumata Binetou Niass" },
      { name: "description", content: "Vue d'ensemble des effectifs, des finances et des résultats scolaires de l'école." },
      { property: "og:title", content: "Tableau de bord administrateur" },
      { property: "og:description", content: "Effectifs, finances et résultats scolaires en un coup d'œil." },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <>
      <PageHeader
        title="Tableau de bord"
        subtitle={`Vue d'ensemble de l'école — année scolaire ${SCHOOL.year}`}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Élèves" value="850" hint="Tous niveaux confondus" icon={GraduationCap} />
        <StatCard label="Parents" value="620" hint="Comptes familles actifs" icon={Users} tone="gold" />
        <StatCard label="Enseignants" value="45" hint="Français et arabe" icon={UserRound} tone="success" />
        <StatCard label="Classes" value="25" hint="De la maternelle au lycée" icon={School} />
        <StatCard label="Paiements reçus" value={fcfa(adminStats.paymentsReceived)} icon={CreditCard} tone="success" />
        <StatCard label="Impayés" value={fcfa(adminStats.unpaid)} icon={AlertTriangle} tone="destructive" />
        <StatCard label="Dépenses" value={fcfa(adminStats.expenses)} icon={Wallet} tone="warning" />
        <StatCard label="Salaires" value={fcfa(adminStats.salaries)} icon={Banknote} tone="gold" />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <ChartCard title="Élèves par niveau">
          <BarsChart data={studentsByLevel} />
        </ChartCard>
        <ChartCard title="Élèves par classe">
          <BarsChart data={studentsByClass} color="var(--chart-2)" />
        </ChartCard>
        <ChartCard title="Élèves par programme">
          <DonutChart data={studentsByProgram} />
        </ChartCard>
        <ChartCard title="Élèves payés / non payés">
          <DonutChart data={paidVsUnpaid} />
        </ChartCard>
        <ChartCard title="Paiements mensuels">
          <MonthlyAreaChart data={monthlyFinance} keys={[{ key: "paiements", color: "var(--chart-1)", label: "Paiements" }]} />
        </ChartCard>
        <ChartCard title="Dépenses mensuelles">
          <MonthlyAreaChart data={monthlyFinance} keys={[{ key: "depenses", color: "var(--chart-4)", label: "Dépenses" }]} />
        </ChartCard>
        <ChartCard title="Revenus vs dépenses">
          <MonthlyAreaChart
            data={monthlyFinance}
            keys={[
              { key: "paiements", color: "var(--chart-1)", label: "Revenus" },
              { key: "depenses", color: "var(--chart-4)", label: "Dépenses" },
            ]}
          />
        </ChartCard>
        <ChartCard title="Résultats scolaires" subtitle="Moyennes par cycle et par programme">
          <ResultsLineChart data={academicResults} />
        </ChartCard>
      </div>
    </>
  );
}
