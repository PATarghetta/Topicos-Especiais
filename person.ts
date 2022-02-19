export class Person {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(firstName: string, middleName: string, lastName: string) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  get getFullName() {
    return `Meu nome é ${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  get getBirthdayYear() {
    return `Nasci no ano de 2001`;
  }
}
