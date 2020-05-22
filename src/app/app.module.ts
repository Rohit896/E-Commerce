import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { SmallCartComponent } from './layout/app-header/small-cart/small-cart.component';
import { FiltersComponent } from './home/filters/filters.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductCardComponent } from './home/product-list/product-card/product-card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    AppHeaderComponent,
    SmallCartComponent,
    FiltersComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
