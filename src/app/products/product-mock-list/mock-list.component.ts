import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Product } from '../../models/product.model';

import { MatDialog } from '@angular/material/dialog';
import { ProductDialog } from '../product-list/product-list.component';
@Component({
    selector:'mock-list',
    templateUrl:'./mock-list.component.html',
    styleUrls: ['./mock-list.component.css']
})
export class MockListComponent {
    products: Product[];
    searchTerm: string;
    constructor(public dataService: DataService, public matDialog: MatDialog){
        this.products = new Array();
        this.dataService.getProducts().subscribe(p => this.products.push(p));
    }

    openDialog(product: Product) {
        const dialogRef = this.matDialog.open(ProductDialog, {
          width: '650px',
          data: product,
        });
      }    
}