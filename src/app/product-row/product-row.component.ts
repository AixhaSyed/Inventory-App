import { Component, OnInit } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
    inputs:['product'],
})
export class ProductRowComponent implements OnInit {

     product:Product;
    
  constructor() { }
    
  
  ngOnInit() {
  }

}
