import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems:Product[];
  constructor(private router: Router, private activeRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      console.log(this.productService.getcartItems(params.id));
      this.cartItems = this.productService.getcartItems(params.id);
     });

  }

}
