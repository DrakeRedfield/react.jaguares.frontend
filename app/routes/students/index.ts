import { prefix, route } from "@react-router/dev/routes";

export const StudentsNestedRoutes = [
  ...prefix('alumnos', [
    route('', "routes/students/view.tsx"),
    route('nuevo', "routes/students/new-student.tsx"),
    route('edit/:studentId', "routes/students/edit-student.tsx")
  ]),
]