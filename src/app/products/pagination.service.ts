import { Injectable, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from './products';
import { PRODUCTS } from './product_list';
import { Pagination } from './pagination';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class PaginationService implements OnInit, OnDestroy{

  private subscription: Subscription;  
  allProducts = PRODUCTS;
  pageNumber : number = 1;
  productPerPage : number = 16;
  PaginationNow = new Pagination;
  
  pushedPagination = new EventEmitter<Pagination>();
 
  constructor( private route: ActivatedRoute, private router: Router ) 
               { 
                 this.subscription = this.route.queryParams.subscribe(
                  queryParams => {
                    this.pageNumber = queryParams['page'];
                    this.PaginationNow = this.CreatePaginationNow(this.productPerPage);
                    this.PushPaginationNow(this.PaginationNow);
                  })                  
               };   


    CurrentPage(): number{
      if (this.pageNumber > this.TotalPage(this.productPerPage)){
            this.pageNumber = this.TotalPage(this.productPerPage);
          }else if (this.pageNumber < 1){
            this.pageNumber = 1;
          }else if (isNaN(this.pageNumber)){
            this.pageNumber = 1;
          }
      return this.pageNumber;
    }

    PaginationHigherLimit(): number{
      let paginationHigherLimit : number = this.CurrentPage() * this.productPerPage;
      if (paginationHigherLimit > this.allProducts.length){
        paginationHigherLimit = this.allProducts.length;
      }
      return paginationHigherLimit;
    }

    PaginationLowerLimit(): number{
      let paginationLowerLimit : number = ((( this.CurrentPage() - 1) * this.productPerPage) + 1);
      return paginationLowerLimit;
    }

    TotalPage( productPerPage:number ): number{
      let totalPage : number = ((this.allProducts.length - (this.allProducts.length % productPerPage)) / productPerPage) + 1 ;
      return totalPage;
    }

    NextPage(currentPage:number):number{
      let nextPage : number = currentPage + 1;
      if (nextPage > this.TotalPage(this.productPerPage)){
        nextPage = this.TotalPage(this.productPerPage);
      }
      return nextPage;
    }

    PreviousPage(currentPage:number):number{
      let previousPage : number = currentPage - 1;
      if (previousPage < 1){
        previousPage = 1;
      }
      return previousPage;
    }

    CreatePaginationNow(productPerPage): Pagination{
      let PaginationNow = new Pagination; 
      
      PaginationNow.currentPage = this.CurrentPage();
      
      PaginationNow.paginationHigherLimit = this.PaginationHigherLimit();
      PaginationNow.paginationLowerLimit = this.PaginationLowerLimit();
      PaginationNow.totalPage = this.TotalPage(this.productPerPage);
      PaginationNow.nextPage = this.NextPage(this.CurrentPage());
      PaginationNow.previousPage = this.PreviousPage(this.CurrentPage());
      return PaginationNow;
    }

    PushPaginationNow( PaginationNow1: Pagination ){
      this.pushedPagination.emit(PaginationNow1);
      // console.log("Data Pushed = " + PaginationNow1);
    }

    ngOnInit(){
      console.log("pagination.service OnInit Activated");
    }

    ngOnDestroy(){
      console.log("pagination.service Activated");
      this.subscription.unsubscribe();
    }
 
}
  

  



  
