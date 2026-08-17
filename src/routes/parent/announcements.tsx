import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { announcements } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/announcements")({
  head: () => metaFor("Annonces de l'école", "Actualités, réunions, événements et vacances scolaires de l'école."),
  component: () => (
    <>
      <PageHeader title="Annonces de l'école" subtitle="Actualités, réunions, événements et vacances" />
      <div className="grid gap-4 md:grid-cols-2">
        {announcements.map((a) => (
          <article key={a.titre} className="card-elevated p-5">
            <span className="inline-flex rounded-full bg-gold/25 px-3 py-1 text-xs font-semibold text-gold-foreground">{a.categorie}</span>
            <h2 className="mt-3 font-display text-lg font-semibold">{a.titre}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{a.texte}</p>
            <p className="mt-3 text-xs text-muted-foreground">{a.date}</p>
          </article>
        ))}
      </div>
    </>
  ),
});
