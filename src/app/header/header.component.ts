import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CartItems } from './cart-items';

@Component({
  selector: 'any-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public signUpDialog:MdDialog) { }

  cartItems: CartItems = {
    products: 'Low Form Beakers',
    quantity: 0
  };

    
  ngOnInit() {
  }

  onInstantQuote(){    
    if (this.cartItems.quantity > 0){
      console.log('cart is not empty');
    }else{
      console.log('cart is empty');
    }
  }


}


