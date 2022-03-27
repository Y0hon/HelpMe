
export class Theme{
  _idTheme: string;
  _title: string;
  _description: string;
  _keyWords: string[] = [];
  _recommendations = new Map();
  _top4 = [];
  _date: string;
  expanded: boolean;

  constructor() {
    this._idTheme=new Date().getTime().toString();
    this._title = "";
    this._description = "";
    this._keyWords = [];
    this._top4 = [];
    this._recommendations = new Map();
    this.expanded=false;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    this._date = dd + '/' + mm + '/' + yyyy;
  }

}
