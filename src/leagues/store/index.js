import { configureStore } from '@reduxjs/toolkit'

import  bettingReducer  from '../betting/bettingSlice'

export const store = configureStore({
  reducer: {
    betting: bettingReducer,
  },
})