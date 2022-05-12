import{NgToastModule} from 'ng-angular-popup'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EgyptiannationalIDnumberPipe } from './Pipes/egyptiannational-idnumber.pipe';
import { CreditCardNumberPipe } from './Pipes/credit-card-number.pipe';
import { ProductcardDirective } from './Directives/productcard.directive';
import { HomeComponent } from './Home/home/home.component';
//import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
// import { ContactUSComponent } from './ContactUs/contact-us/contact-us.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { MainLayOutComponent } from './main-lay-out/main-lay-out.component';
// import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { RegisterComponent } from './Regsteration/register/register.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './Cart/cart/cart.component';
// import { AddProductComponent } from './AddProduct/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    // ShoppingCartComponent,
    EgyptiannationalIDnumberPipe,
    CreditCardNumberPipe,
    ProductcardDirective,
    HomeComponent,
   // AboutUsComponent,
    // ContactUSComponent,
    NotFoundComponent,
    MainLayOutComponent,
    // ProductDetailsComponent,
    LogInComponent,
    RegisterComponent,
    CategoryComponent,
    CartComponent,
    // AddProductComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgToastModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
