import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {ListerThemesComponent} from "../lister-themes/lister-themes.component";

@Component({
  selector: 'app-ajouter-theme',
  templateUrl: './ajouter-theme.component.html',
  styleUrls: ['./ajouter-theme.component.css'],
})
export class AjouterThemeComponent implements OnInit {

  theme: Theme = new Theme();
  motCleRecherche: string = "";
  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService) {

  }
  ngOnInit(): void {
  }

  addTheme(){
    this.apiHelpMeBrokerService.addTheme(this.theme);
  }

}
