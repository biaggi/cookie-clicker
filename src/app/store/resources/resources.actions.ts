import { createAction, props } from '@ngrx/store'

export const produceResource = createAction(
  'produce resource',
  props<{ quantity: number }>()
)

export const consumeResource = createAction(
  'consume resource',
  props<{ quantity: number }>()
)
