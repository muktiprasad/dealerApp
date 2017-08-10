import { Component } from '@angular/core';


@Component({
    selector: 'create-app',
    template: `
                <h1>Form</h1>
                <div class="container formDiv">
  <form class="form-horizontal" (ngSubmit)="onSubmit(carForm.value)" #carForm="ngForm" novalidate>
    <div class="form-group"><label for="Id">Id</label><br>
    <input type="number" [(ngModel)]="user.carId" name="carId"
    ><br></div>
   <div class="form-group"><label for="make">Make</label><br/>
    <input type="text" [(ngModel)]="user.carMake"
    name="carMake"></div>
   <div class="form-group"><label for="model">Model</label><br>
    <input type="text" [(ngModel)]="user.carModel"
    name="carModel"></div>
    <div class="form-group"><label for="price">Price</label><br>
    <input type="number" [(ngModel)]="user.carPrice" name="carPrice"></div>
    <div class="form-group"><label for="year">Year</label><br>
    <input type="text" [(ngModel)]="user.carYear" name="carYear" ></div>
    <div class="form-group"><label for="color">Color</label><br>
    <input type="text" [(ngModel)]="user.carColor"
    name="carColor"></div>
    <br><br>
    <button>Submit</button>
  </form>
  
   <div class="form-group">
        <div class="col-xs-8">
            <div [hidden]="!submitted">
                Submitted Data : {{data}}
            </div>
            <div [hidden]="submitted">
                
            </div>
        </div>
    </div>  
</div>
               `,
styles: ['.formDiv{margin: 20px;}']
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




