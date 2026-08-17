import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ShieldCheck, Users, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import { SCHOOL } from "@/lib/mock-data";
import { useAuth, type Role } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Connexion — École Fatoumata Binetou Niass" },
      {
        name: "description",
        content: "Connectez-vous à votre espace administrateur ou parent de l'École Fatoumata Binetou Niass.",
      },
      { property: "og:title", content: "Connexion — École Fatoumata Binetou Niass" },
      { property: "og:description", content: "Espace administrateur et espace parent de l'école." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [role, setRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const choose = (r: Role) => {
    setRole(r);
    setError("");
    setEmail(r === "admin" ? "admin@ecole.test" : "parent@ecole.test");
    setPassword(r === "admin" ? "admin123" : "parent123");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = login(email, password);
    if (!res.ok) {
      setError(res.error ?? "Connexion impossible");
      toast.error("Connexion refusée", { description: res.error });
      return;
    }
    if (role && res.role !== role) {
      setError(`Ce compte n'est pas un compte ${role === "admin" ? "administrateur" : "parent"}.`);
      return;
    }
    toast.success("Connexion réussie", { description: "Bienvenue dans votre espace." });
    navigate({ to: res.role === "admin" ? "/admin/dashboard" : "/parent/dashboard" });
  };

  return (
    <div className="surface-arabesque flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-lg animate-rise">
        <div className="mb-6 text-center">
          <img src={logo} alt="Logo de l'école" width={80} height={80} className="mx-auto h-20 w-20" />
          <p className="mt-3 font-display text-lg font-semibold">{SCHOOL.name}</p>
          <h1 className="mt-1 font-display text-3xl font-semibold">Bienvenue dans votre espace</h1>
          <p className="mt-2 text-sm text-muted-foreground">{SCHOOL.tagline}</p>
        </div>

        <div className="card-elevated p-6 sm:p-8">
          {!role ? (
            <div className="space-y-4">
              <button
                onClick={() => choose("admin")}
                className="flex w-full items-start gap-4 rounded-xl border border-border p-4 text-left transition-all hover:border-primary hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold">👨‍💼 Administrateur</span>
                  <span className="block text-sm text-muted-foreground">
                    Gestion complète de l'école : élèves, finances, personnel, rapports.
                  </span>
                  <span className="mt-2 block text-sm font-medium text-primary">
                    Se connecter en tant qu'administrateur
                  </span>
                </span>
              </button>

              <button
                onClick={() => choose("parent")}
                className="flex w-full items-start gap-4 rounded-xl border border-border p-4 text-left transition-all hover:border-gold hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold-foreground">
                  <Users className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold">👨‍👩‍👧 Parent</span>
                  <span className="block text-sm text-muted-foreground">
                    Suivi de vos enfants : notes, bulletins, paiements, présences.
                  </span>
                  <span className="mt-2 block text-sm font-medium text-primary">
                    Se connecter en tant que parent
                  </span>
                </span>
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <button
                type="button"
                onClick={() => setRole(null)}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Changer d'espace
              </button>
              <p className="font-display text-xl font-semibold">
                {role === "admin" ? "Espace Administrateur" : "Espace Parent"}
              </p>

              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@ecole.test"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="absolute inset-y-0 right-3 text-muted-foreground"
                    aria-label="Afficher le mot de passe"
                  >
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm font-medium text-destructive">{error}</p>}

              <Button type="submit" className="w-full" size="lg">
                {role === "admin"
                  ? "Se connecter en tant qu'administrateur"
                  : "Se connecter en tant que parent"}
              </Button>

              <p className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">
                Comptes de démonstration (front-end uniquement) :<br />
                Administrateur — <strong>admin@ecole.test</strong> / <strong>admin123</strong>
                <br />
                Parent — <strong>parent@ecole.test</strong> / <strong>parent123</strong>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
