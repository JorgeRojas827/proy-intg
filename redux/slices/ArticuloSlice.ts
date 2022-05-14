import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IArticulo } from '../../interfaces/IArticulo';
import axios from 'axios';

const initialState: IArticulo[] = [];

export const articuloSlice = createSlice({
    name: 'articulo',
    initialState,
    reducers: {
        setArticulos(_, action: PayloadAction<IArticulo[]>) {
            return action.payload
        },
        addArticulo(state, action: PayloadAction<IArticulo>) {
            state.push(action.payload)
        }
    }
})

export const getArticulos = createAsyncThunk('articulo/get', async (_, thunkAPI) => {
    try {
        const res = await axios.get('articulos');
        thunkAPI.dispatch(setArticulos(res.data))
    } catch (err) {
        return thunkAPI.rejectWithValue('Error')
    }
})

export const addArticulo = createAsyncThunk('articulo/post', async (datos: IArticulo, thunkAPI) => {
    try {
        const res = await axios.post('articulos', datos);
        thunkAPI.dispatch(addArticulo(datos));
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})


export const { setArticulos } = articuloSlice.actions

export default articuloSlice.reducer