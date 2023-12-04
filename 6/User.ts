class User {
    private static count: number = 0;
    private _name: string;
    private _login: string;
    private _password: string;
  
    constructor(name: string, login: string, password: string) {
      this._name = name;
      this._login = login;
      this._password = password;
      User.count++;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get login(): string {
      return this._login;
    }
  
    // Пароль доступен только для изменения, нет геттера
    set password(value: string) {
      this._password = value;
    }
  
    public showInfo(): void {
      console.log(`Name: ${this._name}, Login: ${this._login}`);
    }
  
    public static getUserCount(): number {
      return User.count;
    }
  }