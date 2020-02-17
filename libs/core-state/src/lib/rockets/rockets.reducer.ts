import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as rocketsActions from './rockets.actions';
import { Rocket } from '@mdv-twenty-two/core-data';

export const ROCKETS_FEATURE_KEY = 'rockets';

export interface RocketsState extends EntityState<Rocket> {
  selectedRocketId?: string | number;
  isLoading: boolean;
}

export interface RocketsPartialState {
  readonly [ROCKETS_FEATURE_KEY]: RocketsState;
}

export const rocketsAdapter: EntityAdapter<Rocket> = createEntityAdapter<Rocket>();

export const initialState: RocketsState = rocketsAdapter.getInitialState({
  // set initial required properties
  selectedRocketId: null,
  isLoading: false
});

const rocketsReducer = createReducer(
  initialState,
  on(rocketsActions.rocketSelected, (state, { selectedRocketId }) =>
    Object.assign({}, state, { selectedRocketId })
  ),
  on(rocketsActions.rocketsLoaded, (state, { rockets }) =>
    rocketsAdapter.addAll(rockets, { ...state, isLoading: false })
  ),
  on(rocketsActions.rocketCreated, (state, { rocket }) =>
    rocketsAdapter.addOne(rocket, { ...state, isLoading: false })
  ),
  on(rocketsActions.rocketUpdated, (state, { rocket }) =>
    rocketsAdapter.upsertOne(rocket, { ...state, isLoading: false })
  ),
  on(rocketsActions.rocketDeleted, (state, { rocket }) =>
    rocketsAdapter.removeOne(rocket.id, { ...state, isLoading: false })
  ),
  on(
    rocketsActions.loadRockets,
    rocketsActions.createRocket,
    rocketsActions.updateRocket,
    rocketsActions.deleteRocket,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: RocketsState | undefined, action: Action) {
  return rocketsReducer(state, action);
}
