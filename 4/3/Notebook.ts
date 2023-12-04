class Notebook extends Stationery {
    numberOfPages: number;
  
    constructor(price: number, stockNumber: string, identifier: string, numberOfPages: number) {
      super(price, stockNumber, identifier);
      this.numberOfPages = numberOfPages;
    }
  
    displayNotebook(): void {
      this.displayInfo();
      console.log(`Количество страниц: ${this.numberOfPages}`);
    }
  }