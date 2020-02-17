import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromRockets from './rockets.reducer';
import * as rocketsActions from './rockets.actions';
import * as rocketsSelectors from './rockets.selectors';
import { Rocket } from '@mdv-twenty-two/core-data';

@Injectable({
  providedIn: 'root'
})
export class RocketsFacade {
  allRockets$ = this.store.pipe(select(rocketsSelectors.selectAllRockets));
  selectedRocket$ = this.store.pipe(select(rocketsSelectors.selectRocket));
  rocketLoading$ = this.store.pipe(select(rocketsSelectors.selectRocketsLoading));

  constructor(private store: Store<fromRockets.RocketsPartialState>) {}

  selectRocket(selectedRocketId: string) {
    this.dispatch(rocketsActions.rocketSelected({ selectedRocketId }));
  }

  loadRockets() {
    this.dispatch(rocketsActions.loadRockets());
  }

  createRocket(rocket: Rocket) {
    this.dispatch(rocketsActions.createRocket({ rocket }));
  }

  updateRocket(rocket: Rocket) {
    this.dispatch(rocketsActions.updateRocket({ rocket }));
  }

  deleteRocket(rocket: Rocket) {
    this.dispatch(rocketsActions.deleteRocket({ rocket }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
