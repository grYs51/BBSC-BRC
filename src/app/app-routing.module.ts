import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/brc3/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { Brc3Component } from './pages/brc3/brc3.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: 'homepage', component: MainPageComponent },
  // { path: 'brc3', component: Brc3Component},
  { path: 'brc3/:id', component: Brc3Component, },
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: 'homepage'}
];
//http://localhost:4200/brc3/dashboard

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }