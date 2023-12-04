class Nota {
    identifier: string;
    name: string;
    duration: number;
    trebleClef: string;
    bassClef: string;
  
    constructor(identifier: string, name: string, duration: number, trebleClef: string, bassClef: string) {
      this.identifier = identifier;
      this.name = name;
      this.duration = duration;
      this.trebleClef = trebleClef;
      this.bassClef = bassClef;
    }
  
    displayInfo(): void {
      console.log(`Nota: ${this.name}, Duration: ${this.duration}, Treble Clef: ${this.trebleClef}, Bass Clef: ${this.bassClef}`);
    }
  }