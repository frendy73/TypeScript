class Clients extends Persons implements PersonnelInterface {
    private project: string;
    private contactInfo: string;
  
    constructor(fullName: string, dateOfBirth: string, address: string, project: string, contactInfo: string) {
      super(fullName, dateOfBirth, address);
      this.project = project;
      this.contactInfo = contactInfo;
      Persons.count_clients++;
    }
  
    getInfo(): string {
      return `Name: ${this.fullName}, Contact Info: ${this.contactInfo}`;
    }
  
    getStatus(): string {
      return `Project: ${this.project}`;
    }
  
    getField(): string {
      return `Address: ${this.address}`;
    }
  }