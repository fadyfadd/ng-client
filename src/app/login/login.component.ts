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
  }
  
}
