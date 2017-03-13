import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PRODUCTS } from './product_list';
@Component({
  selector: 'any-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  id:number;
  selectedImage : string;
  allProducts = PRODUCTS;
  
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.selectedImage = this.allProducts[(this.id - 1)].image[0];  
  }

  

  ngOnInit() {
  }


  onSelectImage(imageArray: number): void{
    console.log('clicked image array #' + imageArray );
    console.log('clicked product array #' + this.id);
    this.selectedImage = this.allProducts[(this.id - 1)].image[imageArray];
    console.log(this.selectedImage);
    
  }

}
