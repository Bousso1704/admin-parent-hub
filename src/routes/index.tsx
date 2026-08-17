import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap, Landmark, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import { SCHOOL } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "École Fatoumata Binetou Niass — Gestion scolaire franco-arabe" },
      {
        name: "description",
        content:
          "Plateforme de gestion de l'École Fatoumata Binetou Niass : espace administrateur et espace parent pour le suivi scolaire et financier.",
      },
      { property: "og:title", content: "École Fatoumata Binetou Niass — Gestion scolaire" },
      {
        property: "og:description",
        content: "Deux espaces distincts : administration complète de l'école et suivi des enfants pour les parents.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="surface-arabesque min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-6">
        <img src={logo} alt="Logo de l'école" width={48} height={48} className="h-12 w-12" />
        <div>
          <p className="font-display text-base font-semibold leading-tight">{SCHOOL.name}</p>
          <p className="text-xs text-muted-foreground">{SCHOOL.tagline}</p>
        </div>
        <Button asChild className="ml-auto">
          <Link to="/login">Se connecter</Link>
        </Button>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="animate-rise">
          <span className="inline-flex rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-foreground">
            Année scolaire {SCHOOL.year}
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            La gestion complète de votre école franco-arabe
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Scolarité, finances, bulletins, présences et communication réunis dans une seule
            plateforme. Un espace professionnel pour l'administration, un espace clair et
            chaleureux pour les parents.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/login">
                Accéder à mon espace <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: GraduationCap, t: "850 élèves", d: "Suivi individuel par classe et par programme" },
            { icon: Users, t: "620 parents", d: "Un espace dédié au suivi de leurs enfants" },
            { icon: BookOpen, t: "Double programme", d: "Enseignement français et enseignement arabe" },
            { icon: Landmark, t: "Finances claires", d: "Paiements, impayés, dépenses et salaires" },
          ].map((c) => (
            <div key={c.t} className="card-elevated p-5">
              <c.icon className="h-6 w-6 text-primary" />
              <p className="mt-3 font-display text-lg font-semibold">{c.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
