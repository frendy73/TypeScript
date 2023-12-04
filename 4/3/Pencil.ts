class Pencil extends Stationery {
    hardness: string;
  
    constructor(price: number, stockNumber: string, identifier: string, hardness: string) {
      super(price, stockNumber, identifier);
      this.hardness = hardness;
    }
  
    displayPencil(): void {
      this.displayInfo();
      console.log(`Твердость: ${this.hardness}`);
    }
  }