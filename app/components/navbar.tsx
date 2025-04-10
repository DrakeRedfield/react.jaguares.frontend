import { useState } from "react";
import { Link } from "react-router";
import { AiOutlineMenu, AiOutlineUser, AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue)
  }
  return <>
    <nav className="w-full bg-(--background-blue) text-white px-5 md:px-10 py-3">
      <div className="flex justify-between items-center">
        <AiOutlineMenu onClick={() => toggleMenu()} className="h-[18px] h-auto md:hidden"/>
        <div className="hidden md:flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      {
        isOpen && <div className="absolute bg-(--background-blue) justify-none text-center h-dvh w-full left-0 flex flex-col md:hidden">
          <Link
            className="min-w-screen w-screen px-3 py-3 flex justify-center items-center gap-2 transition-all duration-200 hover:bg-(--background-blue-hover) focus:bg-(--background-blue-hover)"
            to="/"
          >
            <AiOutlineHome />
            Home
          </Link>
          <Link
            className="min-w-screen w-screen px-3 py-3 flex justify-center items-center gap-2 transition-all duration-200 hover:bg-(--background-blue-hover) focus:bg-(--background-blue-hover)"
            to="/login"
          >
            <AiOutlineUser />
            Login
          </Link>
        </div>
      }
    </nav>
  </>
}