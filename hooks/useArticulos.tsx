import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { addArticulo, getArticulos } from '../redux/slices/ArticuloSlice'
import { IArticulo } from '../interfaces/IArticulo'

export const useArticulos = () => {
  const articulos = useAppSelector((state) => state.articulo)
  const dispatch = useAppDispatch()

  const añadirArticulo = (articulo: IArticulo) => {
    dispatch(addArticulo(articulo))
  }

  const obtenerArticulos = () => {
    dispatch(getArticulos())
  }

  return {
    articulos,
    añadirArticulo,
    obtenerArticulos,
  }
}
