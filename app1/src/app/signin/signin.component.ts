import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  email : string = "";
  password : string = "";
  constructor(private service : SigninService ,private router : Router) { 

  }

  ngOnInit() {
  }

  signin(){
   this.service.signin(this.email,this.password).subscribe(response=>{
     const result= response.json();
     if(result.status == 'success'){
       this.router.navigate(["/cars"]);
       alert('welcome to hell');
     }
     else{
       alert('Invali email or password');
     }
    
    });
 
}
}
