import { ActionReducerMap } from '@ngrx/store'
import { userReducer } from './user/user.reducer'
import * as resourcesReducer from './resources/resources.reducer'

export interface AppState {
  user: string
  resources: resourcesReducer.ResourceState
}

export const initialState: AppState = {
  user: '',
  resources: resourcesReducer.initialState
}

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer,
  resources: resourcesReducer.resourceReducer
}
