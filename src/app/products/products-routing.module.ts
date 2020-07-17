import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component'
const routes: Routes = [
  { path:'', component:ProductsComponent },
  { path:'cart', component:CartComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
