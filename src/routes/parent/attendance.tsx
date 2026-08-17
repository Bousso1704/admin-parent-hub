import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Clock, UserX, Percent } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";
import { StatCard } from "@/components/app/stat-card";

export const Route = createFileRoute("/parent/attendance")({
  head: () => metaFor("Présences", "Présences, absences et retards de votre enfant avec calendrier mensuel."),
  component: Attendance,
});

function Attendance() {
  const child = useChild();
  const color = { present: "bg-success/20 text-success", absent: "bg-destructive/15 text-destructive", retard: "bg-warning/30 text-warning-foreground" };
  return (
    <>
      <PageHeader title="Présences" subtitle={`${child.prenom} — ${child.classe}`} actions={<ChildSelector />} />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Jours présents" value={String(child.presences.jours)} icon={CalendarCheck} tone="success" />
        <StatCard label="Absences" value={String(child.presences.absences)} icon={UserX} tone="destructive" />
        <StatCard label="Retards" value={String(child.presences.retards)} icon={Clock} tone="warning" />
        <StatCard label="Taux de présence" value={`${child.presence} %`} icon={Percent} />
      </div>
      <div className="card-elevated mt-6 p-5">
        <p className="font-display text-lg font-semibold">Calendrier du mois</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span>🟢 Présent</span><span>🔴 Absent</span><span>🟠 Retard</span>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2 sm:grid-cols-10">
          {child.calendrier.map((d) => (
            <div key={d.jour} className={`grid aspect-square place-items-center rounded-lg text-sm font-medium ${color[d.statut]}`}>
              {d.jour}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Consultation uniquement.</p>
      </div>
    </>
  );
}
