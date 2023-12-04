class Chart extends Graph {
    constructor(values: number[], title: string) {
      super(values, title);
    }
  
    draw(): void {
      console.log(`Chart: ${this.title}`);
      // Логика отрисовки кругового графика
    }
  }