export class Student{
  _idStudent: string;
  _lastName: string;
  _firstName: string;
  _contact: string;
  _city: string;


  constructor() {
    this._idStudent=new Date().getTime().toString();
    this._lastName="";
    this._firstName="";
    this._city="";
    this._contact="";
  }

  getLastName() : string {
    return this._lastName;
  }

  setLastName(value: string) {
    this._lastName = value;
  }

  getFirstName() {
    return this._firstName;
  }

  setFirstName(value: string) {
    this._firstName = value;
  }

  getContact() : string{
    return this._contact;
  }

  setContact(value: string) {
    this._contact = value;
  }

  getCity() : string{
    return this._city;
  }

  setCity(value:string) {
    this._city = value;
  }
}
