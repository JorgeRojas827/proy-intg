import React from 'react'
import {
  DocumentTextIcon,
  LogoutIcon,
  PencilIcon,
  TagIcon,
  UserIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { LeftBarItem } from '../components/LeftBarItem'
import { UserCircleIcon } from '@heroicons/react/outline'

export const LeftBar = () => {
  return (
    <div className="relative flex h-full w-2/12 flex-col items-center py-8">
      <figure className="mb-5">
        <img src="assets/logo.png" className="scale-75" alt="logo" />
      </figure>
      <div className="mb-5 w-full border-t border-[#D8D8D8]"></div>
      <div className="flex flex-col justify-between space-y-5">
        <LeftBarItem href="/cuenta" Icon={UserCircleIcon} text="Cuenta" />
        <LeftBarItem href="/dashboard" Icon={ViewGridIcon} text="Dashboard" />
        <LeftBarItem
          href="/articulos"
          active
          Icon={PencilIcon}
          text="Articulos"
        />
        <LeftBarItem href="/ventas" Icon={DocumentTextIcon} text="Ventas" />
        <LeftBarItem href="/categorias" Icon={TagIcon} text="Categorias" />
      </div>
      <div className="absolute bottom-10 mx-auto">
        <LeftBarItem href="/" Icon={LogoutIcon} text="Cerrar Sesión" />
      </div>
    </div>
  )
}
