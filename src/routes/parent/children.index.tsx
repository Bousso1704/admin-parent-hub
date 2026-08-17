import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/shell";
import { metaFor } from "@/components/app/admin-page";
import { StatusBadge } from "@/components/app/stat-card";
import { Button } from "@/components/ui/button";
import { children, fcfa } from "@/lib/mock-data";

export const Route = createFileRoute("/parent/children/")({
  head: () => metaFor("Mes enfants", "Liste de vos enfants inscrits à l'école et accès à leurs profils."),
  component: () => (
    <>
      <PageHeader title="Mes enfants" subtitle="Vos enfants inscrits à l'école" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {children.map((c) => (
          <div key={c.id} className="card-elevated p-5">
            <div className="flex items-start justify-between">
              <p className="font-display text-xl font-semibold">{c.emoji} {c.prenom} {c.nom}</p>
              <StatusBadge status="Élève active" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{c.classe} • {c.niveau}</p>
            <p className="mt-3 text-sm">Matricule : <span className="font-mono text-xs">{c.matricule}</span></p>
            <p className="text-sm">Moyenne : <strong>{c.moyenne.toFixed(2)}/20</strong> • Rang : {c.rang}</p>
            <p className="text-sm">Solde : {c.solde > 0 ? <span className="font-semibold text-destructive">{fcfa(c.solde)}</span> : <span className="font-semibold text-success">À jour</span>}</p>
            <Button asChild size="sm" className="mt-4 w-full">
              <Link to="/parent/children/$id" params={{ id: c.id }}>Profil de l'enfant</Link>
            </Button>
          </div>
        ))}
      </div>
    </>
  ),
});
