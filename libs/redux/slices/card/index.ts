import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { CardState } from './interface'

// update the selected data with proper type later

const initialState: CardState = {
  selected: [],
}

export const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    selectCard: (state, action: PayloadAction<string>) => {
      const selectedCards = [...state.selected]
      if (selectedCards.includes(action.payload)) {
        return {
          selected: selectedCards.filter((item) => item !== action.payload),
        }
      }
      return { selected: [...state.selected, action.payload] }
    },
    selectAllCards: (_, action: PayloadAction<string[]>) => ({
      selected: [...action.payload],
    }),
    deSelectCards: (state) => ({ ...state, selected: [] }),
  },
})

export const { selectCard, deSelectCards, selectAllCards } = cardSlice.actions

export default cardSlice.reducer
