import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from './products';
import { PRODUCTS } from './product_list';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'any-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnChanges, OnInit {

  color: string;

  allProducts = PRODUCTS;

  productPerPage : number = 16;

  private subscription: Subscription;

  pageNumber : number = 1;
  
  // paginationLowerLimit : number = (( this.pageNumber - 1) * this.productPerPage );
  paginationHigherLimit : number;
  paginationLowerLimit : number;
  
  // testing. to be moved into service.
  totalPage : number = 5;

  products : Array<Products> = this.allProducts.slice(this.paginationLowerLimit,this.paginationHigherLimit); 


  constructor(
                private route: ActivatedRoute,
                private router: Router                
              ) { 
                this.subscription = this.route.queryParams.subscribe(
                  queryParams => {
                    this.pageNumber = queryParams['page'];

                    if (this.pageNumber > this.totalPage){
                      this.pageNumber = this.totalPage;
                    }else if (this.pageNumber < 1){
                      this.pageNumber = 1;
                    }else if (isNaN(this.pageNumber)){
                      this.pageNumber = 1;
                    }
                    
                    this.paginationHigherLimit = this.pageNumber * this.productPerPage;
                    this.paginationLowerLimit = ((( this.pageNumber - 1) * this.productPerPage) );
                    this.products = this.allProducts.slice(this.paginationLowerLimit,this.paginationHigherLimit)
                  }
                );
              }

  

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

  ngOnChanges(){
     console.log('change Detected !!!');
  }


  ngOnInit() {
    console.log('paginationHigherLimit = ' + this.paginationHigherLimit);
    console.log('paginationLowerLimit = ' + this.paginationLowerLimit);
    console.log('pageNumber = ' + this.pageNumber);

  }


  

}
