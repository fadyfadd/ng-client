import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-films-by-actor',
  templateUrl: './films-by-actor.component.html',
  styleUrls: ['./films-by-actor.component.css']
})
export class FilmsByActorComponent {


  public constructor(private http:HttpClient) {

  }

    public getFilmsByActor() {
      this.http.get<object>("http://localhost:5198/sakila-movies-by-actor/1", {
      }).subscribe({
        next: (userDto:object)=>{
          console.log(userDto)
        },
        error: (e)=>{console.log(e)},
        complete: ()=>{}
      });
    }
}
