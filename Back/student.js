module.exports = class Student {
    constructor(lastName, firstName, city, idStudent) {
        this._idStudent= idStudent;
        this._lastName = lastName;
        this._firstName = firstName;
        this._contact = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@toulouse.miage.fr";
        this._city = city;
        this._likes = 0;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get contact() {
        return this._contact;
    }

    set contact(value) {
        this._contact = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }
}