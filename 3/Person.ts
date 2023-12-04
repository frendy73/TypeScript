class Person {
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _dressSize: number; // Размер одежды от 1 до 5
  
    constructor(
      firstName: string,
      lastName: string,
      age: number,
      dressSize: number
    ) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
      this.setDressSize(dressSize);
    }
  
    get firstName(): string {
      return this._firstName;
    }
  
    set firstName(value: string) {
      if (!value.match(/^[А-ЯЁ][а-яё]+$/)) {
        throw new Error(
          "Имя должно содержать только буквы и начинаться с большой буквы."
        );
      }
      this._firstName = value;
    }
  
    get lastName(): string {
      return this._lastName;
    }
  
    set lastName(value: string) {
      if (!value.match(/^[А-ЯЁ][а-яё]+$/)) {
        throw new Error(
          "Фамилия должна содержать только буквы и начинаться с большой буквы."
        );
      }
      this._lastName = value;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(value: number) {
      if (value < 0 || value > 150) {
        throw new Error("Недопустимый возраст.");
      }
      this._age = value;
    }
  
    get dressSize(): number {
      return this._dressSize;
    }
  
    setDressSize(value: number) {
      if (value < 1 || value > 5) {
        throw new Error("Недопустимый размер одежды.");
      }
      this._dressSize = value;
    }
  }
  
  // Пример использования:
  const person = new Person("Иван", "Иванов", 30, 3);
  console.log(
    `Имя: ${person.firstName}, Фамилия: ${person.lastName}, Возраст: ${person.age}, Размер одежды: ${person.dressSize}`
  );
  