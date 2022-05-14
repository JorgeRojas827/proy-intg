import { createSlice, SerializedError, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import qs from 'qs';
import { IUser } from '../../interfaces/IUser';
import { setAuthToken } from '../../resources/api';

export enum AuthStates {
  IDLE = 'idle',
  LOADING = 'loading',
}

export interface AuthSliceState {
  accessToken: string
  loading: AuthStates
  user: IUser | null;
  error: SerializedError | null
}

const internalInitialState: AuthSliceState = {
  accessToken: '',
  loading: AuthStates.IDLE,
  user: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: internalInitialState,
  reducers: {
    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
    reset: () => internalInitialState,
  },
})

export const { updateAccessToken, reset, setUser } = authSlice.actions

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, thunkAPI) => {
      try {
        const response = await axios.post<{ access_token: string }>('http://localhost:9000/api/login', qs.stringify(credentials))
        thunkAPI.dispatch(updateAccessToken(response.data.access_token))
        setAuthToken(response.data.access_token)
        const refetch = await axios.get<IUser>('users/5')
        thunkAPI.dispatch(setUser(refetch.data))
      } catch (error) {
        return thunkAPI.rejectWithValue('Error')
      }
    }
  )

  
export default authSlice.reducer