import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IArticulo } from '../../interfaces/IArticulo';
import axios from 'axios';
import { IUser } from '../../interfaces/IUser';

const initialState: IUser[] = [];

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        setUsuarios(_, action: PayloadAction<IUser[]>) {
            return action.payload
        },
        addUsuario(state, action: PayloadAction<IUser>) {
            state.push(action.payload)
        }
    }
})

export const getUsuarios = createAsyncThunk('usuarios/get', async (_, thunkAPI) => {
    try {
        const res = await axios.get<IUser[]>('users');
        thunkAPI.dispatch(setUsuarios(res.data))
    } catch (err) {
        return thunkAPI.rejectWithValue('Error')
    }
})

export const addUsuarios = createAsyncThunk('usuarios/post', async (datos: IUser, thunkAPI) => {
    try {
        await axios.post('users', datos);
        thunkAPI.dispatch(addUsuarios(datos));
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})

export const deleteUsuario = createAsyncThunk('usuarios/delete', async (id: number, thunkAPI) => {
    try {
        console.log(id);
        
        await axios.delete(`users/${id}`);
        thunkAPI.dispatch(getUsuarios());
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})


export const { setUsuarios } = usuarioSlice.actions

export default usuarioSlice.reducer