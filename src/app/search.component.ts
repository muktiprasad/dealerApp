import { Component } from '@angular/core';

@Component({
  selector: 'search-app',
  template: `<h3>{{name}}</h3>
  <input [(ngModel)]="query">
<table class="table">
<tr><th>Id</th><th>Make</th><th>Model</th><th>Price</th><th>Year</th><th>Color</th></tr>
<tr *ngFor="let item of items | myfilter:query "><td>{{item.id}}</td><td>{{item.make}}</td><td>{{item.model}}</td><td>{{item.price}}</td><td>{{item.year}}</td><td>{{item.color}}</td></tr>

</table>
  `
})
export class SearchComponent  { 

public name = 'Search a Car'; 

items = [
    {
        id: 1,
        make: 'nissan',
        model: 'sentra',
        price: 15000,
        year: 2016,
        color: 'red'
    },
    {
        id: 2,
        make: 'Honda',
        model: 'civic',
        price: 18000,
        year: 2017,
        color: 'white'
    },
    {
        id: 3,
        make: 'ford',
        model: 'focus',
        price: 25000,
        year: 2001,
        color: 'blue'
    }
];

}
