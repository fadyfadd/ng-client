import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';
import { Router } from '@angular/router';
import { ActorDto } from '../data-transfer-objects/actorDto';
import { Observable, map } from 'rxjs';
import { FilmDto } from '../data-transfer-objects/filmDto';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http:HttpClient , private router:Router , private snackBar:SnackBarService) { }

  public getFilmsByActor(actorId:number) : Observable<ActorDto[]> {
    return this.http.get<ActorDto[]>("http://localhost:5198/sakila-movies-by-actor/" + actorId, {
    })
  }
}
