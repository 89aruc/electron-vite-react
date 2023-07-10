import { configureStore } from '@reduxjs/toolkit'
import StateReducer from '../Reducers/StateReducer'

export const store = configureStore({
  reducer: StateReducer
})
