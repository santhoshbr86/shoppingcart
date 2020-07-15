import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent, ProductComponent, CartComponent, CartWidgetComponent],
 
})
export class ProductsModule { }
