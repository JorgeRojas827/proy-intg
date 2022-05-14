import React from 'react'

interface IProps {
  numero: number
}

export const State = ({ numero }: IProps) => {
  const setStyle = () => {
    switch (numero) {
      case 1:
        return {
          backgroundColor: 'rgba(5, 129, 121, 0.2)',
          color: '#02958B',
        }
      case 2:
        return {
          backgroundColor: 'rgb(242, 236, 86, 0.2)',
          color: '#9D801A',
        }
      case 0:
        return {
          backgroundColor: 'rgb(255, 158, 145, 0.2)',
          color: '#C03724',
        }
    }
  }

  const estado = () => {
    switch (numero) {
      case 1:
        return 'Disponible'
      case 2:
        return 'Escaso'
      case 0:
        return 'Agotado'
    }
  }

  return (
    <div className="rounded-md py-1 px-3" style={setStyle()}>
      <p className="text-center font-medium">{estado()}</p>
    </div>
  )
}
