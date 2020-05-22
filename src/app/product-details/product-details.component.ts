import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/Product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productId: number;
  constructor(private productService: ProductService,private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    })
    this.getProductDetailsById();
  }
  getProductDetailsById(){
    this.productService.getProductDetailsById(this.productId)
    .subscribe(p => {
      this.product = p as Product;
      console.log(this.product);
    })
  }
}
