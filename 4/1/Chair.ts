class Chair extends Furniture {
    numberOfLegs: number;
    legHeight: number;
    material: string;
  
    constructor(name: string, manufacturer: string, price: number, numberOfLegs: number, legHeight: number, material: string) {
      super(name, manufacturer, price);
      this.numberOfLegs = numberOfLegs;
      this.legHeight = legHeight;
      this.material = material;
    }
  
    displayInfo(): void {
      super.displayInfo();
      console.log(`Количество ножек: ${this.numberOfLegs}, Высота ножек: ${this.legHeight}, Материал: ${this.material}`);
    }
  }
  
