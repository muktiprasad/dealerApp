import { Component } from '@angular/core';

export class Car {
  id: number;
  make: string;
  model: string;
  price: number;
  year: number;
  color: string;
}

const CARS: Car[] = [
  { id: 11, 'make': 'Honda','model':'Accord',price:14000,year:2013,color:'Metalic Grey' },
  { id: 12, 'make': 'Nissan','model':'Altima',price:15000,year:2017,color:'blue' },
  { id: 13, 'make': 'Honda','model':'Accord',price:12000,year:2012,color:'red' },
  { id: 14, 'make': 'nissan','model':'Sentra',price:12000,year:2012,color:'red' },
  { id: 15, 'make': 'Ford','model':'focus',price:20000,year:2012,color:'grey' },
  { id: 16, 'make': 'Hyundai','model':'elentra',price:16000,year:2017,color:'white' },
  { id: 17, 'make': 'Honda','model':'Civic',price:18000,year:2013,color:'blue' }
  
 
];

@Component({
  selector: 'my-app',
  template: `
    <h3>Edit Any Car</h3>
    <ul class="cars">
      <li *ngFor="let car of cars"
        [class.selected]="car === selectedCar"
        (click)="onSelect(car)">
        <span class="badge">{{car.id}}</span> {{car.make}}
      </li>
    </ul>
    
    <div *ngIf="selectedCar">
      <h2>{{selectedCar.make}} details!</h2>
      <div><label>Id: </label>{{selectedCar.id}}</div>
      <div>
        <label>Make: </label>
        <input [(ngModel)]="selectedCar.make" placeholder="make"/>
      </div>
      <div>
        <label>Model: </label>
        <input [(ngModel)]="selectedCar.model" placeholder="model"/>
      </div>
      
      <div>
        <label>Price: </label>
        <input [(ngModel)]="selectedCar.price" placeholder="price"/>
      </div>
      <div>
        <label>Year: </label>
        <input [(ngModel)]="selectedCar.year" placeholder="year"/>
      </div>
      <div>
        <label>Color: </label>
        <input [(ngModel)]="selectedCar.color" placeholder="color"/>
      </div>
    </div>
    
    <h2>Search a Car</h2>
    <input [(ngModel)]="query"><br/><br/>
     <table class="table">
<tr><th>Id</th><th>Make</th><th>Model</th><th>Price</th><th>Year</th><th>Color</th></tr>
<tr *ngFor="let car of cars"><td>{{car.id}}</td><td>{{car.make}}</td><td>{{car.model}}</td><td>{{car.price}}</td><td>{{car.year}}</td><td>{{car.color}}</td></tr>

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
}


