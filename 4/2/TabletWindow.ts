class TabletWindow extends ApplicationWindow {
    position: string;
    size: string;
  
    constructor(title: string, width: number, hasBorder: boolean, position: string, size: string) {
      super(title, width, hasBorder);
      this.position = position;
      this.size = size;
    }
  
    displayInfo(): void {
      super.displayInfo();
      console.log(`Позиция: ${this.position}, Размер: ${this.size}`);
    }
  }