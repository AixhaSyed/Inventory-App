import { Component } from '@angular/core';


@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  product: Product[] ;
  
  constructor(){
 this.product = [
 new Product(
 'GIRLYSHOES',
 'Pink Sneakers',
 'https://s-media-cache-ak0.pinimg.com/564x/01/bd/20/01bd204f94d1abd813f6e203234700c9.jpg',
 ['Girl', 'Nike', 'College Sneakers'],
 107.38),
 new Product(
 'NICECAP',
 'Black Cap',
 'https://asset2.surfcdn.com/adidas-originals-hats-adidas-originals-bucket-hat-collegiate-navy-white.jpg?w=1200&h=1200&r=4&q=80&o=1LnQ0ztImNokpa8udSCmQeASzHIj&V=gc3j' ,
 ['Girl', 'Addidas', 'Summer Caps'],
 88.45),
 new Product(
 'OUTERWEAR',
 'Grey Jacket',
 'http://i.ebayimg.com/00/z/TpUAAOxy1GNSTsaR/$(KGrHqRHJBQFJOGz4FgKBSTs,QlCJ!~~_32.JPG',
 ['Girl', 'Gap', 'Jackets'],
 140.63)
 ]
  }

}

  export class Product {
  constructor(
    public sku:string,
    public name:string,
    public imageUrl:string,
    public department:string[],
    public price:number){



  }}