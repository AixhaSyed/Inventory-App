import { Component, OnInit , Input } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'product-depart',
  templateUrl: './product-depart.component.html',
  inputs: ['product']
  
})
export class ProductDepartComponent implements OnInit {
   product :Product;
  constructor() {
    
   }

  ngOnInit() {
  }

}
