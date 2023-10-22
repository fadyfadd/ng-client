import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActorDto } from '../data-transfer-objects/actorDto';
import { ActorService } from '../services/actor-service.service';

@Component({
  selector: 'app-films-by-actor',
  templateUrl: './films-by-actor.component.html',
  styleUrls: ['./films-by-actor.component.css']
})
export class FilmsByActorComponent {


  public constructor(private http:HttpClient , private actorService:ActorService) {

  }

  public getFilmsByActor() {
        this.actorService.getFilmsByActor();
  }
}
