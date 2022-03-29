import { Component, OnInit } from '@angular/core';
import {Student} from "../Student";
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {ActivatedRoute} from "@angular/router";
import {Theme} from "../Theme";
import {Observable} from "rxjs";

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  student : Student = new Student();
  listeThemes: Theme[]=[];
  notes: number[]=[];

  constructor(private service : ApiHelpMeBrokerService, private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    let idStudent= this.routeactive.snapshot.params['idStudent'];
    this.service.getStudent(idStudent).subscribe((studentID ) => {this.student=studentID});
    this.service.getListeThemes().subscribe((themes ) => {this.listeThemes=themes});
    for (let t in this.listeThemes){
      this.service.getNote(t, this.student._idStudent).subscribe((note) => {this.notes.concat(note)})
    }
  }

  public supprStudent(): void {
    this.service.supprStudent(this.student._idStudent);
  }

}
