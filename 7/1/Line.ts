class Line extends Geometry {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  
    constructor(width: number, color: string, startX: number, startY: number, endX: number, endY: number) {
      super(width, color);
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
    }
  
    draw(): void {
      console.log(`Drawing Line: Start (${this.startX}, ${this.startY}), End (${this.endX}, ${this.endY}), Width: ${this.width}, Color: ${this.color}`);
    }
  }