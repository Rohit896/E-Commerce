import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { UserDetails } from '../models/UserDetails';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
userdetails:UserDetails;
name:string;
id:number;
cart:Product[];
allproducts:Product[];
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
    this.userdetails=this.dataStorage.getUserData();
    this.name=this.userdetails.name;
    this.id=this.userdetails.customerId;
    this.cart=this.userdetails.cart;
    this.allproducts=this.userdetails.allVisibleProducts;
  }
  
}
