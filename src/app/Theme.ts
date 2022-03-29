
export class Theme{
  _idTheme: string;
  _title: string;
  _description: string;
  _keyWords: string[] = [];
  _recommendations = new Map();
  _top4 = [];
  _date: string;
  _likes: number;
  expanded: boolean;

  constructor() {
    this._idTheme=this.uuid();
    this._title = "";
    this._description = "";
    this._keyWords = [];
    this._top4 = [];
    this._recommendations = new Map();
    this.expanded=false;
    this._likes=0;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    this._date = dd + '/' + mm + '/' + yyyy;
  }


   uuid = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}
