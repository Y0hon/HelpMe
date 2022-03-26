import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechercher-theme',
  templateUrl: './rechercher-theme.component.html',
  styleUrls: ['./rechercher-theme.component.css']
})
export class RechercherThemeComponent implements OnInit {

  constructor() { }
  titre: string = "";
  description: string ="";
  ngOnInit(): void {
  }

}
