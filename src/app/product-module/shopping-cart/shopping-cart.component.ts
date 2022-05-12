import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { CategoryService } from '../../Services/Category/category.service';
import { ProductAPIService } from '../../Services/ProductAPI/product-api.service';
import { ProductsService } from '../../Services/products.service';
// import { parse } from 'path';
import { ICategory } from '../../ViewModel/icategory';
import { ShoppingCartItems } from '../../ViewModel/ShoppingCartItems';
//import {ShoppingCartItems} '../ViewModel/shopping-cart-items';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit ,AfterViewInit{

  @ViewChild(ProductsComponent) ProductsCompObj!:ProductsComponent

  CategoryList:ICategory[]=[];
  SelectedCategoryID :number=0;
  OrderTotalPrice:number=0;

   CartItem:ShoppingCartItems[]=[];
  
  constructor(private Prdservice:ProductsService ,private router:Router,
    private catedoryservice :CategoryService,
    private prdApiservice:ProductAPIService ) {
    this.catedoryservice.getAllCateogories().subscribe(catlist=>{
      this.CategoryList=catlist;
      console.log(catlist[0]["id"]);
    });

  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {



  }
  // checkout(){
  //   for (let item of this.ProductsCompObj.Prdservice.getAllProducts()) {
  //     var prd=this.CartItem.find(p=>p.ProductId==item.id)
  //     if(prd){
  //       item.quantity-=prd.SelectedQuantity;
  //     }
  //   }
  //   this.CartItem=[];
  // }


  AddToCart(Item:ShoppingCartItems){
    this.CartItem.push(Item);

  }


Increase(itemcount:any){
  itemcount.value++;
 }
 Decrease(itemcount:any){
   itemcount.value--;

 }

RemoveFromCard(id:number)

  {

    let RemovedProduct=this.CartItem.find(el=>el.ProductId==id)

    const index=this.CartItem.indexOf(RemovedProduct!);

    this.CartItem.splice(index,1);
}
OpenDetails(PrdID:number){
  this.router.navigate(['/Products',PrdID])
}



}
