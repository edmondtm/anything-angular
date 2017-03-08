import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './product_list';

console.log('total products = ' + PRODUCTS.length);

@Component({
  selector: 'any-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  color: string;

  constructor() { }

  ngOnInit() {
  }

  

}
