import { Component, OnInit } from '@angular/core';
import {Theme} from "../Theme";

@Component({
  selector: 'app-lister-themes',
  templateUrl: './lister-themes.component.html',
  styleUrls: ['./lister-themes.component.css']
})


export class ListerThemesComponent implements OnInit {
  liste: Theme[]= [];
  constructor() { }
  ngOnInit(): void {
  }

}
