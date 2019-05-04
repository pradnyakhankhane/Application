import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : any;

  carId : number = 0;
  name : string = "";
  model : number = 0;
  brand : string = "";
  variant : string = "";
  constructor(private service : CarService ,private router : Router) { 
    this.getCars();
  }

  ngOnInit() {
  }

  getCars(){
    this.service.getCars().subscribe(response=>{
      this.cars=response.json();
      console.log(this.cars);
      
    });
  }

  deleteCar(car){
    alert(car.carId);
    this.service.deleteCar(car.carId).subscribe(response=>{
      alert('deleted');
      console.log(this.cars);
      this.getCars();
    });
}
addCars(){
  alert('Adding cars');
  this.service.addCars(this.carId,this.name,this.model,this.brand,this.variant).subscribe(response=>{
    
    alert('data inserted');
    this.router.navigate(["/addcars"]);
  });
}

}
