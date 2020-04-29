import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable, from, of } from 'rxjs';
import { take } from 'rxjs/operators';

//This service will not display the images of the product, this functionality will be available in the HTTP service
@Injectable({
  providedIn: 'root',
}) 
export class DataService {
  products: Product[];
  constructor( ) {
    this.products = new Array();
    for(let i = 0; i < 10; i++)
    {
      this.products.push(new Product(i,'title product'+i,'Description of the product'+i,i*10,'Image of the product'+i,(i*10).toString()))
    }
  }

  getProducts(): Observable<Product> {
    return from(this.products).pipe(take(10));
  }
}