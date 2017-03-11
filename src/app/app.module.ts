import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './header/category.component';
import { MerchantComponent } from './merchant/merchant.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { InstantQuoteComponent } from './instant-quote/instant-quote.component';
import { ProductsComponent } from './products/products.component';
import { ProductShowComponent } from './products/product-show.component';
import { FilterComponent } from './products/filter.component';
import { FooterComponent } from './footer/footer.component';
import { ProductEditComponent } from './products/product-edit.component';
import { HighlightProductBoxDirective } from './products/highlight-product-box.directive';
import { PaginationComponent } from './products/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    CategoryComponent,
    MerchantComponent,
    HomepageComponent,
    SignupComponent,
    SigninComponent,
    CartComponent,
    InstantQuoteComponent,
    ProductsComponent,
    ProductShowComponent,
    FilterComponent,
    FooterComponent,
    ProductEditComponent,
    HighlightProductBoxDirective,
    PaginationComponent,
    
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
export class PizzaPartyAppModule { }

