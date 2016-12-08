import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductDepartComponent } from './product-depart/product-depart.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImgComponent,
    ProductDepartComponent,
    ProductPriceComponent, 
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
