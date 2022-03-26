export class Theme{
  title: string;
  description: string;
  keyWords = [];
  recommendations = new Map();
  date: string;

  constructor() {
    this.title = "";
    this.description = "";
    this.keyWords = [];
    this.recommendations = new Map();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    this.date = dd + '/' + mm + '/' + yyyy;
  }

}
