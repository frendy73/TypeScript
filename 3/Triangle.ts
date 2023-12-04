class Point {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Triangle {
    a: Point;
    b: Point;
    c: Point;
  
    constructor(a: Point, b: Point, c: Point) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    printVertices() {
      console.log(`Вершина A: (${this.a.x}, ${this.a.y})`);
      console.log(`Вершина B: (${this.b.x}, ${this.b.y})`);
      console.log(`Вершина C: (${this.c.x}, ${this.c.y})`);
    }
  }
  
  const triangle = new Triangle(
    new Point(0, 0),
    new Point(4, 0),
    new Point(2, 3)
  );
  triangle.printVertices();
  