import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { RocketsDetailsComponent } from './rockets/rockets-details/rockets-details.component';
import { RocketsListComponent } from './rockets/rockets-list/rockets-list.component';
import { RocketsItemComponent } from './rockets/rockets-item/rockets-item.component';
import { RocketsComponent } from './rockets/rockets.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty-two/core-data';
import { MaterialModule } from '@mdv-twenty-two/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, RocketsComponent, RocketsItemComponent, RocketsListComponent, RocketsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
