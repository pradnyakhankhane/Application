import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  url : string = "http://localhost:5000/signup"
  url2 : string = "http://localhost:5000/user"
  constructor(private http : Http) { }

  signin(email,password){
    let signin = {
      "email" : email,
      "password" : password
    }
    let header = new Headers({
      "Content-Type" : "application/json"
    });
    let reqOptions =  new RequestOptions({
      headers : header
    });
  
   return this.http.post(this.url2,signin,reqOptions);
    
  }

  signup(email,phone,password){
    let signup = {
      "email" : email,
      "phone" : phone,
      "password" : password
    }

    let header = new Headers({
      "Content-Type" : "application/json"
    });

    let reqOptions = new RequestOptions({
      headers : header
    });
    return this.http.post(this.url,signup,reqOptions);
  }
}
