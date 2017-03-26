import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './product_list';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { PaginationService } from './pagination.service';
import { Pagination } from './pagination';

@Component({
  selector: 'any-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  paginationNow : Pagination = this.paginationService.CreatePaginationNow(this.paginationService.productPerPage);

  products = PRODUCTS;

  // productPerPage : number = 16;
  // paginationMax : number = 10;
  // productsLastPage : number = this.products.length % this.productPerPage;
  // totalPages : number;
  pagesArray : Array<number> = [];
  highlightPage : boolean = false;

  subscription : Subscription;
  
  constructor(
                private paginationService : PaginationService,
                private router: Router 
                
            ) { }

  ngOnInit() {

     this.paginationService.pushedPagination.subscribe(
        PaginationNow => {
          this.paginationNow = PaginationNow;       
        }
      );
        
    this.pagesArray = new Array(this.paginationNow.totalPage); //fake pagesArray to loop. I don't know of better way yet.

    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
