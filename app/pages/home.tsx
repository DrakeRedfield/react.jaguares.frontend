import { AiOutlineCalendar, AiOutlineShopping } from "react-icons/ai";

export default function Home() {
  return <>
    <div className="p-5">
      <div className="grid md:grid-cols-[1fr_1fr] gap-4">
        <div className="card">
          <div className="card-header">
            <h1>Eventos</h1>
          </div>
          <div className="card-body mt-5">
            {/* <p className="pb-3">No hay eventos registrados este mes</p> */}
            {
              [1, 2, 3, 4, 5].map((item) => (
                <div className="pb-2 mb-2 border-b-1 border-gray-300 gap-2 items-center grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] md:gap-4" key={item}>
                  <AiOutlineCalendar className="hidden md:block text-xl" />
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-md mb-1 overflow-hidden whitespace-nowrap text-ellipsis"><strong>Visita Escuela Tao Pai Pai pai pai pai pai api</strong></p>
                    <p className="text-xs text-gray-400 pl-2 overflow-hidden whitespace-nowrap text-ellipsis">Blvd. Principal, Delegación, Estado.</p>
                  </div>
                  <p className="text-xs"><strong>03/Julio/2025</strong></p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h1>Productos por agotarse</h1>
          </div>
          <div className="card-body mt-5">
            {/* <p className="pb-3">No hay eventos registrados este mes</p> */}
            {
              [1, 2, 3].map((item) => (
                <div className="pb-2 mb-2 border-b-1 border-gray-300 gap-2 items-center grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] md:gap-4" key={item}>
                  <AiOutlineShopping className="hidden md:block text-xl" />
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-md mb-1 overflow-hidden whitespace-nowrap text-ellipsis"><strong>Omnilife Magnus</strong></p>
                  </div>
                  <p className="text-sm text-yellow-500"><strong>Stock: 9</strong></p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h1>Eventos</h1>
        </div>
        <div className="card-body mt-5">
          {/* <p className="pb-3">No hay eventos registrados este mes</p> */}
          {
            [1, 2, 3, 4, 5].map((item) => (
              <div className="pb-2 mb-2 border-b-1 border-gray-300 gap-2 items-center grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] md:gap-4" key={item}>
                <AiOutlineCalendar className="hidden md:block text-xl" />
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-md mb-1 overflow-hidden whitespace-nowrap text-ellipsis"><strong>Visita Escuela Tao Pai Pai pai pai pai pai api</strong></p>
                  <p className="text-xs text-gray-400 pl-2 overflow-hidden whitespace-nowrap text-ellipsis">Blvd. Principal, Delegación, Estado.</p>
                </div>
                <p className="text-xs"><strong>03/Julio/2025</strong></p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </>
}