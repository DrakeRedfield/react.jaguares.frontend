import Student from "~/pages/students/student";
import type { Route } from "./+types/view";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Editar Estudiante" },
    { name: "description", content: "Editar información del estudiante" },
  ];
}

export default function StudentsPage() {
  return <Student />;
}