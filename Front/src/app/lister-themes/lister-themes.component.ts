import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {Student} from "../Student";

@Component({
  selector: 'app-lister-themes',
  templateUrl: './lister-themes.component.html',
  styleUrls: ['./lister-themes.component.css']
})


export class ListerThemesComponent implements OnInit {
  listeThemes: Theme[] = [];
  trieAscendant: boolean = false;
  titreRecherche: string = "";
  description: string ="";
  motCleRecherche: string = "";
  trouve: boolean = false;
  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService) {

  }
  ngOnInit(): void {
      this.apiHelpMeBrokerService.getListeThemes().subscribe((themes ) => {this.listeThemes=themes});
  }


  chercherTitre() {
    if(this.titreRecherche!=""){
      this.listeThemes= this.listeThemes.filter(res => {
        return res._title.toLocaleLowerCase().match(this.titreRecherche.toLocaleLowerCase());
      })
    }
    else {
        this.ngOnInit();
    }
  }

  chercherMotCle() {
    if(this.motCleRecherche!=""){
      this.listeThemes= this.listeThemes.filter(res => {
            this.trouve=false;
            for(let keyWord of res._keyWords){
                if(!this.trouve && keyWord.toLocaleLowerCase().match(this.motCleRecherche.toLocaleLowerCase())){
                  console.log("OUIIIIII");
                  this.trouve=true;
                }
            }
            if(this.trouve){
              return res;
            }
            return;
        }
      )
    }
    else {
      this.ngOnInit();
    }
  }

  trierParTitre() {
    if(!this.trieAscendant){
      this.listeThemes.sort((themea, themeb) => themea._title.localeCompare(themeb._title));
      this.trieAscendant=true;
    }
    else{
      this.listeThemes.sort((themea, themeb) => themeb._title.localeCompare(themea._title));
      this.trieAscendant=false;
    }
  }
}
