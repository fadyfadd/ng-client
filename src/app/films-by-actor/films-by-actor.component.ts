import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActorDto } from '../data-transfer-objects/actorDto';
import { ActorService } from '../services/actor-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { FilmDto } from '../data-transfer-objects/filmDto';
import { Observable, map } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-films-by-actor',
  templateUrl: './films-by-actor.component.html',
  styleUrls: ['./films-by-actor.component.css']
})
export class FilmsByActorComponent implements AfterViewInit {

  displayedColumns: string[] = ['filmId','title','description','releaseYear','length','rentalDuration' , 'action'];
  dataSource: MatTableDataSource<FilmDto>;
  data = new Array<FilmDto>();
  
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  public constructor(private actorService:ActorService) {
    this.dataSource = new MatTableDataSource(this.data);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator as MatPaginator;
    this.dataSource.sort = this.sort as MatSort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getFilmsByActor(element:HTMLInputElement) {
   
        this.actorService.getFilmsByActor(new Number((element.value)) as number).subscribe({
          next:(a)=>{
            if (a.length == 0) {
              this.dataSource = new MatTableDataSource(new Array<FilmDto>());
            }
            else {
              this.dataSource.data = a[0].filmsDto as Array<FilmDto>
              console.log(this.dataSource.data) 
            }
          }
        })
  }
}
