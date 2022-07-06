import { createReducer, on } from '@ngrx/store'
import * as actions from './resources.actions'

export interface ResourceState {
  quantity: number
  resources: Array<{ index: number; quantity: number }>
}

export const initialState = {
  quantity: 0,
  resources: [{ index: 0, quantity: 1 }]
}

export const resourceReducer = createReducer(
  initialState,
  on(actions.produceResource, (state, props) => ({
    ...state,
    quantity: state.quantity + props.quantity
  }))
)
