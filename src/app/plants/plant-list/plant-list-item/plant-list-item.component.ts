import { Component, OnInit, Input } from '@angular/core';

import { Plant } from '../../plant.model';

@Component({
  selector: 'app-plant-list-item',
  templateUrl: './plant-list-item.component.html',
  styleUrls: ['./plant-list-item.component.css']
})
export class PlantListItemComponent implements OnInit {
  @Input() plant: Plant;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
