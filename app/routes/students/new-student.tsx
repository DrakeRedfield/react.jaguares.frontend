import Student from "~/pages/students/student";
import type { Route } from "./+types/view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nuevo Estudiante" },
    { name: "description", content: "Registrar estudiante nuevo" },
  ];
}

export default function StudentsPage() {
  return <Student />;
}