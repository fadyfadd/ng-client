import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../services/snack-bar.service';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    
    constructor(private snackBar:SnackBarService , public accountService:AccountService , private router:Router) {
      
    }

    public menuVisibility:string =  'none';
  
    ngOnInit(): void {
      this.accountService.isAuthenticated$.pipe(map((b)=>{
        if (b == true)
          this.menuVisibility = "inline-block";
        else
          this.menuVisibility = "none";
      }))
    }

    public logout() {
      this.accountService.logout();
    }

    
}
