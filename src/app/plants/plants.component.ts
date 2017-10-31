import { Component, OnInit } from '@angular/core';

import { PlantService } from './plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
  providers: [PlantService]
})
export class PlantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
