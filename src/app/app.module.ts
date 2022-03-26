import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListerThemesComponent } from './lister-themes/lister-themes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerThemesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
