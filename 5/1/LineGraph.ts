class LineGraph extends Graph {
    constructor(values: number[], title: string) {
      super(values, title);
    }
  
    draw(): void {
      console.log(`LineGraph: ${this.title}`);
      // Логика отрисовки линейного графика
    }
  }