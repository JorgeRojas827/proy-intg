import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login } from '../redux/slices/AuthSlice'
import { setSection } from '../redux/slices/CurrentSectionSlice'
import { deleteUsuario, getUsuarios } from '../redux/slices/UsuarioSlice'

export const useUser = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [error, setError] = useState('')
  const auth = useAppSelector((state) => state.auth)
  const usuarios = useAppSelector((state) => state.usuario)

  const loginUser = async (email: string, password: string) => {
    const { meta } = await dispatch(login({ email, password }))
    if (meta.requestStatus == 'fulfilled') {
      dispatch(setSection('usuarios'))
      router.push('http://localhost:3000/dashboard')
      setError('')
    } else if (meta.requestStatus == 'rejected') {
      setError('Email o password incorrectos')
    }
  }

  const obtenerUsuarios = () => {
    dispatch(getUsuarios())
  }

  const eliminarUsuario = (id: number) => {
    dispatch(deleteUsuario(id))
  }

  return {
    loginUser,
    obtenerUsuarios,
    eliminarUsuario,
    usuarios,
    auth,
    error,
  }
}
