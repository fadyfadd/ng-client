import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInjectorInterceptor } from './interceptors/token-injector-interceptor.interceptor';
import { FilmsByActorComponent } from './films-by-actor/films-by-actor.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatDividerModule} from '@angular/material/divider';
import { MenuComponent } from './menu/menu.component'
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundPageComponent,
    FilmsByActorComponent,
    MenuComponent
  ],
  imports: [
    MatDividerModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    FormsModule ,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInjectorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
