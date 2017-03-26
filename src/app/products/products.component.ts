  import { Component, OnInit, Input, OnDestroy } from '@angular/core';
  import { Router, ActivatedRoute } from '@angular/router';
  import { Products } from './products';
  import { PRODUCTS } from './product_list';
  import { Subscription } from 'rxjs/Rx';
  import { PaginationService } from './pagination.service';
  import { Pagination } from './pagination';
  import 'rxjs/add/operator/switchMap';

  @Component({
    selector: 'any-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
  })

  export class ProductsComponent implements OnInit, OnDestroy {

    color: string;
    allProducts = PRODUCTS;
    private subscription: Subscription;
    paginationNow : Pagination = this.paginationService.CreatePaginationNow(this.paginationService.productPerPage);
    
    products : Array<Products> = this.allProducts.slice((this.paginationNow.paginationLowerLimit-1),this.paginationNow.paginationHigherLimit); 
    
    constructor( private paginationService : PaginationService ) { }
    
    ngOnInit() {
      this.paginationService.pushedPagination.subscribe(
        PaginationNow => {
          this.paginationNow = PaginationNow;
          this.products = this.allProducts.slice((this.paginationNow.paginationLowerLimit-1),this.paginationNow.paginationHigherLimit);        
        }
      );
      
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }



  }
