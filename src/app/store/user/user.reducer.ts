import { createReducer, on } from '@ngrx/store'
import { createUser } from './user.actions'

export const initialState = ''

export const userReducer = createReducer(
  initialState,
  on(createUser, (state, props) => props.name)
)
