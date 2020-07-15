import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService} from '../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  addTocart(id){
    this.productService.passData(id);
  }
}
