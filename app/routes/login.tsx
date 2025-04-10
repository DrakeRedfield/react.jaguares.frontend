import Login from "~/pages/auth/login";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Inicia sesión" },
  ];
}

export default function LoginRoute() {
  return <Login />;
}
