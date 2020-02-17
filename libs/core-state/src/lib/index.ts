import { ActionReducerMap } from '@ngrx/store';

import * as fromRockets from './rockets/rockets.reducer';

export interface AppState {
  rockets: fromRockets.RocketsState;
}

export const reducers: ActionReducerMap<AppState> = {
  rockets: fromRockets.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
