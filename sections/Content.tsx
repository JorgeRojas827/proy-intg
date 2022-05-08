import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { Button } from '../components/Button'
import { Table } from '../components/Table'

export const Content = () => {
  return (
    <div className=" grid w-10/12 place-content-center rounded-2xl bg-[#F7F7F7] font-montserrat">
      <div className="relative flex h-[660px] w-[1124px] flex-col rounded-2xl border border-[#D8D8D8] bg-white">
        <div className="flex items-center justify-between px-12 py-5">
          <h1 className="text-3xl font-semibold">Artículos</h1>
          <Button Icon={PlusIcon} title="Añadir articulo" />
        </div>
        <div className="mb-5 w-full border-t border-[#D8D8D8]"></div>
        <Table />
        <div className="absolute bottom-0 flex w-full items-center border-t border-[#D8D8D8] py-2 pl-10 text-sm font-medium text-[#929292]">
          <p>5 Artículos</p>
        </div>
      </div>
    </div>
  )
}
