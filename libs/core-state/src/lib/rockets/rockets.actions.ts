import { createAction, props } from '@ngrx/store';

import { Rocket } from '@mdv-twenty-two/core-data';

export const rocketSelected = createAction(
  '[ROCKET] Rocket Selected',
  props<{ selectedRocketId: string }>()
);

// Load Actions
export const loadRockets = createAction('[ROCKET] Load Rockets');

export const rocketsLoaded = createAction(
  '[ROCKET] Rockets Loaded',
  props<{ rockets: Rocket[] }>()
);

// Create Actions
export const createRocket = createAction(
  '[ROCKET] Create Rocket',
  props<{ rocket: Rocket }>()
);

export const rocketCreated = createAction(
  '[ROCKET] Rocket Created',
  props<{ rocket: Rocket }>()
);

// Update Actions
export const updateRocket = createAction(
  '[ROCKET] Update Rocket',
  props<{ rocket: Rocket }>()
);

export const rocketUpdated = createAction(
  '[ROCKET] Rocket Updated',
  props<{ rocket: Rocket }>()
);

// Delete Actions
export const deleteRocket = createAction(
  '[ROCKET] Delete Rocket',
  props<{ rocket: Rocket }>()
);

export const rocketDeleted = createAction(
  '[ROCKET] Rocket Deleted',
  props<{ rocket: Rocket }>()
);
