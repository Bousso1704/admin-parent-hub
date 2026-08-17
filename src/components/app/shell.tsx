import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { LogOut, Menu, Moon, Sun, X, type LucideIcon } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { useTheme } from "@/lib/theme";
import { SCHOOL } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export type NavItem = { label: string; to: string; icon: LucideIcon; action?: "logout" };
export type NavGroup = { title: string; items: NavItem[] };

export function AppShell({
  groups,
  spaceLabel,
  children,
}: {
  groups: NavGroup[];
  spaceLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const { dark, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const nav = (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-4">
        <img src={logo} alt="Logo de l'école" width={44} height={44} className="h-11 w-11 shrink-0" />
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold leading-tight">{SCHOOL.name}</p>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sidebar-primary">{spaceLabel}</p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="ml-auto rounded-md p-1 text-sidebar-foreground/70 hover:bg-sidebar-accent lg:hidden"
          aria-label="Fermer le menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <ScrollArea className="flex-1">
        <nav className="space-y-5 px-3 py-4">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/45">
                {group.title}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.to;
                  const Icon = item.icon;
                  if (item.action === "logout") {
                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => {
                            logout();
                            window.location.href = "/login";
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </button>
                      </li>
                    );
                  }
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                          active
                            ? "bg-sidebar-primary font-semibold text-sidebar-primary-foreground shadow-sm"
                            : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="border-t border-sidebar-border px-4 py-3 text-xs text-sidebar-foreground/60">
        Année scolaire {SCHOOL.year}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 lg:block">{nav}</aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 w-72 shadow-xl">{nav}</div>
        </div>
      )}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{user?.nom}</p>
            <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Changer de thème">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Déconnexion"
              onClick={() => {
                logout();
                window.location.href = "/login";
              }}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="animate-rise px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string | undefined;
  actions?: ReactNode | undefined;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
