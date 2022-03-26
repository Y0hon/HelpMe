import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";

@Component({
  selector: 'app-ajouter-theme',
  templateUrl: './ajouter-theme.component.html',
  styleUrls: ['./ajouter-theme.component.css']
})
export class AjouterThemeComponent implements OnInit {

  theme: Theme = new Theme();
  constructor() { }

  ngOnInit(): void {
  }

}
