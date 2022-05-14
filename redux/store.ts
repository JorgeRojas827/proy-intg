import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/AuthSlice';
import articuloReducer from './slices/ArticuloSlice';
import sectionReducer from './slices/CurrentSectionSlice'
import usuarioReducer from './slices/UsuarioSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articulo: articuloReducer,
    section: sectionReducer,
    usuario: usuarioReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch