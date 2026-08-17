import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "primary",
}: {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  tone?: "primary" | "gold" | "success" | "warning" | "destructive";
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    gold: "bg-gold/20 text-gold-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/20 text-warning-foreground",
    destructive: "bg-destructive/12 text-destructive",
  };
  return (
    <div className="card-elevated p-4 transition-shadow hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="mt-2 truncate font-display text-2xl font-semibold">{value}</p>
          {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
        </div>
        <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", tones[tone])}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "à jour": "bg-success/15 text-success",
    payé: "bg-success/15 text-success",
    payée: "bg-success/15 text-success",
    versé: "bg-success/15 text-success",
    publié: "bg-success/15 text-success",
    actif: "bg-success/15 text-success",
    notée: "bg-success/15 text-success",
    "élève active": "bg-success/15 text-success",
    partiel: "bg-warning/25 text-warning-foreground",
    "partiellement payé": "bg-warning/25 text-warning-foreground",
    "en attente": "bg-warning/25 text-warning-foreground",
    "en cours": "bg-warning/25 text-warning-foreground",
    planifiée: "bg-primary/10 text-primary",
    "à générer": "bg-muted text-muted-foreground",
    impayé: "bg-destructive/12 text-destructive",
    "non payé": "bg-destructive/12 text-destructive",
  };
  const cls = map[status.toLowerCase()] ?? "bg-muted text-muted-foreground";
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-medium", cls)}>
      {status}
    </span>
  );
}
