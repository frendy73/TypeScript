class Furniture {
    name: string;
    manufacturer: string;
    price: number;
  
    constructor(name: string, manufacturer: string, price: number) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.price = price;
    }
  
    displayInfo(): void {
      console.log(`Название: ${this.name}, Производитель: ${this.manufacturer}, Цена: ${this.price}`);
    }
  }
  