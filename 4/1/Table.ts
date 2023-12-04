class Table extends Furniture {
    numberOfLegs: number;
    tableTopArea: string;
  
    constructor(name: string, manufacturer: string, price: number, numberOfLegs: number, tableTopArea: string) {
      super(name, manufacturer, price);
      this.numberOfLegs = numberOfLegs;
      this.tableTopArea = tableTopArea;
    }
  
    displayInfo(): void {
      super.displayInfo();
      console.log(`Количество ножек: ${this.numberOfLegs}, Площадь столешницы: ${this.tableTopArea}`);
    }
  }