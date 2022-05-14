import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IUserLogin } from '../interfaces/IUser'
import { firstLetterUppercase } from '../helpers/functions'

interface IProps {
  name: 'email' | 'password'
  register: UseFormRegister<IUserLogin>
  type: string
}

export const Input = ({ name, register, type }: IProps) => {
  return (
    <input
      {...register(name)}
      className="rounded-md py-2 px-5 outline-none drop-shadow-input placeholder:opacity-70"
      type={type}
      placeholder={firstLetterUppercase(name)}
    />
  )
}
