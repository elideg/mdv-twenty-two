import { RocketsItemComponent } from './rockets/rockets-item/rockets-item.component';
import { RocketsComponent } from './rockets/rockets.component';
import { LoginComponent } from '@mdv-twenty-two/ui-lib';
import { WildComponent } from '@mdv-twenty-two/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rockets', children: [
    { path: '', component: RocketsComponent },
    { path: ':id', component: RocketsItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
