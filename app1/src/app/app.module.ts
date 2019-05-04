import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddcarsComponent } from './addcars/addcars.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninService } from './signin.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddcarsComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path : "addcars",component : AddcarsComponent},
      {path : "cars",component : CarComponent},
      {path : "signin" ,component : SigninComponent},
      {path : "signout", component : SignoutComponent},
      {path : "signup",component : SignupComponent},
      {path : "home" ,component : HomeComponent}
    ])
  ],
  providers: [CarService,SigninService],
  bootstrap: [AppComponent]
})
export class AppModule { }
