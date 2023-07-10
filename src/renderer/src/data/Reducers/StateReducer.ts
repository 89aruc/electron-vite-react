import { ActionReducerMapBuilder, PayloadAction, createReducer } from '@reduxjs/toolkit'
import { State } from '../Objects/State'
import update from 'immutability-helper'
import { decreaseCount, increaseCount } from '../Actions/StateActions'

const defaultState: State = {
  count: 0
}

const handleIncreaseCount = (state: State, action: PayloadAction<number>) => {
  if (!action?.payload) {
    return state
  }
  return update(state, {
    count: {
      $set: state.count + action.payload
    }
  })
}
const handleDecreaseCount = (state: State, action: PayloadAction<number>) => {
  if (!action?.payload) {
    return state
  }
  return update(state, {
    count: {
      $set: state.count - action.payload
    }
  })
}
const reducer = (reducerBuilder: ActionReducerMapBuilder<State>) => {
  reducerBuilder.addCase(increaseCount.type, handleIncreaseCount)
  reducerBuilder.addCase(decreaseCount.type, handleDecreaseCount)
}

export default createReducer(defaultState, reducer)
