import { Component, OnInit, Input , EventEmitter , Output } from '@angular/core';
import { Product } from '../app.component';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
   inputs:['productlist']

})
export class ProductListComponent implements OnInit {

  productlist:Product[];
  
  constructor() { }

  ngOnInit() {
  }

}
