import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private subject = new Subject<any>();
  private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'name 1', price: 100, photo: 'p01.jpg' },
            { id: 'p02', name: 'name 2', price: 200, photo: 'p02.jpg' },
            { id: 'p03', name: 'name 3', price: 300, photo: 'p03.jpg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    passData(item) {
        this.subject.next(item);
    }
    getData():Observable<any>{
        return this.subject.asObservable();
    }
    getcartItems(items){
        return items.map((item) =>{
            return this.products.find(product => product.id == item);
        }); 
    }
}
