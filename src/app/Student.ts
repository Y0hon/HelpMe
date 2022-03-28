export class Student{
  _idStudent: string;
  _lastName: string;
  _firstName: string;
  _contact: string;
  _city: string;
  _likes: number;


  constructor() {
    this._idStudent=this.uuid();
    this._lastName="";
    this._firstName="";
    this._city="";
    this._contact="";
    this._likes=0;
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

  getLikes() : number{
    return this._likes
  }

  setLikes(value:number){
    this._likes= value;
  }

  setCity(value:string) {
    this._city = value;
  }

  uuid = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}
