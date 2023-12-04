class Line {
    startPoint: Point3D;
    endPoint: Point3D;
  
    constructor(startPoint: Point3D, endPoint: Point3D) {
      this.startPoint = startPoint;
      this.endPoint = endPoint;
    }
  
    printLineInfo() {
      console.log(`Line starts at (${this.startPoint.x}, ${this.startPoint.y}, ${this.startPoint.z}) and ends at (${this.endPoint.x}, ${this.endPoint.y}, ${this.endPoint.z})`);
    }
  }
  
  let line1 = new Line(new Point3D(1, 2, 3), new Point3D(4, 5, 6));
  let line2 = new Line(new Point3D(7, 8, 9), new Point3D(10, 11, 12));
  
  line1.printLineInfo();
  line2.printLineInfo();
  