import type { ReactNode } from "react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie,
  PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

export function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="card-elevated p-5">
      <p className="font-display text-base font-semibold">{title}</p>
      {subtitle && <p className="mb-2 text-xs text-muted-foreground">{subtitle}</p>}
      <div className="mt-3 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children as never}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const axis = { stroke: "var(--muted-foreground)", fontSize: 11 };
const tip = {
  contentStyle: {
    background: "var(--popover)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    color: "var(--popover-foreground)",
    fontSize: 12,
  },
};

export function BarsChart({
  data,
  dataKey = "value",
  xKey = "name",
  color = "var(--chart-1)",
}: {
  data: Record<string, unknown>[];
  dataKey?: string;
  xKey?: string;
  color?: string;
}) {
  return (
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
      <XAxis dataKey={xKey} tick={axis} tickLine={false} axisLine={false} />
      <YAxis tick={axis} tickLine={false} axisLine={false} width={40} />
      <Tooltip {...tip} />
      <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
    </BarChart>
  );
}

export function DonutChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <PieChart>
      <Pie data={data} dataKey="value" nameKey="name" innerRadius="52%" outerRadius="80%" paddingAngle={3}>
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip {...tip} />
      <Legend wrapperStyle={{ fontSize: 12 }} />
    </PieChart>
  );
}

export function MonthlyAreaChart({
  data,
  keys,
}: {
  data: Record<string, unknown>[];
  keys: { key: string; color: string; label: string }[];
}) {
  return (
    <AreaChart data={data}>
      <defs>
        {keys.map((k) => (
          <linearGradient id={`g-${k.key}`} key={k.key} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={k.color} stopOpacity={0.45} />
            <stop offset="95%" stopColor={k.color} stopOpacity={0.04} />
          </linearGradient>
        ))}
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
      <XAxis dataKey="mois" tick={axis} tickLine={false} axisLine={false} />
      <YAxis tick={axis} tickLine={false} axisLine={false} width={54} tickFormatter={(v) => `${Number(v) / 1000}k`} />
      <Tooltip {...tip} formatter={(v: number) => new Intl.NumberFormat("fr-FR").format(v) + " FCFA"} />
      <Legend wrapperStyle={{ fontSize: 12 }} />
      {keys.map((k) => (
        <Area
          key={k.key}
          type="monotone"
          dataKey={k.key}
          name={k.label}
          stroke={k.color}
          fill={`url(#g-${k.key})`}
          strokeWidth={2}
        />
      ))}
    </AreaChart>
  );
}

export function ResultsLineChart({ data }: { data: Record<string, unknown>[] }) {
  return (
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
      <XAxis dataKey="niveau" tick={axis} tickLine={false} axisLine={false} />
      <YAxis domain={[8, 20]} tick={axis} tickLine={false} axisLine={false} width={34} />
      <Tooltip {...tip} />
      <Legend wrapperStyle={{ fontSize: 12 }} />
      <Line type="monotone" dataKey="francais" name="Programme français" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 3 }} />
      <Line type="monotone" dataKey="arabe" name="Programme arabe" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 3 }} />
    </LineChart>
  );
}
