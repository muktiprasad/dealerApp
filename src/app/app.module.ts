import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent }   from './create.component';
import { PageNotFoundComponent }     from './not.found.component';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { EditComponent } from './edit.component';
import {columnPipe,rowPipe,searchPipe} from './pipe';
const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/create', pathMatch: 'full' },
];

@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent,CreateComponent,PageNotFoundComponent,EditComponent,columnPipe,rowPipe,searchPipe ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
