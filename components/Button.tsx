import React, { Fragment } from 'react'

interface IProps {
  title: string
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}

export const Button = ({ title, Icon }: IProps) => {
  return (
    <Fragment>
      <a className="flex cursor-pointer items-center justify-center space-x-3 rounded-md bg-teal-600 px-4 py-3 text-white">
        {Icon && <Icon className="h-6 w-6" />}
        <p>{title}</p>
      </a>
    </Fragment>
  )
}
