import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { PlantStartComponent } from './plants/plant-start/plant-start.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/myplants', pathMatch: 'full'},
  { path: 'myplants', component: PlantsComponent, children: [
    { path: '', component: PlantStartComponent },
    { path: ':id', component: PlantDetailComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
