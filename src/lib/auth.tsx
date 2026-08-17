import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";

export type Role = "admin" | "parent";
export type SessionUser = { email: string; role: Role; nom: string };

const ACCOUNTS: { email: string; password: string; role: Role; nom: string }[] = [
  { email: "admin@ecole.test", password: "admin123", role: "admin", nom: "Direction de l'école" },
  { email: "parent@ecole.test", password: "parent123", role: "parent", nom: "Ibrahima Diop" },
];

const KEY = "efbn.session";
const CHILD_KEY = "efbn.child";

type AuthCtx = {
  user: SessionUser | null;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; role?: Role; error?: string };
  logout: () => void;
  childId: string;
  setChildId: (id: string) => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [childId, setChildIdState] = useState("aminata");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw) as SessionUser);
      const c = localStorage.getItem(CHILD_KEY);
      if (c) setChildIdState(c);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const value = useMemo<AuthCtx>(
    () => ({
      user,
      ready,
      childId,
      setChildId: (id: string) => {
        setChildIdState(id);
        try {
          localStorage.setItem(CHILD_KEY, id);
        } catch {
          /* ignore */
        }
      },
      login: (email, password) => {
        const found = ACCOUNTS.find(
          (a) => a.email.toLowerCase() === email.trim().toLowerCase() && a.password === password,
        );
        if (!found) return { ok: false, error: "Identifiants incorrects. Vérifiez l'email et le mot de passe." };
        const session: SessionUser = { email: found.email, role: found.role, nom: found.nom };
        setUser(session);
        try {
          localStorage.setItem(KEY, JSON.stringify(session));
        } catch {
          /* ignore */
        }
        return { ok: true, role: found.role };
      },
      logout: () => {
        setUser(null);
        try {
          localStorage.removeItem(KEY);
        } catch {
          /* ignore */
        }
      },
    }),
    [user, ready, childId],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

/** Front-end only visual guard: redirects to /login when the role does not match. */
export function useRoleGuard(role: Role) {
  const { user, ready } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!ready) return;
    if (!user) navigate({ to: "/login" });
    else if (user.role !== role)
      navigate({ to: user.role === "admin" ? "/admin/dashboard" : "/parent/dashboard" });
  }, [ready, user, role, navigate]);
  return { user, ready, allowed: !!user && user.role === role };
}
