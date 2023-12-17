import { CloseIcon } from './Icons'

export const ModalEmployees = ({visible, setVisible}) => {
  const isVisible = visible ? 'block modal' : 'hidden'

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={isVisible}>
      <label onClick={setVisible}>
        <CloseIcon className="absolute right-3 top-3 w-[35px] h-[35px] cursor-pointer hover:scale-[1.2] transition-all duration-300" />
      </label>
      <form
        className="flex flex-col items-center w-full gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-gray-700 font-medium text-base"
            htmlFor="nombres"
          >
            Nombre
          </label>
          <input
            type="text"
            placeholder="Ingresa nombre y apellido"
            name="nombres"
            className="w-full pl-4 pr-3 py-2 bg-transparent outline-none border-2 text-orange-700 border-orange-200 focus:border-orange-600 focus:text-orange-400 shadow-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-gray-700 font-medium text-base"
            htmlFor="direccion"
          >
            Dirección
          </label>
          <input
            type="text"
            placeholder="Ingresa la dirección"
            name="direccion"
            className="w-full pl-4 pr-3 py-2 bg-transparent outline-none border-2 text-orange-700 border-orange-200 focus:border-orange-600 focus:text-orange-400 shadow-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-gray-700 font-medium text-base"
            htmlFor="correo"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Ingresa la dirección"
            name="correo"
            className="w-full pl-4 pr-3 py-2 bg-transparent outline-none border-2 text-orange-700 border-orange-200 focus:border-orange-600 focus:text-orange-400 shadow-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-gray-700 font-medium text-base"
            htmlFor="celular"
          >
            Celular
          </label>
          <input
            type="number"
            placeholder="Ingresa el celular"
            name="celular"
            className="w-full pl-4 pr-3 py-2 bg-transparent outline-none border-2 text-orange-700 border-orange-200 focus:border-orange-600 focus:text-orange-400 shadow-sm rounded-lg"
          />
        </div>
        <input
          className="w-full mt-3 pt-2 pb-2 flex items-center justify-center bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all uppercase tracking-[4px]"
          type="submit"
          value="Agregar"
        />
      </form>
    </div>
  )
}
