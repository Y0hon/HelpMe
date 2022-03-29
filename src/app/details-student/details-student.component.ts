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
    this.apiHelpMeBrokerService.deleteStudent(this.student._idStudent);
  }

}
