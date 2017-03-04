import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'any-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  glasswareSubcategories = ['Beakers','Flasks','Burettes','Tubes','Bottles'];
  reagentSubcategories = ['Solvents','Reagents','Standards'];

  ngOnInit() {
  }

  showGlassware(){
    
  }

}
