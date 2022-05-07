import React from 'react'

interface IProps {
  title: string
}

export const Button = ({ title }: IProps) => {
  return (
    <div className="grid cursor-pointer place-content-center rounded-md bg-teal-600 px-2 py-3 text-white">
      {title}
    </div>
  )
}
