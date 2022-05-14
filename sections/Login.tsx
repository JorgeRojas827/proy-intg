import React, { useEffect } from 'react'
import { Input } from '../components/Input'
import { useUser } from '../hooks/useUser'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserLogin } from '../interfaces/IUser'
import { useRouter } from 'next/router'

export const Login = () => {
  const { register, handleSubmit } = useForm<IUserLogin>()
  const { loginUser, error, auth } = useUser()
  const router = useRouter()

  const onSubmit: SubmitHandler<IUserLogin> = ({ email, password }) => {
    loginUser(email, password)
  }

  useEffect(() => {
    auth.user !== null && router.push('http://localhost:3000/dashboard')
  }, [])

  return (
    <div className="relative grid h-screen w-screen place-content-center bg-gradient-to-r from-teal-700 to-teal-500  md:to-teal-300">
      <div className="flex h-[36rem] w-[28rem] flex-col items-center rounded-lg bg-white px-10 py-16 shadow-xl md:w-[46rem] md:px-36">
        <figure>
          <img src="assets/logo.png" alt="logo" />
        </figure>
        <p className="mt-10 mb-5 text-center text-sm font-medium text-[#868686]">
          Somos una tienda de útiles escolares con gran variedad de materiales
          de todos las marcas.
        </p>
        <div className="mb-10 w-60 border-t md:w-80"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="inline-flex w-80 flex-col space-y-10 md:w-[22rem]"
        >
          <Input type="text" register={register} name="email" />
          <Input type="password" register={register} name="password" />
          <input
            type="submit"
            value="Ingresar"
            className="flex cursor-pointer items-center justify-center space-x-3 rounded-md bg-teal-600 px-4 py-3 text-white"
          />
        </form>
        {error.length >= 1 && (
          <p className="mt-5 rounded-lg bg-red-100 px-4  py-2 text-red-600 ">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
