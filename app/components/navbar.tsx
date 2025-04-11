import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ isOpen, toggleMenu }: { isOpen: boolean, toggleMenu: () => void}) {

  return <>
    <header className="w-full flex justify-between transition-all duration-200 bg-(--bg-gray-tkd) text-white text-xl px-5 md:px-10 py-3">
      <button className="flex justify-between items-center lg:hidden">
        {!isOpen && <AiOutlineMenu onClick={() => toggleMenu()} className="h-[18px] h-auto" />}
        {isOpen && <AiOutlineClose onClick={() => toggleMenu()} className="h-[18px] h-auto" />}
      </button>
      <button>
        Drake
      </button>
    </header>
  </>
}