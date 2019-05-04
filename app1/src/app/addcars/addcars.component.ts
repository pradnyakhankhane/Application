
import { Router } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {
  
  carId : number = 0;
  name : string = "";
  model : number = 0;
  brand : string = "";
  variant : string = "";
  constructor(private service : CarService ,private router : Router) { }

  ngOnInit() {
  }

  addCars(){
    alert('Adding cars');
    this.service.addCars(this.carId,this.name,this.model,this.brand,this.variant).subscribe(response=>{
      alert('data inserted');
      this.router.navigate(["/addcars"]);
     
    });
  }
}
