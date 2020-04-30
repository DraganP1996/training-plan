import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Product } from '../../models/product.model';

@Component({
    selector:'mock-list',
    templateUrl:'./mock-list.component.html',
    styleUrls: ['./mock-list.component.css']
})
export class MockListComponent {
    products: Product[];
    searchTerm: string;
    constructor(public dataService: DataService){
        this.products = new Array();
        this.dataService.getProducts().subscribe(p => this.products.push(p));
    }
}