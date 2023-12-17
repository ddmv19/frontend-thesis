import { useState } from 'react'
import {
  PasswordHiddenIcon,
  PasswordLoginIcon,
  PasswordVisibleIcon,
  UserLoginIcon,
} from './Icons'
import AnimationLogin from './AnimationLogin'

export const Login = () => {
  const [values, setValues] = useState({
    usuario: '',
    contrasenia: ''
  })

  const [isPasswordHidden, setPasswordHidden] = useState(true)

  const handlePasswordIcon = (event) => {
    event.preventDefault()
    setPasswordHidden(!isPasswordHidden)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  } 

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
  }

  return (
    <main className="flex items-center justify-center w-full h-[100vh] bg-green-700 main-login">
      <AnimationLogin />
      <section className="w-[450px] h-[400px] flex items-center justify-center gap-4 p-4 bg-slate-700 rounded-xl opacity-[.9]">
        <form
          className="flex flex-col items-center w-[350px] gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1 relative w-full">
            <UserLoginIcon />
            <label className="text-white font-medium text-lg" htmlFor="usuario">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              name="usuario"
              className="w-full pl-12 pr-3 py-2 text-white bg-transparent outline-none border-2 focus:border-green-600 focus:text-green-400 shadow-sm rounded-lg"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 relative w-full">
            <PasswordLoginIcon />
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={handlePasswordIcon}
            >
              {isPasswordHidden ? (
                <PasswordHiddenIcon />
              ) : (
                <PasswordVisibleIcon />
              )}
            </button>
            <label
              className="text-white font-medium text-lg"
              htmlFor="contrasenia"
            >
              Contraseña
            </label>
            <input
              type={isPasswordHidden ? 'password' : 'text'}
              placeholder="Ingresa tu contraseña"
              name="contrasenia"
              className="w-full pl-12 pr-3 py-2 text-white bg-transparent outline-none border-2 focus:border-green-600 focus:text-green-400 shadow-sm rounded-lg"
              onChange={handleChange}
            />
          </div>
          <div className="relative w-full">
            <input
              className="w-full pt-2 pb-2 flex items-center justify-center bg-green-600 text-white font-semibold hover:bg-green-700 transition-all uppercase tracking-[4px]"
              type="submit"
              value="Ingresar"
            />
          </div>
        </form>
      </section>
    </main>
  )
}
