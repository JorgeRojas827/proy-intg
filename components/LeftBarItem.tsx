import React from 'react'
import Link from 'next/link'
import { useAppDispatch } from '../redux/hooks'
import { setSection } from '../redux/slices/CurrentSectionSlice'
import { useSection } from '../hooks/useSection'

interface IProps {
  text: string
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  extraClass?: string
}

export const LeftBarItem = ({ Icon, text, extraClass }: IProps) => {
  const { setCurrentSection, section } = useSection()

  return (
    <div
      onClick={() => setCurrentSection(text)}
      className={`flex cursor-pointer items-center space-x-3 rounded-lg py-2 pl-3 pr-12 font-montserrat text-leftbar-inactive ${extraClass}`}
      style={
        section === text.toLowerCase()
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
  )
}
