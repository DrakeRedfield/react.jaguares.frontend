import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('components/layout/index.tsx',[
    index("routes/home.tsx"),
  ]),
  route('login', 'routes/login.tsx')
] satisfies RouteConfig;
