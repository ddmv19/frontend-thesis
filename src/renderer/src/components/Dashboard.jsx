import TerrenoUnoImg from '../assets/terreno1.avif'
import TerrenoDosImg from '../assets/terreno2.avif'
import TerrenoTresImg from '../assets/terreno3.avif'
import { CalendarioDashboardIcon, ClienteDashboardIcon } from './Icons'

const STATE_TERRENOS_OCUPADOS = [
  {
    id: crypto.randomUUID(),
    terreno: 'Terreno 1',
    hectareas: '8.5 ha',
    estado: 'Ocupado',
    cliente: 'Carlos Ramirez',
    tipo: 'Arrendamiento',
    fecha: '20/01/2024',
    img: TerrenoUnoImg,
  },
  {
    id: crypto.randomUUID(),
    terreno: 'Terreno 2',
    hectareas: '1.5 ha',
    estado: 'Ocupado',
    cliente: 'Juan Perez',
    tipo: 'Era',
    fecha: '26/01/2024',
    img: TerrenoDosImg,
  },
]

const STATE_TERRENOS_DISPONIBLES = [
  {
    id: crypto.randomUUID(),
    terreno: 'Terreno 3',
    hectareas: '6 ha',
    estado: 'Diponible',
    tipo: 'Arrendamiento',
    img: TerrenoTresImg,
    fecha: '10/11/2023',
  },
]

const LAST_PAY = {
  fecha: '8/12/2023',
  monto: '/S. 850',
  descripcion: 'Cosecha',
}

export const Dashboard = () => {
  return (
    <div className="flex flex-col max-w-screen">
      <section className="flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-2xl text-red-800 mb-5 pb-2 border-b-2 border-red-600">
            Estado Terrenos
          </h2>
          <div className="flex flex-row flex-wrap gap-5">
            {STATE_TERRENOS_OCUPADOS.map((terreno) => (
              <div className="flex flex-col flex-wrap w-[300px] border-[3px] border-red-700 hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-red-400 rounded-md" key={terreno.id}>
                <picture className="w-[100%] h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={terreno.img}
                    alt="Terreno2"
                  />
                </picture>
                <section className="flex flex-col gap-2 p-3">
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">Cliente:</span>
                      {terreno.cliente}
                    </p>
                    <ClienteDashboardIcon />
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">Terreno:</span>
                      {terreno.terreno}
                    </p>
                    <span>{terreno.hectareas}</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">
                        Terreno para:
                      </span>
                      {terreno.tipo}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">Estado:</span>
                      {terreno.estado}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">Fecha Fin:</span>
                      {terreno.fecha}
                    </p>
                    <CalendarioDashboardIcon />
                  </div>
                </section>
              </div>
            ))}
            {STATE_TERRENOS_DISPONIBLES.map((terreno) => (
              <div className="flex flex-col flex-wrap w-[300px] border-[3px] border-green-700 hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-green-400 rounded-md" key={terreno.id}>
                <picture className="w-[100%] h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={terreno.img}
                    alt="Terreno2"
                  />
                </picture>
                <section className="flex flex-col gap-2 p-3">
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">Terreno:</span>
                      {terreno.terreno}
                    </p>
                    <span>{terreno.hectareas}</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">
                        Terreno Para:
                      </span>
                      {terreno.tipo}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">Estado:</span>
                      {terreno.estado}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center content-center">
                    <p className="flex gap-2 text-[15px] text-red-700 font-semibold">
                      <span className="font-bold text-black">
                        Desocupado desde:
                      </span>
                      {terreno.fecha}
                    </p>
                    <CalendarioDashboardIcon />
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-2xl text-green-800 mb-5 pb-2 border-b-2 border-green-600">
            Último pago
          </h2>
          <section className="flex flex-col gap-2 w-[450px] p-4 bg-blue-600 opacity-[.8] rounded-md">
            <div className="flex flex-row gap-[6px]">
              <p className="font-bold">Fecha:</p>
              <span className="text-blue-300">8/12/2023</span>
            </div>
            <div className="flex flex-row gap-[6px]">
              <p className="font-bold">Monto:</p>
              <span className="text-blue-300">/S. 850</span>
            </div>
            <div className="flex flex-row gap-[6px]">
              <p className="font-bold">Descripción:</p>
              <span className="text-blue-300">Pago por cosecha</span>
            </div>
            <div>
              <button className="px-16 py-2.5 text-white bg-green-600 rounded-lg shadow-md focus:shadow-none duration-300 ring-offset-2 ring-green-600 transition-all hover:bg-green-700">
                Detalles
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
