import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email : string ;
  phone : string;
  password : string;
  confirmpwd : string;
  constructor(private service : SigninService, private router : Router) { }

  ngOnInit() {
  }

  signup(){
    alert(this.password);
    this.service.signup(this.email,this.phone,this.password).subscribe(response=>{
      const result= response.json();
      if(this.confirmpwd != this.password)
      {
          alert('invalid password');
      }
     if(result.status == 'success'){
       this.router.navigate(['/signin']);
        alert('signed up successfully');
      }else if(result.status == 'error'){
        alert("invalid");
      }
      

      
    })
  }

}
