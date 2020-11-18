

export class Recipe {
  public id: string;
  public name: string;
   public category: string;
  public description: string;
  public imagePath: string;
  

  constructor(id:string,name: string,category:string, desc: string, imagePath: string) {
    this.id = id;
    this.name = name;
     this.category = category;
    this.description = desc;
    this.imagePath = imagePath;
   
  }
}
