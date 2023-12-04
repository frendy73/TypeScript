class DesktopWindow extends ApplicationWindow {
    position: string;
    size: string;
    resizable: boolean;
  
    constructor(title: string, width: number, hasBorder: boolean, position: string, size: string, resizable: boolean) {
      super(title, width, hasBorder);
      this.position = position;
      this.size = size;
      this.resizable = resizable;
    }
  
    displayInfo(): void {
      super.displayInfo();
      console.log(`Позиция: ${this.position}, Размер: ${this.size}, Возможность изменения размера: ${this.resizable}`);
    }
  }