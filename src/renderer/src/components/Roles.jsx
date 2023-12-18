import { useState } from 'react'
import { ModalRoles } from './ModalRoles'
import { SearchIcon } from './Icons'

const dataTable = [
  {
    rol: 'Administrador',
    descripcion: 'Permiso para todos los modulos',
  },
  {
    rol: 'Empleado',
    descripcion: 'Permiso limitado a los modulos',
  },
  {
    rol: 'Cliente',
    descripcion: 'Beneficiario de nuestros productos o servicios',
  },
]

export const Roles = () => {
  const [pages, setPages] = useState(['1', '2', '3'])
  const [currentPage, setCurrentPage] = useState('1')

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <main className="w-full border">
      <section className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-black-600 pb-2 border-b-2 border-black">
          Roles
        </h2>
        <div className="flex flex-col gap-2 text-[14px] font-medium text-slate-600">
          <p>
            📊 Optimiza la organización y controla los roles
          </p>
          <p>
            ⏰ Asigna, modifica y supervisa roles de manera eficiente,
            garantizando una distribución efectiva de responsabilidades 🚀
          </p>
        </div>
        <button
          className="w-full pt-3 pb-3 bg-gray-700 uppercase tracking-widest font-bold rounded-lg text-white hover:bg-gray-600 hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-300"
          onClick={handleModal}
        >
          Agregar Rol
        </button>
        <ModalRoles visible={isModalVisible} setVisible={handleModal}/>
        <div className="w-full">
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto">
            <div className="relative">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md font-bold outline-none bg-gray-50 focus:bg-white focus:border-gray-600"
              />
            </div>
          </form>
        </div>
        <div className="w-full mt-1 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-600 text-white font-bold border-b border-black">
              <tr>
                <th className="py-3 px-6">Rol</th>
                <th className="py-3 px-6">Descripción</th>
                <th className="w-fit inline-block py-3 ml-[225px]">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y border-b border-black">
              {dataTable.map((item, idx) => (
                <tr className="border-b border-black" key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.rol}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.descripcion}
                  </td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href="javascript:void()"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Editar
                    </a>
                    <button
                      href="javascript:void()"
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-gray-600 md:px-8">
          <div className="hidden justify-between text-sm md:flex">
            <div>MOSTRANDO 1-5 DE 3</div>
            <div className="flex items-center gap-12" aria-label="Pagination">
              <a
                href="javascript:void(0)"
                className="text-black font-semibold hover:text-gray-500"
              >
                Anterior
              </a>
              <ul className="flex items-center gap-1">
                {pages.map((item, idx) => (
                  <li key={item}>
                    {item == '...' ? (
                      <div>{item}</div>
                    ) : (
                      <a
                        href="javascript:void(0)"
                        aria-current={currentPage == item ? 'page' : false}
                        className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-gray-600 ${
                          currentPage == item
                            ? 'bg-gray-600 text-white font-medium'
                            : ''
                        }`}
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-500 text-black font-semibold"
              >
                Siguiente
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
