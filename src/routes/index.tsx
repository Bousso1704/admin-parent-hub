import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Heart,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { SCHOOL, adminStats } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "École Fatoumata Binetou Niass — Enseignement franco-arabe d'excellence" },
      {
        name: "description",
        content:
          "Découvrez l'École Fatoumata Binetou Niass : une école franco-arabe à Dakar alliant excellence académique, valeurs humaines et suivi personnalisé de chaque élève.",
      },
      { property: "og:title", content: "École Fatoumata Binetou Niass — Enseignement franco-arabe d'excellence" },
      {
        property: "og:description",
        content:
          "Une école franco-arabe à Dakar alliant excellence académique, valeurs humaines et suivi personnalisé.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre école", href: "#ecole" },
  { label: "Programmes", href: "#programmes" },
  { label: "Vie scolaire", href: "#vie-scolaire" },
  { label: "Contact", href: "#contact" },
];

function Landing() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-4">
          <img src={logo} alt="Logo de l'école" width={44} height={44} className="h-11 w-11 shrink-0" />
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold leading-tight">{SCHOOL.name}</p>
            <p className="text-xs text-muted-foreground">{SCHOOL.tagline}</p>
          </div>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-2 flex items-center gap-2 md:ml-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/login">Espace famille</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setMobileOpen(false)} aria-hidden />
          <div className="absolute right-0 top-0 h-full w-72 bg-background p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Espace famille
              </Link>
            </nav>
          </div>
        </div>
      )}

      <section id="accueil" className="surface-arabesque relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-foreground">
              Année scolaire {SCHOOL.year}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] sm:text-5xl lg:text-6xl">
              Former des citoyens du monde, ancrés dans leurs valeurs.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              L'École Fatoumata Binetou Niass offre un enseignement franco-arabe d'excellence à Dakar, du
              préscolaire au lycée, dans un environnement bienveillant et exigeant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/login">
                  Accéder à mon espace <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Nous contacter</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="card-elevated relative overflow-hidden p-2">
              <img
                src={logo}
                alt="Blason de l'École Fatoumata Binetou Niass"
                className="aspect-square w-full rounded-2xl object-contain p-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-5 text-primary-foreground shadow-lift lg:block">
              <p className="font-display text-3xl font-bold">{adminStats.students}+</p>
              <p className="text-sm opacity-90">élèves accompagnés</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: GraduationCap, value: adminStats.students, label: "Élèves" },
            { icon: Users, value: adminStats.parents, label: "Parents actifs" },
            { icon: BookOpen, value: adminStats.teachers, label: "Enseignants" },
            { icon: Landmark, value: adminStats.classes, label: "Classes" },
          ].map((stat) => (
            <div key={stat.label} className="card-elevated p-5 text-center">
              <stat.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 font-display text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ecole" className="bg-muted/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Notre école</h2>
            <p className="mt-3 text-muted-foreground">
              Un établissement qui conjugue savoirs, culture et épanouissement personnel.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Bienveillance",
                text: "Chaque élève est considéré dans sa singularité. Notre équipe éduque avec exigence et bienveillance au quotidien.",
              },
              {
                icon: BookOpen,
                title: "Double culture",
                text: "Un cursus bilingue franco-arabe qui permet aux élèves de maîtriser deux langues et deux cultures.",
              },
              {
                icon: GraduationCap,
                title: "Excellence",
                text: "Des résultats scolaires solides, un encadrement de qualité et un suivi régulier des progrès de chacun.",
              },
            ].map((item) => (
              <div key={item.title} className="card-elevated p-6">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Nos programmes</h2>
            <p className="mt-3 text-muted-foreground">
              Un cursus complet du préscolaire au lycée, conforme aux programmes sénégalais et enrichi par
              l'enseignement arabe.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Enseignement français",
                items: [
                  "Programme officiel du ministère de l'Éducation nationale",
                  "Mathématiques, sciences, histoire-géographie, langues",
                  "Préparation aux examens officiels (BFEM, BAC)",
                ],
              },
              {
                title: "Enseignement arabe",
                items: [
                  "Lecture, écriture et grammaire arabe",
                  "Étude du Coran et mémorisation",
                  "Culture islamique et valeurs citoyennes",
                ],
              },
            ].map((program) => (
              <div key={program.title} className="card-elevated p-6">
                <h3 className="font-display text-xl font-semibold">{program.title}</h3>
                <ul className="mt-4 space-y-3">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vie-scolaire" className="bg-muted/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Vie scolaire</h2>
            <p className="mt-3 text-muted-foreground">
              Au-delà des cours, nous offrons un cadre structuré pour éveiller les talents et renforcer le
              lien entre l'école et les familles.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CalendarDays, title: "Emploi du temps", text: "Journée rythmée entre cours, récréations et activités spirituelles." },
              { icon: ClipboardListIcon, title: "Évaluations", text: "Contrôles continus, devoirs et bulletins trimestriels détaillés." },
              { icon: Users, title: "Clubs", text: "Clubs de lecture, sciences, théâtre et arts pour développer la créativité." },
              { icon: Mail, title: "Communication", text: "Annonces, notifications et rendez-vous parents-enseignants réguliers." },
            ].map((item) => (
              <div key={item.title} className="card-elevated p-5">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="surface-arabesque card-elevated overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">Contactez-nous</h2>
                <p className="mt-3 text-muted-foreground">
                  Vous souhaitez inscrire votre enfant ou obtenir des informations ? Notre équipe vous
                  répond avec plaisir.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Adresse</p>
                      <p className="text-sm text-muted-foreground">{SCHOOL.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Téléphone</p>
                      <p className="text-sm text-muted-foreground">{SCHOOL.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">contact@ecole-fbn.sn</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-primary p-8 text-primary-foreground lg:p-10">
                <div className="text-center">
                  <p className="font-display text-2xl font-semibold">Inscriptions ouvertes</p>
                  <p className="mt-2 text-primary-foreground/80">
                    Rejoignez l'École Fatoumata Binetou Niass dès la rentrée prochaine.
                  </p>
                  <Button asChild variant="secondary" size="lg" className="mt-6">
                    <Link to="/login">Espace famille</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo de l'école" width={36} height={36} className="h-9 w-9" />
              <div>
                <p className="font-display text-sm font-semibold">{SCHOOL.name}</p>
                <p className="text-xs text-muted-foreground">{SCHOOL.tagline}</p>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} {SCHOOL.name}. Tous droits réservés.
            </p>
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Connexion</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ClipboardListIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}
