import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AuthSlice } from './interface'

const initialState: AuthSlice = {
  access_token: '',
  token_type: '',
  expires_in: 3600,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<AuthSlice>) => {
      return { ...state, ...action.payload }
    },
    clearAuth: (state) => {
      return {
        ...state,
        access_token: '',
        token_type: '',
      }
    },
  },
})

export const { setUserAuth, clearAuth } = authSlice.actions

export default authSlice.reducer
