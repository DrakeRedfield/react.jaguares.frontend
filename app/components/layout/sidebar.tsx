import { Link } from "react-router";
import { AiOutlineHome, AiOutlineIdcard, AiOutlineCreditCard, AiOutlineCalendar, AiOutlineBook, AiOutlineClose } from "react-icons/ai";

const routes = [
  {
    path: "/",
    name: "Inicio",
    icon: <AiOutlineHome />,
    active: true
  },
  {
    path: "/alumnos",
    name: "Alumnos",
    icon: <AiOutlineIdcard />
  },
  {
    path: "/pagos",
    name: "Pagos",
    icon: <AiOutlineCreditCard />,
  },
  {
    path: "/eventos",
    name: "Eventos",
    icon: <AiOutlineCalendar />,
  },
  {
    path: "/inventario",
    name: "Inventario",
    icon: <AiOutlineBook />,
  },
]

export default function Sidebar({ isOpen, toggleMenu }: { isOpen: boolean, toggleMenu: () => void }) {
  return (<>
    <div className={
      (isOpen ? ' w-full ' : ' w-0 ')+
      'absolute lg:relative lg:w-full lg:max-w-(--sidebar-size) bg-(--bg-gray-tkd) transition-all duration-200 text-gray-400 text-xl justify-none h-dvh left-0 grid grid-rows-[auto_2fr_3fr_auto] lg:grid-rows-[1fr_3fr_auto] overflow-hidden'
    }>
      <header className="w-full flex justify-between text-white px-5 md:px-10 py-3 lg:hidden">
        <button className="items-center text-xl">
          <AiOutlineClose onClick={() => toggleMenu()} />
        </button>
        <button className="text-(--bg-gray-tkd)">
          Drake
        </button>
      </header>
      <div className="grid justify-center content-center lg:max-w-(--sidebar-size)">
        <img className="w-30" src="/mameshiba-wienk.png" alt="Mameshiba Avatar" />
      </div>
      <div className="text-lg grid content-center overflow-y-auto lg:max-w-(--sidebar-size)">
        {
          routes.map((route) => (
            <Link
              key={route.path}
              className={
                (route.active ? 'text-white ': '')
                +
                "min-w-screen w-screen lg:min-w-full lg:max-w-(--sidebar-size) px-5 pl-10 py-3 flex items-center gap-5 transition-all duration-200 hover:text-white hover:bg-(--background-blue-hover) focus:bg-(--background-blue-hover)"
              }
              to={route.path}
            >
              {route.icon}
              <span>{route.name}</span>
            </Link>
          ))
        }
      </div>
      <Link
        className="min-w-screen w-screen text-lg px-5 py-3 flex items-center gap-2 transition-all duration-200 hover:text-white hover:bg-(--background-blue-hover) focus:bg-(--background-blue-hover)"
        to="/login"
      >
        <span>Cerrar Sesión</span>
      </Link>
    </div>
  </>)
}