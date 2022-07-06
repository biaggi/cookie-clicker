import { createAction, props } from '@ngrx/store'

export const produceResource = createAction(
  'produce resource',
  props<{ quantity: number }>()
)
