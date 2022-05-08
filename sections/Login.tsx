import Link from 'next/link'
import React from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export const Login = () => {
  return (
    <div className="relative grid h-screen w-screen place-content-center bg-gradient-to-r from-teal-700 to-teal-500  md:to-teal-300">
      <div className="flex h-[36rem] w-[28rem] flex-col items-center rounded-lg bg-white px-10 py-16 shadow-md md:w-[46rem] md:px-36">
        <figure>
          <img src="assets/logo.png" alt="logo" />
        </figure>
        <p className="mt-10 mb-5 text-center text-sm font-medium text-[#868686]">
          Somos una tienda de útiles escolares con gran variedad de materiales
          de todos las marcas.
        </p>
        <div className="mb-10 w-60 border-t md:w-80"></div>
        <form className="inline-flex w-80 flex-col space-y-10 md:w-[22rem]">
          <Input name="Email" />
          <Input name="Contraseña" />
          <Link href={'/dashboard'}>
            <a>
              <Button title="Ingresar" />
            </a>
          </Link>
        </form>
      </div>
    </div>
  )
}
