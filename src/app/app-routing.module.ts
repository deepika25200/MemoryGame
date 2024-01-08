import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cards6Component } from './cards6/cards6.component';
import { Cards12Component } from './cards12/cards12.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'card6', component: Cards6Component },
  { path: 'card12', component: Cards12Component },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
