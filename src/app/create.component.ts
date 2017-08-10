import { Component } from '@angular/core';


@Component({
    selector: 'create-app',
    template: `
                <h1>Form</h1>
                <div>
  <form (ngSubmit)="onSubmit(carForm.value)" #carForm="ngForm" novalidate>
    <div>Id:<br>
    <input type="number" [(ngModel)]="user.carId" name="carId"
    ><br></div>
   <div> Make:<br/>
    <input type="text" [(ngModel)]="user.carMake"
    name="carMake"></div>
   <div> Model:<br>
    <input type="text" [(ngModel)]="user.carModel"
    name="carModel"></div>
    <div>Price:<br>
    <input type="number" [(ngModel)]="user.carPrice" name="carPrice"></div>
    <div>Year:<br>
    <input type="text" [(ngModel)]="user.carYear" name="carYear" ></div>
    <div>Color:<br>
    <input type="text" [(ngModel)]="user.carColor"
    name="carColor"></div>
    <br><br>
    <button>Submit</button>
  </form>
    
</div>
               `
})
export class CreateComponent {
 public user ={
    carId: 1,
    carMake: 'Nissan',
    carModel: 'Sentra',
    carPrice: 12000,
    carYear: 2007,
    carColor: 'red'
 }
 
 submitted = false; 
    data: string; 

    onSubmit(data) {
        this.submitted = true;
        this.data = JSON.stringify(data, null, 2);
        console.log(this.data);
    }
}




