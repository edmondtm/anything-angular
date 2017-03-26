import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './cart';
import { mockCart } from './mockCart';

@Component({
  selector: 'any-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() mockCart : Cart;

  constructor() { }

  ngOnInit() {
    console.log("Length of Cart = " + mockCart.length);
    console.log(mockCart);
  }

  

}
