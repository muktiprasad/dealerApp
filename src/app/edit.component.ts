import { Component } from '@angular/core';
import {columnPipe,rowPipe,searchPipe} from './pipe';

export class Car {
  carId: number;
  carMake: string;
  carModel: string;
  carPrice: number;
  carYear: number;
  carColor: string;
}

public const CARS: Car[] = [
  { carId: '11', 'carMake': 'Honda','carModel':'Accord',carPrice:'14000',carYear:'2013',carColor:'Metalic Grey' },
  { carId: '12', 'carMake': 'Nissan','carModel':'Altima',carPrice:'15000',carYear:'2017',carColor:'blue' },
  { carId: '13', 'carMake': 'Honda','carModel':'Accord',carPrice:'12000',carYear:'2012',carColor:'red' },
  { carId: '14', 'carMake': 'nissan','carModel':'Sentra',carPrice:'12000',carYear:'2012',carColor:'red' },
  { carId: '15', 'carMake': 'Ford','carModel':'focus',carPrice:'20000',carYear:'2012',carColor:'grey' },
  { carId: '16', 'carMake': 'Hyundai','carModel':'elentra',carPrice:'16000',carYear:'2017',carColor:'white' }
  
];


@Component({
  selector: 'my-app',
  template: `
    <h3>Edit Any Car</h3>
    <ul class="cars">
      <li *ngFor="let car of cars"
        [class.selected]="car === selectedCar"
        (click)="onSelect(car)">
        <span class="badge">{{car.carId}}</span> {{car.carMake}}
      </li>
    </ul>
    
    <div *ngIf="selectedCar">
      <h2>{{selectedCar.carMake}} details!</h2>
      <div><label>Id: </label>{{selectedCar.carId}}</div>
      <div>
        <label>Make: </label>
        <input [(ngModel)]="selectedCar.carMake" placeholder="make"/>
      </div>
      <div>
        <label>Model: </label>
        <input [(ngModel)]="selectedCar.carModel" placeholder="model"/>
      </div>
      
      <div>
        <label>Price: </label>
        <input [(ngModel)]="selectedCar.carPrice" placeholder="price"/>
      </div>
      <div>
        <label>Year: </label>
        <input [(ngModel)]="selectedCar.carYear" placeholder="year"/>
      </div>
      <div>
        <label>Color: </label>
        <input [(ngModel)]="selectedCar.carColor" placeholder="color"/>
      </div>
    </div>
    
    <h2>Search a Car</h2>
    <input type="text" #searchFilter (keyup)="0" /><br/><br/>
     <table class="table">
<tr><th>Id</th><th>Make</th><th>Model</th><th>Price</th><th>Year</th><th>Color</th></tr>
 <tr *ngFor="let row of cars | searchPipe : searchFilter.value">
    <td *ngFor="let rowValues of row | rowPipe">{{ rowValues }}</td>
  </tr>
</table>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .cars {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .cars li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: powderblue;
      margin: .5em;
      padding: .3em 0;
      height: 2.6em;
      border-radius: 4px;
      font-weight: bold;
    }
    .cars li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .cars li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .cars .text {
      position: relative;
      top: -3px;
    }
    .cars .badge {
      display: inline-block;
      font-size: small;
      color: white;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: 3px;
      top: 2px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    div{margin: 10px;}
  `]
})
export class EditComponent {
  title = 'List of Cars';
  cars = CARS;
  selectedCar: Car;

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
  
  CARS.push(localStorage.getItem('carArray'));
}


