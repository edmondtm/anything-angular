import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Products } from './products';
import { PRODUCTS } from './product_list';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

console.log('total products = ' + PRODUCTS.length);

@Component({
  selector: 'any-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  color: string;

  allProducts = PRODUCTS;

  productPerPage : number = 16;
  //pageNumber : number = 2;
  pageNumber : Observable<number>;
  
  paginationLowerLimit : number = (( this.pageNumber - 1) * this.productPerPage );
  paginationHigherLimit : number = this.pageNumber * this.productPerPage ;
  
  products : Array<Products> = this.allProducts.slice(this.paginationLowerLimit,this.paginationHigherLimit); 


  constructor(
                private route: ActivatedRoute,
                private router: Router,
              ) { }

  ngOnInit() {
    this.pageNumber = this.route

  }


  

}
