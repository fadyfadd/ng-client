import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { userDto } from '../data-transfer-objects/userDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  public constructor(private http:HttpClient) {

  }

  public authenticate() {
    sessionStorage.setItem("ng-client-token" , "")
    this.http.post<userDto>("http://localhost:5198/authenticate-user", {"UserName":"admin" , "Password":"admin"} , {
      }).subscribe({
        next: (userDto:userDto)=>{
          sessionStorage.setItem("ng-client-token" , userDto.token)
        },
        error: (e)=>{console.log(e)},
        complete: ()=>{}
      });
  }
  
  ngOnInit(): void {
   

  }

}
