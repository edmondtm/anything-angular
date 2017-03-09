import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './product_list';

console.log('total products = ' + PRODUCTS);

@Component({
  selector: 'any-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  color: string;

  productPerPage : number = 16;
  paginationMax : number = 10;
  productsLastPage : number = this.products.length % this.productPerPage;
  totalPages : number;
  pagesArray : Array<number> = [];

  constructor() { }

  ngOnInit() {

    

    if (this.productsLastPage = 0){
      this.totalPages = this.productPerPage / this.productPerPage;
    } else {
      this.totalPages = (this.productPerPage / this.productPerPage) + 1;
    }

    this.pagesArray = new Array(this.totalPages); //fake pagesArray to loop. I don't know of better way yet.




  }


  

}
