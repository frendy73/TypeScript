abstract class Graph {
    values: number[];
    title: string;
  
    constructor(values: number[], title: string) {
      this.values = values;
      this.title = title;
    }
  
    abstract draw(): void;
  }