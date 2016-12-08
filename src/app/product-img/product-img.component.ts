import { Component, OnInit } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'product-img',
  templateUrl: './product-img.component.html',
  inputs:['product'],
})
export class ProductImgComponent implements OnInit {

   product:Product;


  constructor() { }

  ngOnInit() {
  }

}
