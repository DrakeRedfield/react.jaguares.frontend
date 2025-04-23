import Students from "~/pages/students";
import type { Route } from "./+types/view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Estudiantes" },
    { name: "description", content: "Vista general de estudiantes" },
  ];
}

export default function StudentsRoute() {
  return <Students />;
}
