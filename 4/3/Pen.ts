class Pen extends Stationery {
    inkColor: string;
  
    constructor(price: number, stockNumber: string, identifier: string, inkColor: string) {
      super(price, stockNumber, identifier);
      this.inkColor = inkColor;
    }
  
    displayPen(): void {
      this.displayInfo();
      console.log(`Цвет чернил: ${this.inkColor}`);
    }
  }
  