import { XIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

interface IProps {
  //   title: string
  //   name: string
  children?: JSX.Element[] | JSX.Element
  placeholder?: string
  closable?: () => void
  successMessage?: string
  type?: string
}

export const NuevoModal = ({ closable }: IProps) => {
  const { register, handleSubmit } = useForm()

  //   const onSubmit = (datos) => {
  //     console.log(datos)
  //   }

  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-screen cursor-default items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-80 w-72 flex-col items-center justify-start rounded-lg bg-[#FBFBFB] py-4 md:h-[480px] md:w-[700px]">
        <div id="head" className="ml-20 flex w-full flex-col">
          <h2 className="text-primary mt-3 cursor-text text-base font-semibold md:text-lg">
            Nuevo Usuario
          </h2>
          <div className="mt-1 w-32 border-b border-black opacity-10"></div>
        </div>
        <div id="content" className="w-full">
          <div onClick={closable}>
            <XIcon className="absolute right-10 top-8 h-5 w-5 cursor-pointer" />
          </div>
          <div id="form" className="w-full">
            <form
              className="relative flex w-full flex-wrap items-center justify-center"
              onSubmit={handleSubmit((datos) => console.log(datos))}
            >
              <input
                className="mt-6 mr-5 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Rol"
                autoComplete="none"
                {...register('rol')}
                required
                type="text"
                name="rol"
                id="rol"
              />

              <input
                className="mt-6 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Nombre"
                autoComplete="none"
                {...register('nombre')}
                required
                type="text"
                name="nombre"
                id="nombre"
              />
              <input
                className="mt-6 mr-5 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar tipo de documento"
                autoComplete="none"
                {...register('tipo_documento')}
                required
                type="text"
                name="tipo_documento"
                id="tipo_documento"
              />
              <input
                className="mt-6 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar DNI"
                autoComplete="none"
                {...register('num_documento')}
                required
                type="text"
                name="num_documento"
                id="num_documento"
              />
              <input
                className="mt-6 mr-5 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Direccion"
                autoComplete="none"
                {...register('direccion')}
                required
                type="text"
                name="direccion"
                id="direccion"
              />
              <input
                className="mt-6 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Telefono"
                autoComplete="none"
                {...register('telefono')}
                required
                type="text"
                name="telefono"
                id="telefono"
              />
              <input
                className="mt-6 mr-5 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Email"
                autoComplete="none"
                {...register('email')}
                required
                type="text"
                name="email"
                id="email"
              />
              <input
                className="mt-6 h-11 w-5/12 self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Password"
                autoComplete="none"
                {...register('password')}
                required
                type="text"
                name="password"
                id="password"
              />
              <input
                className="mt-6 h-11 w-5/12  self-center rounded-lg bg-white p-3 px-5 text-sm drop-shadow-input focus:outline-none md:h-12 md:text-base"
                placeholder="Ingresar Estado"
                autoComplete="none"
                {...register('estado')}
                required
                type="text"
                name="estado"
                id="estado"
              />
              <br />
              <input
                className="absolute -bottom-10 right-10 mt-8 h-10 w-20 flex-none cursor-pointer rounded-lg bg-[#02958B] p-1 px-4 font-semibold text-white"
                onClick={() =>
                  toast.success('xd', { position: 'bottom-right' })
                }
                type="submit"
                value={'Crear'}
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}
