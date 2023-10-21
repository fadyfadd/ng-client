import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FilmsByActorComponent } from './films-by-actor/films-by-actor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'home' , component: HomeComponent , pathMatch: 'full'},
  { path: 'films-by-actor' , component: FilmsByActorComponent , pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component:NotFoundPageComponent , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
