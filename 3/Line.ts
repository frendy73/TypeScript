class Line {
    a: Point;
    b: Point;
  
    constructor(a: Point, b: Point) {
      this.a = a;
      this.b = b;
    }
  
    intersects(line: Line): boolean {
      return !(this.a === line.a || this.a === line.b || this.b === line.a || this.b === line.b);
    }
  }
  
  // Point from Triangle.ts
  const line1 = new Line(new Point(0, 0), new Point(1, 1));
  const line2 = new Line(new Point(1, 0), new Point(0, 1));
  console.log(`Линии пересекаются: ${line1.intersects(line2)}`);
  