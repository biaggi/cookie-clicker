import { ActionReducerMap } from '@ngrx/store'
import { userReducer } from './user/user.reducer'

export interface AppState {
  user: string
}

export const initialState: AppState = {
  user: ''
}

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer
}
