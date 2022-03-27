import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Theme} from "./Theme";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiHelpMeBrokerService {
  private url ="http://localhost:3000";
  constructor(private httpCLient: HttpClient) { }

  public getListeThemes() : Observable<Theme[]> {
    return this.httpCLient.get<Theme[]>(this.url+"/theme");
  }

  public getTheme(idTheme: Observable<Theme>){
    return this.httpCLient.get<Theme>(this.url+"/"+idTheme);
  }

  public addTheme(theme: Theme){
    this.httpCLient.post<Theme>(this.url+"/theme",theme)
    .subscribe(
      (response ) => {console.log(response);}
      , (error) => {console.log('Erreur ajouter Thème');}
    )
  }
}
