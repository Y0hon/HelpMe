import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";

@Component({
  selector: 'app-lister-themes',
  templateUrl: './lister-themes.component.html',
  styleUrls: ['./lister-themes.component.css']
})


export class ListerThemesComponent implements OnInit {
  listeThemes: Theme[] = [];
  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService) {

  }
  ngOnInit(): void {
    var themetest = new Theme();
    themetest._title="titre";
    themetest._description="description";
    this.apiHelpMeBrokerService.addTheme(themetest);
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

}
