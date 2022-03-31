import { Component, OnInit } from '@angular/core';
import {Student} from "../Student";
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Theme} from "../Theme";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  student : Student = new Student();
  trieAscendant: boolean = false;
  idStudent: string = "";
  listeThemes: Theme[]=[];
  notes: number[]=[];

  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    this.idStudent= this.routeactive.snapshot.params['idStudent'];
    this.apiHelpMeBrokerService.getStudent(this.idStudent).subscribe((student ) => {this.student=student});
    this.apiHelpMeBrokerService.getRecommendationsStudent(this.idStudent).subscribe((themes ) => {this.listeThemes=themes});
  }

  public deleteStudent(): void {
    this.apiHelpMeBrokerService.deleteStudent(this.student);
    this.ngOnInit();
  }

  editStudent() {
    this.apiHelpMeBrokerService.editStudent(this.student);
    this.ngOnInit();
  }

  addStudent() {
    this.apiHelpMeBrokerService.addStudent(this.student);
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
