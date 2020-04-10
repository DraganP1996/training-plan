import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Product } from "./models/product.model";


export const REST_URL = new InjectionToken("rest_url");

@Injectable({
    providedIn: 'root',
  })
export class ProductsService {

    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) { }

    // READ
     getData(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url);
    }
    // CREATE
    postData(product: Product): Observable<Product>{
        return this.http.post<Product>(this.url,product);
    }
    //UPDATE
    putData(product: Product): Observable<Product>{
        return this.http.put<Product>(this.url+'/'+product.id,product);
    }
    //DELETE
    deleteData(id: number): Observable<{}>{
        const url = this.url+'/'+id;
        return this.http.delete(url);
    }
 }
