import { Http ,Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  url : string = 'http://localhost:5000/cars';
  constructor(private http : Http) { }

  getCars(){
    return this.http.get(this.url);
  }
  deleteCar(id){

    return this.http.delete(this.url +'/'+id);

  }

  addCars(carId,name,model,brand,variant){
    let car = {
      "carId" : carId,
      "name" : name,
      "model" : model,
      "brand" : brand,
      "variant" : variant
    }
    let header = new Headers({
      "Content-Type" : "application/json"
    });
    let reqOptions =  new RequestOptions({
      headers : header
    });
  
   return this.http.post(this.url,car,reqOptions);
    
  }

  
}
