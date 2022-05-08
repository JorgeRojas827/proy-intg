import React from 'react'
import Link from 'next/link'

interface IProps {
  text: string
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  href: string
  extraClass?: string
  active?: boolean
}

export const LeftBarItem = ({
  Icon,
  text,
  extraClass,
  active,
  href,
}: IProps) => {
  return (
    <Link href={href}>
      <div
        className={`flex cursor-pointer items-center space-x-3 rounded-lg py-2 pl-3 pr-12 font-montserrat text-leftbar-inactive ${extraClass}`}
        style={
          active
            ? {
                backgroundColor: 'rgba(5, 129, 121, 0.2)',
                color: '#02958B',
              }
            : {
                backgroundColor: '#fff',
                color: '#929292',
              }
        }
      >
        <Icon className="h-6 w-6" />
        <h6 className="font-semibold ">{text}</h6>
      </div>
    </Link>
  )
}
