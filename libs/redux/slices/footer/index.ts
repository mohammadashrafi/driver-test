import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  selected: false,
}

export const footerSlice = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {
    activeFooter: (state, action: PayloadAction<boolean>) => {
      return { ...state, selected: action.payload }
    },
  },
})

export const { activeFooter } = footerSlice.actions

export default footerSlice.reducer
