import { Outlet } from "react-router";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function BaseLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  }

  return <>
    <div className="lg:flex">
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="w-full grid grid-rows-[auto_1fr] max-h-screen">
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <main className="overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  </>
}