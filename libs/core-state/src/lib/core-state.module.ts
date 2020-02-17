import { RocketsEffects } from './rockets/rockets.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';


import { CoreDataModule } from '@mdv-twenty-two/core-data';
import { reducers } from '.';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      RocketsEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'mdv-twenty-two Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
