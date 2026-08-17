import type { ReactNode } from "react";

export function DataTable<T>({
  columns,
  rows,
  render,
}: {
  columns: string[];
  rows: T[];
  render: (row: T) => ReactNode[];
}) {
  return (
    <div className="card-elevated overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-muted/60">
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-border transition-colors hover:bg-muted/40">
                {render(row).map((cell, j) => (
                  <td key={j} className="whitespace-nowrap px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
