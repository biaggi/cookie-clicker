import { createAction, props } from '@ngrx/store';

export const createUser = createAction('create user', props<{name: string}>());
