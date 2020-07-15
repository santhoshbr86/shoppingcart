import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model/item';
import { ProductService} from '../../services/product.service';
@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {
  public items=[];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getData().subscribe(dat =>{
           this.items.push(dat);
    });
  }

}
