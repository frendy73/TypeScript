abstract class Geometry {
    width: number;
    color: string;
  
    constructor(width: number, color: string) {
      this.width = width;
      this.color = color;
    }
  
    // Абстрактный метод draw
    abstract draw(): void;
  }