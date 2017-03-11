import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './product_list';

@Component({
  selector: 'any-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  products = PRODUCTS;

  productPerPage : number = 16;
  paginationMax : number = 10;
  productsLastPage : number = this.products.length % this.productPerPage;
  totalPages : number;
  pagesArray : Array<number> = [];

  constructor() { }

  ngOnInit() {
    if (this.productsLastPage === 0){
      this.totalPages = this.products.length / this.productPerPage;
    } else {
      this.totalPages = ((this.products.length - this.productsLastPage) / this.productPerPage) + 1;
    }
    console.log('productPerPage = '+this.productPerPage);
    console.log('productsLastPage = '+ this.productsLastPage);
    console.log('products.length = '+this.products.length);
    console.log('totalPages = '+this.totalPages);
    this.pagesArray = new Array(this.totalPages); //fake pagesArray to loop. I don't know of better way yet.
  }

}
