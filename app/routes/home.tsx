import Home from "~/pages/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Inicio" },
    { name: "description", content: "Bienvenidos a la plataforma de Jaguares" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
