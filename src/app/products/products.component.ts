import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products:Product[];
  searchText='';
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.products = this.productService.findAll();
  }
}
