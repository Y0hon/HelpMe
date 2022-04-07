import { Component, OnInit } from '@angular/core';
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Theme} from "../Theme";
import {Student} from "../Student";

@Component({
  selector: 'app-ajouter-recommandation',
  templateUrl: './ajouter-recommandation.component.html',
  styleUrls: ['./ajouter-recommandation.component.css']
})
export class AjouterRecommandationComponent implements OnInit {
  theme: Theme = new Theme();
  nomRecherche: string = "";
  prenomRecherche: string ="";
  trieAscendant: boolean = false;
  listeStudentsRecommendations: Student[] = [];

  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let idTheme= this.routeactive.snapshot.params['idTheme'];
    this.apiHelpMeBrokerService.getTheme(idTheme).subscribe((themeID ) => {this.theme=themeID});
    this.apiHelpMeBrokerService.getRecommendations(idTheme).subscribe((students ) => {this.listeStudentsRecommendations=students});
  }

  ajouterRecommandation(theme: Theme, student: Student) {
    this.apiHelpMeBrokerService.addRecommendation(theme._idTheme,student._idStudent);
    this.ngOnInit()
  }

  retirerRecommandation(theme: Theme, student: Student) {
    this.apiHelpMeBrokerService.deleteRecommendation(theme._idTheme,student._idStudent);
    this.ngOnInit()
  }

  chercherNom() {
    if(this.nomRecherche!=""){
      this.listeStudentsRecommendations= this.listeStudentsRecommendations.filter(res => {
        return res._lastName.toLocaleLowerCase().match(this.nomRecherche.toLocaleLowerCase());
      })
    }
    else {
      this.ngOnInit();
    }
  }

  chercherPrenom() {
    if(this.prenomRecherche!=""){
      this.listeStudentsRecommendations= this.listeStudentsRecommendations.filter(res => {
        return res._firstName.toLocaleLowerCase().match(this.prenomRecherche.toLocaleLowerCase());
      })
    }
    else {
      this.ngOnInit();
    }
  }

  trierParPrenom() {
    if(!this.trieAscendant){
      this.listeStudentsRecommendations.sort((themea, themeb) => themea._firstName.localeCompare(themeb._firstName));
      this.trieAscendant=true;
    }
    else{
      this.listeStudentsRecommendations.sort((themea, themeb) => themeb._firstName.localeCompare(themea._firstName));
      this.trieAscendant=false;
    }
  }

}
