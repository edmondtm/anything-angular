import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PRODUCTS } from './product_list';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { Cart } from '../cart/cart';
import { mockCart } from '../cart/mockCart';

@Component({
  selector: 'any-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  id:number;
  selectedImage : string;
  allProducts = PRODUCTS;

  addToCartForm : FormGroup;
  
  addToCart : [{id: number, itemCode: string, quantity: number}]
  
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.selectedImage = this.allProducts[(this.id - 1)].image[0]; 
    this.addToCartForm = new FormGroup({
      'id' : new FormControl('',Validators.required),
      'itemCode' : new FormControl('',Validators.required),
      'name': new FormControl('', Validators.required),
      'productProperties' : new FormControl('', Validators.required),
      'quantity' : new FormControl('', [Validators.required,Validators.minLength(1)]),
      'price' : new FormControl('', Validators.required)      
    }); 
  }

  

  ngOnInit() {
  }


  onSelectImage(imageArray: number): void{
    this.selectedImage = this.allProducts[(this.id - 1)].image[imageArray];
  }

  onSubmit(id : number, name: string, variation : {itemCode : string, attributes:Array<string> , price:[string,number], delivery:[number,string],inventory:number,backorder:[number,string]}, attributes : Array<string>){
    let attribute : string = '';
    let header : string;
    let productProperties : string = '';
    for (let i=0; i < variation.attributes.length; ++i){
      header = attributes[i];
      attribute = variation.attributes[i];
      productProperties += header + ' : ' + attribute + ', ';      
    }
    
    this.addToCartForm.value.id = id;
    this.addToCartForm.value.itemCode = variation.itemCode;
    this.addToCartForm.value.name = name;
    this.addToCartForm.value.productProperties = productProperties;
    this.addToCartForm.value.price = variation.price[1];
    mockCart.push(this.addToCartForm.value);
    console.log(mockCart);
  }

}
