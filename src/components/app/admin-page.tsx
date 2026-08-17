import { useMemo, useState, type ReactNode } from "react";
import { Download, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/shell";
import { DataTable } from "@/components/app/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminListPage<T extends Record<string, unknown>>({
  title,
  subtitle,
  columns,
  rows,
  cells,
  addLabel = "Ajouter",
  summary,
  withActions = true,
}: {
  title: string;
  subtitle?: string;
  columns: string[];
  rows: T[];
  cells: (row: T) => ReactNode[];
  addLabel?: string;
  summary?: ReactNode;
  withActions?: boolean;
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      rows.filter((r) =>
        Object.values(r).join(" ").toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [rows, q],
  );

  const cols = withActions ? [...columns, "Actions"] : columns;

  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
        actions={
          <>
            <Button variant="outline" onClick={() => toast.info("Export simulé (démonstration front-end)")}>
              <Download className="mr-2 h-4 w-4" /> Exporter
            </Button>
            {withActions && (
              <Button onClick={() => toast.success(`${addLabel} — formulaire de démonstration`)}>
                <Plus className="mr-2 h-4 w-4" /> {addLabel}
              </Button>
            )}
          </>
        }
      />

      {summary && <div className="mb-5">{summary}</div>}

      <div className="mb-4 relative max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher..."
          className="pl-9"
        />
      </div>

      <DataTable
        columns={cols}
        rows={filtered}
        render={(row) => {
          const base = cells(row);
          if (!withActions) return base;
          return [
            ...base,
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Modifier"
                onClick={() => toast.info("Modification simulée")}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Supprimer"
                onClick={() => toast.error("Suppression simulée")}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>,
          ];
        }}
      />
      <p className="mt-3 text-xs text-muted-foreground">
        {filtered.length} résultat(s) — données de démonstration.
      </p>
    </>
  );
}

export function metaFor(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — École Fatoumata Binetou Niass` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — École Fatoumata Binetou Niass` },
      { property: "og:description", content: description },
    ],
  };
}
