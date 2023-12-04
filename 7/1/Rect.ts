class Rect extends Geometry {
    x: number;
    y: number;
    height: number;
  
    constructor(width: number, height: number, color: string, x: number, y: number) {
      super(width, color);
      this.x = x;
      this.y = y;
      this.height = height;
    }
  
    draw(): void {
      console.log(`Drawing Rectangle: Position (${this.x}, ${this.y}), Width: ${this.width}, Height: ${this.height}, Color: ${this.color}`);
    }
  }