class Persons {
    protected fullName: string;
    protected dateOfBirth: string;
    protected address: string;
    static count: number = 0;
    static count_clients: number = 0;
  
    constructor(fullName: string, dateOfBirth: string, address: string) {
      this.fullName = fullName;
      this.dateOfBirth = dateOfBirth;
      this.address = address;
      Persons.count++;
    }
  }  