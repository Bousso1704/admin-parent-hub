import { useAuth } from "@/lib/auth";
import { children, type Child } from "@/lib/mock-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function useChild(): Child {
  const { childId } = useAuth();
  return children.find((c) => c.id === childId) ?? children[0];
}

export function ChildSelector() {
  const { childId, setChildId } = useAuth();
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm text-muted-foreground sm:inline">Sélectionner un enfant</span>
      <Select value={childId} onValueChange={setChildId}>
        <SelectTrigger className="w-[230px] bg-card">
          <SelectValue placeholder="Sélectionner un enfant" />
        </SelectTrigger>
        <SelectContent>
          {children.map((c) => (
            <SelectItem key={c.id} value={c.id}>
              {c.emoji} {c.prenom} {c.nom} — {c.classe}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
