import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Theme} from "./Theme";
import {Observable} from "rxjs";
import {Student} from "./Student";

@Injectable({
  providedIn: 'root'
})
export class ApiHelpMeBrokerService {
  private url ="http://localhost:3000";
  constructor(private httpCLient: HttpClient) { }

  public getListeThemes() : Observable<Theme[]> {
    return this.httpCLient.get<Theme[]>(this.url+"/theme");
  }


  public getTheme(idTheme: string){
    return this.httpCLient.get<Theme>(this.url+"/theme/"+idTheme);
  }

  public getStudent(idStudent: string){
    return this.httpCLient.get<Student>(this.url+"/student/"+idStudent);
  }

  public addTheme(theme: Theme){
    this.httpCLient.post<Theme>(this.url+"/theme",theme)
    .subscribe(
      (response ) => {console.log(response);}
      , (error) => {console.log('Erreur ajouter Thème');}
    )
  }

  public addKeyWord(_idTheme: string,_keyWord: string){
    this.httpCLient.post<string>(this.url+"/addKeyWord",{_idTheme,_keyWord})
      .subscribe(
        (response ) => {console.log(response);}
        , (error) => {console.log('Erreur ajouter mot-clé');}
      )
  }

  public getRecommendations(idTheme: string) : Observable<Student[]> {
    return this.httpCLient.get<Student[]>(this.url+"/RecommendationTheme/"+idTheme);
  }

  public getRecommendationsStudent(idStudent: string) : Observable<Theme[]> {
    return this.httpCLient.get<Theme[]>(this.url+"/RecommendationStudent/"+idStudent);
  }

  public addRecommendation(_idTheme: string,_idStudent: string){
    this.httpCLient.post<string>(this.url+"/addRecommendation",{_idTheme,_idStudent})
      .subscribe(
        (response ) => {console.log(response);}
        , (error) => {console.log('Erreur ajouter recommandation');}
      )
  }

  public deleteRecommendation(_idTheme: string,_idStudent: string){
    this.httpCLient.post<string>(this.url+"/deleteRecommendation",{_idTheme,_idStudent})
      .subscribe(
        (response ) => {console.log(response);}
        , (error) => {console.log('Erreur supprimer recommandation');}
      )
  }

  public getListeStudents() : Observable<Student[]> {
    return this.httpCLient.get<Student[]>(this.url+"/student");
  }

  public addStudent(student: Student){
    this.httpCLient.post<Student>(this.url+"/student",student)
      .subscribe(
        (response ) => {console.log(response);}
        , (error) => {console.log('Erreur ajouter étudiant');}
      )
  }

  public deleteStudent(student: Student) {
    this.httpCLient.delete<Student>(this.url + "/Student/:idStudent").subscribe(
      (response ) => {console.log(response);}
      , (error) => {console.log('Erreur supprimer étudiant');}
    );
  }

  public deleteTheme(theme: Theme) {
    this.httpCLient.delete<Theme>(this.url + "/Theme/:idTheme").subscribe(
      (response ) => {console.log(response);}
      , (error) => {console.log('Erreur supprimer thème');}
    );
  }

  public editStudent(student: Student){
    this.httpCLient.put<Student>(this.url + "/Student", student).subscribe(
      (response ) => {console.log(response);}
      , (error) => {console.log('Erreur modifier étudiant');}
    );
  }

  public editTheme(theme: Theme){
    this.httpCLient.put<Theme>(this.url + "/Theme", theme).subscribe(
      (response ) => {console.log(response);}
      , (error) => {console.log('Erreur modifier thème');}
    );
  }
}
