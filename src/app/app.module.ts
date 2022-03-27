import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { ListerThemesComponent } from './lister-themes/lister-themes.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { DetailsThemeComponent } from './details-theme/details-theme.component';
import { AjouterThemeComponent } from './ajouter-theme/ajouter-theme.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ApiHelpMeBrokerService} from "./api-help-me-broker.service";

const appRoutes: Routes = [
  {path: 'ajouterTheme', component: AjouterThemeComponent},
  {path: 'details/:id', component: DetailsThemeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListerThemesComponent,
    DetailsStudentComponent,
    DetailsThemeComponent,
    AjouterThemeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ApiHelpMeBrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }