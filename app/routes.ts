import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { StudentsNestedRoutes } from "./routes/students";

export default [
  layout('components/layout/index.tsx',[
    index("routes/home.tsx"),
    ...StudentsNestedRoutes
  ]),
  route('login', 'routes/login.tsx')
] satisfies RouteConfig;
