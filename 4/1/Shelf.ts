class Shelf extends Furniture {
    numberOfSections: number;
    sectionSize: string;
  
    constructor(name: string, manufacturer: string, price: number, numberOfSections: number, sectionSize: string) {
      super(name, manufacturer, price);
      this.numberOfSections = numberOfSections;
      this.sectionSize = sectionSize;
    }
  
    displayInfo(): void {
      super.displayInfo();
      console.log(`Количество секций: ${this.numberOfSections}, Размер секции: ${this.sectionSize}`);
    }
  }