import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'employee', component: EmployeelistComponent},
  {path:'',component:LoginComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'home',component:HomeComponent},
 
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(routes),
    
    
   
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
