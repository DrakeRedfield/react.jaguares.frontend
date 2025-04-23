import { prefix, route } from "@react-router/dev/routes";

export const StudentsNestedRoutes = [
  ...prefix('alumnos', [
    route('', "routes/students/view.tsx")
  ]),
]