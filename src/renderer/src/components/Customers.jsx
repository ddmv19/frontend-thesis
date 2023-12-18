import { useState } from 'react'
import { SearchIcon } from './Icons'
import { ModalCustomer } from './ModalCustomer'

const dataTable = [
  {
    nombre: 'Liam James',
    direccion: '---',
    email: 'liamjames@example.com',
    celular: '945 552 635',
  },
  {
    nombre: 'Olivia Emma',
    direccion: '---',
    email: 'oliviaemma@example.com',
    celular: '997 585 698',
  },
  {
    nombre: 'William Benjamin',
    direccion: '---',
    email: 'william.benjamin@example.com',
    celular: '911 547 212',
  },
  {
    nombre: 'Henry Theodore',
    direccion: '---',
    email: 'henrytheodore@example.com',
    celular: '976 665 257',
  },
  {
    nombre: 'Amelia Elijah',
    direccion: '---',
    email: 'amelia.elijah@example.com',
    celular: '947 121 178',
  },
]


export const Customers = () => {
  const [pages, setPages] = useState(['1', '2', '3', , '...', '8', '9', '10'])
  const [currentPage, setCurrentPage] = useState('1')

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <main className="w-full border">
      <section className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-blue-600 pb-2 border-b-2 border-blue-600">
          Clientes
        </h2>
        <div className="flex flex-col gap-2 text-[14px] font-medium text-slate-600">
          <p>
            📊 Agrega, edita y elimina fácilmente clientes: nombres, apellidos,
            dirección, celular y correo electrónico.
          </p>
          <p>⏰ ¡Optimiza tu tiempo y mejora la atención al cliente! 🚀</p>
        </div>
        <button className="w-full pt-3 pb-3 bg-blue-700 uppercase tracking-widest font-bold rounded-lg hover:bg-blue-600 hover:text-gray-800 hover:tracking-[0.3em] transition-all duration-300"
          onClick={handleModal}>
          Agregar Cliente
        </button>
        <ModalCustomer visible={isModalVisible} setVisible={handleModal}/>
        <div className="w-full">
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto">
            <div className="relative">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-blue-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              />
            </div>
          </form>
        </div>
        <div className="mt-1 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-blue-500 text-white font-bold border-b border-black">
              <tr>
                <th className="py-3 px-6">Nombre</th>
                <th className="py-3 px-6">Dirección</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Celular</th>
                <th className="py-3 px-[52px]">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y border-b border-black">
              {dataTable.map((item, idx) => (
                <tr className="border-b border-black" key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.direccion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.celular}
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
            <div>MOSTRANDO 1-10 DE 120</div>
            <div className="flex items-center gap-12" aria-label="Pagination">
              <a
                href="javascript:void(0)"
                className="text-black font-semibold hover:text-indigo-600"
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
                        className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-indigo-600 ${
                          currentPage == item
                            ? 'bg-indigo-600 text-white font-medium'
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
                className="hover:text-indigo-600 text-black font-semibold"
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
