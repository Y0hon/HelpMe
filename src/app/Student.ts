export class Student{
  lastName: string;
  firstName: string;
  contact: string;
  city: string;


  constructor(lastName: string, firstName: string, city: string) {
    this.lastName=lastName;
    this.firstName=firstName;
    this.city=city;
    this.contact= firstName.toLowerCase() + "." + lastName.toLowerCase() + "@toulouse.miage.fr";
  }

  getLastName() : string {
    return this.lastName;
  }

  setLastName(value: string) {
    this.lastName = value;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(value: string) {
    this.firstName = value;
  }

  getContact() : string{
    return this.contact;
  }

  setContact(value: string) {
    this.contact = value;
  }

  getCity() : string{
    return this.city;
  }

  setCity(value:string) {
    this.city = value;
  }
}
