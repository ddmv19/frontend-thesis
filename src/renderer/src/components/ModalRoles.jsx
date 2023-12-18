import { CloseIcon } from './Icons'

export const ModalRoles = ({visible, setVisible}) => {
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
            htmlFor="rol"
          >
            Rol
          </label>
          <input
            type="text"
            placeholder="Ingresa el rol"
            name="rol"
            className="w-full pl-4 pr-3 py-2 bg-transparent outline-none border-2 text-gray-700 border-gray-400 font-bold focus:border-gray-600 focus:text-gray-400 shadow-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 relative w-full">
          <label
            className="text-gray-700 font-medium text-base"
            htmlFor="descripcion"
          >
            Descripción
          </label>
          <input
            type="text"
            placeholder="Ingresa la descripción"
            name="descripcion"
            className="w-full pl-4 pr-3 py-2 bg-transparent outline-none border-2 text-gray-700 border-gray-400 font-bold focus:border-gray-600 focus:text-gray-400 shadow-sm rounded-lg"
          />
        </div>
        <input
          className="w-full mt-3 pt-2 pb-2 flex items-center justify-center bg-gray-600 text-white font-semibold hover:bg-gray-700 transition-all uppercase tracking-[4px]"
          type="submit"
          value="Agregar"
        />
      </form>
    </div>
  )
}
