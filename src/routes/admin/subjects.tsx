import { createFileRoute } from "@tanstack/react-router";
import { AdminListPage, metaFor } from "@/components/app/admin-page";
import { adminSubjects } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/subjects")({
  head: () => metaFor("Matières", "Matières des programmes français et arabe avec coefficients."),
  component: () => (
    <AdminListPage
      title="Matières"
      subtitle="Programme français et programme arabe"
      addLabel="Nouvelle matière"
      columns={["Matière", "Programme", "Coefficient", "Enseignants"]}
      rows={adminSubjects}
      cells={(m) => [<span className="font-medium">{m.matiere}</span>, m.programme, m.coef, m.enseignants]}
    />
  ),
});
