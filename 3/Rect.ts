class Rect {
    topLeft: Point;
    width: number;
    height: number;
  
    constructor(topLeft: Point = new Point(0, 0), width: number = 0, height: number = 0) {
      this.topLeft = topLeft;
      this.width = width;
      this.height = height;
    }
  
    printDimensions() {
      console.log(`Верхний левый угол: (${this.topLeft.x}, ${this.topLeft.y}), ширина: ${this.width}, высота: ${this.height}`);
    }
  }
  
  const rect1 = new Rect(new Point(0, 0), 5, 3);
  const rect2 = new Rect(new Point(2, 2), 6, 4);
  rect1.printDimensions();
  rect2.printDimensions();
  