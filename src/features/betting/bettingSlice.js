import { createSlice } from '@reduxjs/toolkit'
import BetItem from '../../models/bet-item'

const initialState = {
  betList: [],
  amount: '',
  gameList: [],
  betValue: '',
  totalValue: '',
  items: {}
}

export const bettingSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.gameList.push(action.payload)
    },
    addBet: (state, action) => {

      

      // console.log("addBet: ", action.payload)
      // const addedBet = action.payload
      // const betPrice = addedBet.value
      // const odd = addedBet.odd
      // const type = addedBet.type
      // const team1 = addedBet.team1
      // const team2 = addedBet.team2


      // let updateOrNewBet

      // if (state.items[addedBet.id]) {
      //   updateOrNewBet = new BetItem(
      //     betPrice,
      //     odd,
      //     type,
      //     team1,
      //     team2,
      //     state.items[addedBet.id].sum + betPrice,
      //   )
      // } else {
      //   updateOrNewBet = new BetItem(
      //     betPrice,
      //     odd,
      //     type,
      //     team1,
      //     team2
      //   )
      // }

      // state.items = { ...state.items, [addedBet.id]: updateOrNewBet } 
      // state.totalValue = state.totalValue + betPrice
    },
    removeGame: (state, action) => {
      const filtered = state.gameList.filter((game) => game.betId !== action.payload)
      state.gameList = filtered;
    },
    removeBet: (state, action) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { addGame, addBet, removeGame, removeBet } = bettingSlice.actions

export default bettingSlice.reducer