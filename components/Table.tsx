import React, { useEffect } from 'react'
import { useArticulos } from '../hooks/useArticulos'
import { State } from './State'
import { useAppSelector } from '../redux/hooks'
import { useState } from 'react'
import { useSection } from '../hooks/useSection'
import { useUser } from '../hooks/useUser'
import { IArticulo } from '../interfaces/IArticulo'
import { IUser } from '../interfaces/IUser'
import { firstLetterUppercase } from '../helpers/functions'
import { PencilAltIcon, XIcon } from '@heroicons/react/outline'

export const Table = () => {
  // const { obtenerArticulos, articulos } = useArticulos()
  const { obtenerUsuarios, usuarios, eliminarUsuario } = useUser()
  const { section } = useSection()
  const [fields, setFields] = useState<string[]>([])
  const [data, setData] = useState<IUser[]>([])
  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    obtenerUsuarios()
    setData(usuarios)
    // fetchData()
  }, [data.length, fields.length, section, usuarios.length])

  const mappingFields = (data: IArticulo | IUser) => {
    if (data) {
      setFields(Object.keys(data))
    }
  }

  // const fetchData = async () => {
  //   switch (section) {
  //     // case 'articulos':
  //     //   obtenerArticulos()
  //     //   setData(articulos)
  //     //   mappingFields(articulos[0])
  //     case 'usuarios':
  //       console.log('entrando usuarios')
  //       await obtenerUsuarios()
  //       await setData(usuarios)
  //       mappingFields(usuarios[0])
  //   }
  //   console.log(data)
  // }

  return (
    <table className="w-full table-auto">
      <thead className="w-full border-b border-black border-opacity-10">
        <tr className="h-14">
          {/* <th>Id</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Descripción</th>
          <th>Estado</th> */}
          <th>Id</th>
          <th>Rol</th>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Dirección</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Acciones</th>
          {/* {fields.map((e, i) => {
            return <th key={i}>{firstLetterUppercase(e)}</th>
          })} */}
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => {
          return (
            <tr
              key={i}
              className="h-14 border-b border-black border-opacity-10"
            >
              <td className="px-3">{e.idusuario}</td>
              <td className="px-10">{e.role.nombre}</td>
              {/* <td className="grid place-content-center">
                <img src="assets/lapiz.png" alt="lapiz" />
              </td> */}
              <td>{e.nombre}</td>
              <td className="px-8">{e.num_documento}</td>
              <td className="px-6">{e.direccion}</td>
              <td className="px-1">{e.telefono}</td>
              <td className="break-words px-10">{e.email}</td>
              <td className="flex h-20 w-20 space-x-4 text-[#868686]">
                <PencilAltIcon className="cursor-pointer" />
                <XIcon
                  onClick={() => eliminarUsuario(e.idusuario)}
                  className="cursor-pointer"
                />
              </td>
            </tr>
          )
        })}
        {/* <tr className="border-b border-black border-opacity-10">
          <td>1</td>
          <td className="grid place-content-center">
            <img src="assets/lapiz.png" alt="lapiz" />
          </td>
          <td>Lapiz </td>
          <td>10.00</td>
          <td>5</td>
          <td>Lapiz muy demandado de la empresa vikingo</td>
          <td>
            <State numero={1} />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td className="grid place-content-center">
            <img src="assets/lapiz.png" alt="lapiz" />
          </td>
          <td>Lapiz </td>
          <td>10.00</td>
          <td>5</td>
          <td>Lapiz muy demandado de la empresa vikingo</td>
          <td>
            <State numero={0} />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td className="grid place-content-center">
            <img src="assets/lapiz.png" alt="lapiz" />
          </td>
          <td>Lapiz </td>
          <td>10.00</td>
          <td>5</td>
          <td>Lapiz muy demandado de la empresa vikingo</td>
          <td>
            <State numero={2} />
          </td>
        </tr> */}
      </tbody>
    </table>
  )
}
