class SuperUser extends User {
    private static count: number = 0;
    private _role: string;
  
    constructor(name: string, login: string, password: string, role: string) {
      super(name, login, password);
      this._role = role;
      SuperUser.count++;
    }
  
    get role(): string {
      return this._role;
    }
  
    set role(value: string) {
      this._role = value;
    }
  
    public static getSuperUserCount(): number {
      return SuperUser.count;
    }
  
    public showInfo(): void {
      console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
    }
  }