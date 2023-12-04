class Ellipse extends Geometry {
    centerX: number;
    centerY: number;
    radiusX: number;
    radiusY: number;
  
    constructor(width: number, color: string, centerX: number, centerY: number, radiusX: number, radiusY: number) {
      super(width, color);
      this.centerX = centerX;
      this.centerY = centerY;
      this.radiusX = radiusX;
      this.radiusY = radiusY;
    }
  
    draw(): void {
      console.log(`Drawing Ellipse: Center (${this.centerX}, ${this.centerY}), RadiusX: ${this.radiusX}, RadiusY: ${this.radiusY}, Width: ${this.width}, Color: ${this.color}`);
    }
  }