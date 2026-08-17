import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { ChildSelector, useChild } from "@/components/app/child-selector";

export const Route = createFileRoute("/parent/schedule")({
  head: () => metaFor("Emploi du temps", "Emploi du temps hebdomadaire de votre enfant, cours français et arabes."),
  component: Schedule,
});

const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const heures = ["08:00", "10:00", "14:00"];

function Schedule() {
  const child = useChild();
  return (
    <>
      <PageHeader title="Emploi du temps" subtitle={`${child.prenom} — ${child.classe}`} actions={<ChildSelector />} />
      <div className="mb-4 flex gap-3 text-xs">
        <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">Cours français</span>
        <span className="rounded-full bg-gold/25 px-3 py-1 font-medium text-gold-foreground">Cours arabe</span>
      </div>
      <div className="card-elevated overflow-x-auto">
        <table className="w-full min-w-[680px] text-sm">
          <thead className="bg-muted/60">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase text-muted-foreground">Heure</th>
              {jours.map((j) => <th key={j} className="px-4 py-3 text-left text-xs uppercase text-muted-foreground">{j}</th>)}
            </tr>
          </thead>
          <tbody>
            {heures.map((h) => (
              <tr key={h} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{h}</td>
                {jours.map((j) => {
                  const slot = child.emploi[j]?.find((s) => s.heure === h);
                  return (
                    <td key={j} className="px-2 py-2">
                      {slot && (
                        <span className={`block rounded-lg px-3 py-2 text-sm font-medium ${slot.type === "ar" ? "bg-gold/20 text-gold-foreground" : "bg-primary/10 text-primary"}`}>
                          {slot.cours}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
