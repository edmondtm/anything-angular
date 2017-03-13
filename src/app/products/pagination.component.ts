import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './product_list';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'any-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  products = PRODUCTS;

  productPerPage : number = 16;
  paginationMax : number = 10;
  productsLastPage : number = this.products.length % this.productPerPage;
  totalPages : number;
  pagesArray : Array<number> = [];
  highlightPage : boolean = false;

  subscription : Subscription;
  pageNumber : number = 1;
  nextPage : number;
  previousPage : number;


  constructor(
                private route: ActivatedRoute,
                private router: Router 
                
            ) { 
              this.subscription = this.route.queryParams.subscribe(
                  queryParams => {
                    this.pageNumber = queryParams['page'];
                    this.nextPage = this.pageNumber - (-1);
                    this.previousPage = this.pageNumber - 1;
                    if (this.previousPage < 1) {
                      this.previousPage = 1;
                    }
                    if (this.nextPage > this.totalPages){
                      this.nextPage = this.totalPages;
                    }

                  }
                );
            }

  ngOnInit() {
    if (this.productsLastPage === 0){
      this.totalPages = this.products.length / this.productPerPage;
    } else {
      this.totalPages = ((this.products.length - this.productsLastPage) / this.productPerPage) + 1;
    }
    
    this.pagesArray = new Array(this.totalPages); //fake pagesArray to loop. I don't know of better way yet.

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
