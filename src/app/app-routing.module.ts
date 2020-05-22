import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'home', component: HomeComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
