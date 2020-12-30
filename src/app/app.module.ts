import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutComponent } from './pages/about/about.component';
import { InfocardComponent } from './pages/about/childs/infocard/infocard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ng2-tooltip-directive';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';


import { SnackbaraddpersonComponent } from './components/extra/snackbaraddperson/snackbaraddperson.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { Brc3Component } from './pages/brc3/brc3.component';
import { DashboardComponent } from './components/brc3/dashboard/dashboard.component';

import { AuthInterceptor } from './shared//service/Discord/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainPageComponent,
    AboutComponent,
    InfocardComponent,
    SnackbaraddpersonComponent,
    SignUpComponent,
    ParticipantsComponent,
    Brc3Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [SnackbaraddpersonComponent]
})
export class AppModule { }
