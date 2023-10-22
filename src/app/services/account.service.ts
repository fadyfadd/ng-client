import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { userDto } from '../data-transfer-objects/userDto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public destorySubject :Subject<void> = new Subject();

  public isAuthenticated$:Subject<boolean> = new Subject();
  public userName: string = "";
  public sessionToken = ""

  
  public authenticateUser(userName:string , password:string) {
    this.sessionToken = "";
    this.userName = "";

    this.http.post<userDto>("http://localhost:5198/authenticate-user", {"UserName":userName , "Password":password} , {
      }).pipe(takeUntil(this.destorySubject)).subscribe({
        next: (userDto:userDto)=>{
          
          this.sessionToken = userDto.token;
          this.userName = userName;
          this.isAuthenticated$.next(true)      
          this.router.navigate(['/home'])
        },
        error: (e:HttpErrorResponse)=>{
        this.snackBar.openSnackBar(e.error.message ?? 'Unknown Error',"Dismiss");
        this.isAuthenticated$.next(false)},
        complete: ()=>{}
      });
  }

  public logout() {
    this.userName = "";
    this.sessionToken = "";
    this.userName = "";
    this.router.navigate(['/login'])
    this.isAuthenticated$.next(false)
  }

  ngOnDestroy(): void {
    this.destorySubject.next();
  }

  constructor( private http:HttpClient , private router:Router , private snackBar:SnackBarService) { }
}
