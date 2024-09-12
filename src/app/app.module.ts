import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'; // Importez ici

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './composants/menu/menu.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './login/inscrire/inscrire.component';

import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
//import { PersonelDashboardComponent } from './modules/personnel/components/personel-dashboard/personel-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,

    InscrireComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbProgressbarModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
