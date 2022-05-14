import React from 'react'
import {
  DocumentTextIcon,
  LogoutIcon,
  PencilIcon,
  TagIcon,
  UserGroupIcon,
  UserIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { LeftBarItem } from '../components/LeftBarItem'

export const LeftBar = () => {
  return (
    <div className="relative flex h-full w-2/12 flex-col items-center py-8">
      <figure className="mb-5">
        <img src="assets/logo.png" className="scale-75" alt="logo" />
      </figure>
      <div className="mb-5 w-full border-t border-[#D8D8D8]"></div>
      <div className="flex flex-col justify-between space-y-5">
        <LeftBarItem Icon={UserGroupIcon} text="Usuarios" />
        <LeftBarItem Icon={PencilIcon} text="Articulos" />
        <LeftBarItem Icon={DocumentTextIcon} text="Ventas" />
        <LeftBarItem Icon={TagIcon} text="Categorias" />
      </div>
      <div className="absolute bottom-10 mx-auto">
        <div className="flex cursor-pointer items-center space-x-3 rounded-lg py-2 font-montserrat text-leftbar-inactive">
          <LogoutIcon className="h-6 w-6" />
          <h6 className="font-semibold ">Cerrar Sesión</h6>
        </div>
      </div>
    </div>
  )
}
