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
      var themetest = new Theme();
      var themetest2 = new Theme();
      var themetest3 = new Theme();
      var studentTest = new Student();
      var studentTest2 = new Student();
      var studentTest3 = new Student();
      var studentTest4 = new Student();
      var studentTest5 = new Student();
      themetest._title="Applications Web 2.0";
      themetest._description="Maîtriser les frameworks Angular et Express pour perfectionner ses compétences en développement";
      themetest2._title="Conception Web";
      themetest2._description="Apprendre les bases du web HTTP, CSS et JS";
      themetest3._title="Applications objets concurrentes";
      themetest3._description="Initiation au couplage faible et au multithreading";
      studentTest._city="Toulouse";
      studentTest._firstName="Matthew";
      studentTest._lastName="Hoang";
      studentTest._idStudent="1";
      studentTest._contact=studentTest._firstName.toLowerCase() + "." + studentTest._lastName.toLowerCase() + "@toulouse.miage.fr";
      studentTest2._city="Montpellier";
      studentTest2._firstName="Arthur";
      studentTest2._lastName="Etaix";
      studentTest2._idStudent="2";
      studentTest2._contact=studentTest._firstName.toLowerCase() + "." + studentTest._lastName.toLowerCase() + "@toulouse.miage.fr";
      studentTest3._city="Bordeaux";
      studentTest3._firstName="Raphael";
      studentTest3._lastName="Vignon";
      studentTest3._idStudent="3";
      studentTest3._contact=studentTest._firstName.toLowerCase() + "." + studentTest._lastName.toLowerCase() + "@toulouse.miage.fr";
      this.apiHelpMeBrokerService.addStudent(studentTest);
      this.apiHelpMeBrokerService.addStudent(studentTest2);
      this.apiHelpMeBrokerService.addStudent(studentTest3);
      this.apiHelpMeBrokerService.addTheme(themetest);
      this.apiHelpMeBrokerService.addTheme(themetest2);
      this.apiHelpMeBrokerService.addTheme(themetest3);
      this.apiHelpMeBrokerService.getListeThemes().subscribe((themes ) => {this.listeThemes=themes});
    /*const t1 = new Theme();
    t1._title="Normalisation et mise en oeuvre de bases de données";
    t1._description="Normaliser les bases de données et gérer les accès concurrents";
    this.listeThemes.push(t1);
    const t2 = new Theme();
    t2._title="Applications web 2.0";
    t2._description="Se familiariser avec les single-page application et les serveurs web";
    this.listeThemes.push(t2);
    const t3 = new Theme();
    t3._title="Applications objets concurrentes";
    t3._description="Introduction à la gestion des évènements et au multithreading ";
    this.listeThemes.push(t3);
    const t4 = new Theme();
    t4._title="Gestion financière";
    t4._description="Comprendre les fondements de la finance d'entreprise";
    this.listeThemes.push(t4);
    const t5 = new Theme();
    t5._title="Outils statistiques";
    t5._description="Maîtriser les langages de programmation statistiques comme SAS et R";
    this.listeThemes.push(t5);*/
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
