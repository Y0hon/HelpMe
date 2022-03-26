import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";

@Component({
  selector: 'app-lister-themes',
  templateUrl: './lister-themes.component.html',
  styleUrls: ['./lister-themes.component.css']
})


export class ListerThemesComponent implements OnInit {
  listeThemes: Theme[]= [];
  constructor() { }
  ngOnInit(): void {
    const t1 = new Theme();
    t1.title="Normalisation et mise en oeuvre de bases de données";
    t1.description="Normaliser les bases de données et gérer les accès concurrents";
    this.listeThemes.push(t1);
    const t2 = new Theme();
    t2.title="Applications web 2.0";
    t2.description="Se familiariser avec les single-page application et les serveurs web";
    this.listeThemes.push(t2);
    const t3 = new Theme();
    t3.title="Applications objets concurrentes";
    t3.description="Introduction à la gestion des évènements et au multithreading ";
    this.listeThemes.push(t3);
    const t4 = new Theme();
    t4.title="Gestion financière";
    t4.description="Comprendre les fondements de la finance d'entreprise";
    this.listeThemes.push(t4);
    const t5 = new Theme();
    t5.title="Outils statistiques";
    t5.description="Maîtriser les langages de programmation statistiques comme SAS et R";
    this.listeThemes.push(t5);
  }

}
