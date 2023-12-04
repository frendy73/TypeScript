class Bed extends Furniture {
    numberOfLegs: number;
    legHeight: number;
    size: string;
  
    constructor(name: string, manufacturer: string, price: number, numberOfLegs: number, legHeight: number, size: string) {
      super(name, manufacturer, price);
      this.numberOfLegs = numberOfLegs;
      this.legHeight = legHeight;
      this.size = size;
    }
  
    displayInfo(): void {
      super.displayInfo();
      console.log(`Количество ножек: ${this.numberOfLegs}, Высота ножек: ${this.legHeight}, Размер: ${this.size}`);
    }
  }