class Supervisors implements PersonnelInterface {
    private name: string;
    private position: string;
    private dateOfBirth: string;
    private department: string;
  
    constructor(name: string, position: string, dateOfBirth: string, department: string) {
      this.name = name;
      this.position = position;
      this.dateOfBirth = dateOfBirth;
      this.department = department;
    }
  
    getInfo(): string {
      return `Name: ${this.name}, Date of Birth: ${this.dateOfBirth}`;
    }
  
    getStatus(): string {
      return `Position: ${this.position}`;
    }
  
    getField(): string {
      return `Department: ${this.department}`;
    }
  }