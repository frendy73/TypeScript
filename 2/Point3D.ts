class Point3D {
    x: number;
    y: number;
    z: number;
  
    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    // Метод для вывода координат точки в консоль
    printCoordinates() {
      console.log(`Point coordinates: x=${this.x}, y=${this.y}, z=${this.z}`);
    }
  }
  
  // Создание трех объектов класса Point3D с разными координатами
  let point1 = new Point3D(1, 2, 3);
  let point2 = new Point3D(4, 5, 6);
  let point3 = new Point3D(7, 8, 9);
  
  // Вывод координат точек в консоль
  point1.printCoordinates();
  point2.printCoordinates();
  point3.printCoordinates();
  