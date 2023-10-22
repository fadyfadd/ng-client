import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';
import { Router } from '@angular/router';
import { ActorDto } from '../data-transfer-objects/actorDto';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http:HttpClient , private router:Router , private snackBar:SnackBarService) { }

  public getFilmsByActor() {
    this.http.get<ActorDto[]>("http://localhost:5198/sakila-movies-by-actor/1", {
    }).subscribe({
      next: (actorDto:ActorDto[])=>{
        console.log(actorDto)
      },
      error: (e)=>{console.log(e)},
      complete: ()=>{}
    });
  }


}
