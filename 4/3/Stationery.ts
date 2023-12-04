class Stationery {
    price: number;
    stockNumber: string;
    identifier: string;
  
    constructor(price: number, stockNumber: string, identifier: string) {
      this.price = price;
      this.stockNumber = stockNumber;
      this.identifier = identifier;
    }
  
    displayInfo(): void {
      console.log(`Цена: ${this.price}, Номер на складе: ${this.stockNumber}, Идентификатор: ${this.identifier}`);
    }
  }