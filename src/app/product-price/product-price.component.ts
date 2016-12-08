import { Component, OnInit } from '@angular/core';
import {Product} from '../app.component';
@Component({
  selector: 'product-price',
  templateUrl: './product-price.component.html',
   inputs:['price'],
})
export class ProductPriceComponent implements OnInit {

  price:number;
  
  constructor() { }

  ngOnInit() {
  }

}
