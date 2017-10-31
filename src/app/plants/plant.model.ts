export class Plant {
  public name: string;
  public scientificName: string;
  public description: string;
  public careInstructions: string;
  public imagePath: string;

  constructor(name: string, sciName: string, desc: string, care: string, imagePath: string) {
    this.name = name;
    this.scientificName = sciName;
    this.description = desc;
    this.careInstructions = care;
    this.imagePath = imagePath;
  }
}
