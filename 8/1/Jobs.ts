class Jobs extends Persons implements PersonnelInterface {
    private position: string;
    private department: string;
  
    constructor(fullName: string, dateOfBirth: string, address: string, position: string, department: string) {
      super(fullName, dateOfBirth, address);
      this.position = position;
      this.department = department;
    }
  
    getInfo(): string {
      return `Name: ${this.fullName}, Date of Birth: ${this.dateOfBirth}`;
    }
  
    getStatus(): string {
      return `Position: ${this.position}`;
    }
  
    getField(): string {
      return `Department: ${this.department}`;
    }
  }