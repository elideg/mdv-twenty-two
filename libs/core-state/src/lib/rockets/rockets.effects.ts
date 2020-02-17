import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as rocketsActions from './rockets.actions';
import { Rocket, RocketsService, NotifyService } from '@mdv-twenty-two/core-data';
import { RocketsPartialState } from './rockets.reducer';

@Injectable()
export class RocketsEffects {
  loadRockets$ = createEffect(() =>
    this.dataPersistence.fetch(rocketsActions.loadRockets, {
      run: (
        action: ReturnType<typeof rocketsActions.loadRockets>,
        state: RocketsPartialState
      ) => {
        return this.rocketsService.all().pipe(
          map((rockets: Rocket[]) => rocketsActions.rocketsLoaded({ rockets }))
        );
      },
      onError: (action: ReturnType<typeof rocketsActions.loadRockets>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addRocket$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(rocketsActions.createRocket, {
      run: (
        action: ReturnType<typeof rocketsActions.createRocket>,
        state: RocketsPartialState
      ) => {
        return this.rocketsService.create(action.rocket).pipe(
          map((rocket: Rocket) => rocketsActions.rocketCreated({ rocket })),
          tap(() => this.notify.notify('Successfully Added A Rocket'))
        );
      },
      onError: (action: ReturnType<typeof rocketsActions.createRocket>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateRocket$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(rocketsActions.updateRocket, {
      run: (
        action: ReturnType<typeof rocketsActions.updateRocket>,
        state: RocketsPartialState
      ) => {
        return of(action.rocket).pipe(
          map((rocket: Rocket) => rocketsActions.rocketUpdated({ rocket })),
          tap(() => this.notify.notify('Successfully Updated A Rocket'))
        );
      },
      onError: (action: ReturnType<typeof rocketsActions.updateRocket>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteRocket$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(rocketsActions.deleteRocket, {
      run: (
        action: ReturnType<typeof rocketsActions.deleteRocket>,
        state: RocketsPartialState
      ) => {
        return of(action.rocket).pipe(
          map((rocket: Rocket) => rocketsActions.rocketDeleted({ rocket })),
          tap(() => this.notify.notify('Successfully Deleted A Rocket'))
        );
      },
      onError: (action: ReturnType<typeof rocketsActions.deleteRocket>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RocketsPartialState>,
    private rocketsService: RocketsService,
    private notify: NotifyService
  ) {}
}
