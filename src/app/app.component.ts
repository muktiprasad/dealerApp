import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent }   from './create.component';
import { PageNotFoundComponent }     from './not.found.component';
@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
   <nav>
    <a class="btn btn-info" routerLink="/create" routerLinkActive="active">Create</a>
    <a class="btn btn-info" routerLink="/edit" routerLinkActive="active">Search / Edit</a>
  </nav>
  <router-outlet></router-outlet>`,
  styles: ['h1{background-color: yellow;font-weight:bold;padding: 10px;}']
  
  
})
export class AppComponent  { 

public name = 'Car Dealership Application'; 

}
