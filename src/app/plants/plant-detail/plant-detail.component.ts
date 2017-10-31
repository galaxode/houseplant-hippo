import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant;
  id: number;

  constructor(private plantService: PlantService, private route: ActivatedRoute) { }

  ngOnInit() {
    // For now retrieve the first item in the list until I set up routes
    // this.plant = this.plantService.getPlantById(0);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.plant = this.plantService.getPlantById(this.id);
      })
  }

}
