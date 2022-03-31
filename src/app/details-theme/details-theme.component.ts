import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.css']
})
export class DetailsThemeComponent implements OnInit {
  theme: Theme = new Theme();
  prenomRecherche: string = "";
  nomRecherche: string = "";
  _keyWord: string = "";

  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let idTheme= this.routeactive.snapshot.params['idTheme'];
    this.apiHelpMeBrokerService.getTheme(idTheme).subscribe((themeID ) => {this.theme=themeID});
  }


  editTheme() {
    this.apiHelpMeBrokerService.editTheme(this.theme);
  }

  addKeyWord() {
    this.apiHelpMeBrokerService.addKeyWord(this.theme._idTheme,this._keyWord);
    this.ngOnInit()
  }

  public deleteTheme(): void {
    this.apiHelpMeBrokerService.deleteTheme(this.theme);
    this.ngOnInit();
  }
}
