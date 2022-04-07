import { Component, OnInit } from '@angular/core';
import {ApiHelpMeBrokerService} from "../api-help-me-broker.service";
import {Theme} from "../Theme";
import {Student} from "../Student";

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {

  student: Student = new Student();

  constructor(private apiHelpMeBrokerService: ApiHelpMeBrokerService) { }

  ngOnInit(): void {
  }

  addStudent() {
    this.apiHelpMeBrokerService.addStudent(this.student);
  }
}
