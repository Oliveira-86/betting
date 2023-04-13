import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  betList: [],
  amount: '',
  gameList: []
}

export const bettingSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.gameList.push(action.payload)
    },
    addBet: (state, action) => {
      state.betList.push(action.payload)
    },
    removeGame: (state, action) => {
     
    },
    removeBet: (state, action) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { addGame, addBet, removeGame, removeBet } = bettingSlice.actions

export default bettingSlice.reducer