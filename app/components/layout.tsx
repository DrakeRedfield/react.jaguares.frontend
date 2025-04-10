import { Outlet } from "react-router";
import Navbar from "./navbar";

export default function BaseLayout() {
  return <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
}