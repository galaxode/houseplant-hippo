import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantListComponent } from './plants/plant-list/plant-list.component';
import { PlantListItemComponent } from './plants/plant-list/plant-list-item/plant-list-item.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantStartComponent } from './plants/plant-start/plant-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlantsComponent,
    PlantListComponent,
    PlantListItemComponent,
    PlantDetailComponent,
    PlantStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
