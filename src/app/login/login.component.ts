import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy  {
  
  private destorySubject :Subject<void> = new Subject();

  public constructor(private accountService:AccountService , private fb:FormBuilder) {
      this.loginFormGroup = this.fb.group({
      username:new FormControl('',[]),
      password:new FormControl('',[])
    });
  }

  ngOnDestroy(): void {
    this.destorySubject.next();
  }

  get username() : AbstractControl {
    return this.loginFormGroup.get("username") as AbstractControl
  }

  get password() : AbstractControl {
    return this.loginFormGroup.get("password") as AbstractControl;
  }

  public loginFormGroup: UntypedFormGroup; 

  public authenticate() {
    this.accountService.authenticateUser(this.username.value , this.password.value)
    /*
    sessionStorage.setItem("ng-client-token" , "")
    this.http.post<userDto>("http://localhost:5198/authenticate-user", {"UserName":`${this.username.value}` , "Password":`${this.password.value}`} , {
      }).pipe(takeUntil(this.destorySubject)).subscribe({
        next: (userDto:userDto)=>{
          sessionStorage.setItem("ng-client-token" , userDto.token)       
          this.router.navigate(['/home'])
        },
        error: (e:HttpErrorResponse)=>{this.snackBar.openSnackBar(e.error.message,"Dismiss");console.log(e)},
        complete: ()=>{}
      });
      */
  }
  
}
