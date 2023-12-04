class ApplicationWindow {
    title: string;
    width: number;
    hasBorder: boolean;
  
    constructor(title: string, width: number, hasBorder: boolean) {
      this.title = title;
      this.width = width;
      this.hasBorder = hasBorder;
    }
  
    displayInfo(): void {
      console.log(`Заголовок: ${this.title}, Ширина: ${this.width}, Наличие рамки: ${this.hasBorder}`);
    }
  }
  
  
  