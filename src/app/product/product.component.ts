import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../models/product.model';
import { Observable, Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { NotificationService } from '../notification.service';

@Component({
  selector: 'the-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    form: NgForm;
    product: Product;
    observableProducts: Observable<Product[]>;
    idFromUrl: number;
    subscription: Subscription;
    foundProduct: Product;
    create: boolean;

    constructor(
        private productsService: ProductsService, 
        private router: Router, 
        private activatedRoute: ActivatedRoute,
        private notificationService: NotificationService
        ) {
            this.product = new Product(); 
            this.create = true;
    }

    ngOnInit(){
        // Creating a new Obserable<Product[]> which emits an Array of Product using Service's method
        this.observableProducts = this.activatedRoute.paramMap.pipe(  
            tap((paramMap: ParamMap) => {
                this.idFromUrl = parseInt(paramMap.get('id'));
            }),
            switchMap((paramMap: ParamMap) => 
                this.productsService.getData())
        );
            // Find the Product in db.json with the same id of the id in the URL
        this.subscription = this.observableProducts.subscribe((products: Product[]) => {
            this.foundProduct = products.find((product) => product.id == this.idFromUrl);
            // Handle the behavior of the form (Create/Update mode) using the create boolean proprety
            if(this.foundProduct){
                this.create = false; 
                this.product = this.foundProduct;
            }
            else{
                this.create = true;
            }
        });        
    }

    formMode(){
        if(this.create)
            this.sendData();
        else
            this.updateData();
    }

    // Method for the creation od new Product object in db.json
    sendData(){

        // Since startsWith method used in the filterTableArray pipe is case sensitive, the following 
        // line of code will set all the characters of title proprety to lowercase for better filtering
        this.product.title = this.product.title.toLowerCase().trim();

        this.productsService.postData(this.product).subscribe((product)=>
            {
                this.notificationService
                    .showNotification("Product "+product.title.toUpperCase()+" added !");
;               this.router.navigate(['admin/products']);
            },
                error =>{
                    this.notificationService.showNotificationError(error);
        });   
    }
    updateData(){
        this.product.title = this.product.title.toLowerCase().trim();
        this.productsService.putData(this.product).subscribe(
            product=>
                {
                    this.notificationService
                    .showNotification("Product "+product.title.toUpperCase()+" updated !");
                    this.router.navigate(['admin/products']);        
                },
            error => 
            {
                this.notificationService.showNotificationError(error);
            }   
        );
    }
}
