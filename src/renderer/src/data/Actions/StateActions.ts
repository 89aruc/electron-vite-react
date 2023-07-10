import { createAction } from '@reduxjs/toolkit'

export const increaseCount = createAction<number>('INCREASE')
export const decreaseCount = createAction<number>('DECREASE')
