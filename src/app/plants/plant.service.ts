import { Plant } from './plant.model';

export class PlantService {
  private plants: Plant[] = [
    new Plant(
      'Snake Plant',
      'Sansevieria',
      'Easy care plant with long stalk-like leaves, great air purifier',
      'Minimal sun, soil on the dry side, plant food once per month',
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sansevieria_in_pot.jpg'
    ),
    new Plant(
      'Yucca',
      'Yucca',
      'Long leaves, often on canes or stalks',
      'Sunny to partly shady, well-drained soil, water on dry side',
      'http://www.publicdomainpictures.net/pictures/10000/nahled/1-1267710986HENj.jpg'
    ),
    new Plant(
      'Jelly Bean Plant',
      'Sedum rubrotinctum',
      'Short leaves that resemble jelly beans, Succulent',
      'Needs well-drained soil',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Sedum_rubrotinctum.jpg'
    ),
    new Plant(
      'Snake Plant',
      'Sansevieria',
      'Easy care plant with long stalk-like leaves, great air purifier',
      'Minimal sun, soil on the dry side, plant food once per month',
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sansevieria_in_pot.jpg'
    ),
    new Plant(
      'Snake Plant',
      'Sansevieria',
      'Easy care plant with long stalk-like leaves, great air purifier',
      'Minimal sun, soil on the dry side, plant food once per month',
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sansevieria_in_pot.jpg'
    ),
  ];

  getPlants() {
    return this.plants.slice();
  }

  getPlantById(id: number) {
    return this.plants[id];
  }

}
