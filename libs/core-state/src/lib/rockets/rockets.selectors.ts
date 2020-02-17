import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  ROCKETS_FEATURE_KEY,
  rocketsAdapter,
  RocketsPartialState,
  RocketsState
} from './rockets.reducer';

// Lookup the 'Rockets' feature state managed by NgRx
export const selectRocketsState = createFeatureSelector<
  RocketsPartialState,
  RocketsState
>(ROCKETS_FEATURE_KEY);

const { selectAll, selectEntities } = rocketsAdapter.getSelectors();

export const selectRocketsLoading = createSelector(
  selectRocketsState,
  (state: RocketsState) => state.isLoading
);

export const selectAllRockets = createSelector(
  selectRocketsState,
  (state: RocketsState) => selectAll(state)
);

export const selectRocketsEntities = createSelector(
  selectRocketsState,
  (state: RocketsState) => selectEntities(state)
);

export const selectRocketId = createSelector(
  selectRocketsState,
  (state: RocketsState) => state.selectedRocketId
);

export const selectRocket = createSelector(
  selectRocketsEntities,
  selectRocketId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
