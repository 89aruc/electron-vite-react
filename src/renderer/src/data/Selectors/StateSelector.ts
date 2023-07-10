import { createSelector } from '@reduxjs/toolkit'
import { State } from '../Objects/State'

const getState = (state: State) => {
  return state
}

const getCount = (state: State) => {
  return state?.count
}

export const getCurrentCount = createSelector<[(state: State) => State], number>(getState, getCount)
