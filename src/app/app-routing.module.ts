import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  // App Routes goes here
  
  
  /*}
    path: 'products',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
     // { path: 'product-details/:id', component: ProductDetailsComponent },
    ]
  },*/
 // { path: 'cart/shopping-cart', component: ShoppingCartComponent},
 // { //path: 'order/order-confirmation', component: OrderConfirmationComponent},
  //{ path: 'customer/my-account', component: AccountComponent},
  { path: 'customer/login', component: LoginComponent},
  { path: 'customer/register', component: RegisterComponent},
 // { path: 'checkout', component: CheckoutComponent, data: {title: 'Check out'},
    //children: [
     // { path: 'review',  component: ReviewComponent,  data: {title: 'Order Review'} },
     // { path: 'customer-information', component: CustomerInfoComponent,  data: {title: 'Customer Information'} },
     // { path: 'payment-information', component: PaymentInfoComponent,  data: {title: 'Payment Information'} },
    //]
 // },
  
   // otherwise redirect to home
 //  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
