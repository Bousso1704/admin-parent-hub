import { createFileRoute } from "@tanstack/react-router";
import { CalendarRange } from "lucide-react";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { SCHOOL } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/school-year")({
  head: () => metaFor("Année scolaire", "Paramétrage de l'année scolaire, trimestres et périodes de vacances."),
  component: SchoolYear,
});

const periodes = [
  { nom: "Trimestre 1", debut: "01/10/2025", fin: "20/12/2025", statut: "Clôturé" },
  { nom: "Trimestre 2", debut: "05/01/2026", fin: "04/04/2026", statut: "Clôturé" },
  { nom: "Trimestre 3", debut: "13/04/2026", fin: "10/07/2026", statut: "En cours" },
  { nom: "Vacances de mi-trimestre", debut: "20/10/2026", fin: "28/10/2026", statut: "Planifié" },
];

function SchoolYear() {
  return (
    <>
      <PageHeader title="Année scolaire" subtitle={`Année en cours : ${SCHOOL.year}`} />
      <div className="grid gap-4 md:grid-cols-2">
        {periodes.map((p) => (
          <div key={p.nom} className="card-elevated flex items-start gap-4 p-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <CalendarRange className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base font-semibold">{p.nom}</p>
              <p className="text-sm text-muted-foreground">
                Du {p.debut} au {p.fin}
              </p>
              <p className="mt-1 text-xs font-medium text-primary">{p.statut}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
