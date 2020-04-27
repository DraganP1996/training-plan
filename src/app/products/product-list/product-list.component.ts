import { Component, OnInit, Inject } from '@angular/core';
//import { finalize } from 'rxjs/operators';

//import { QuoteService } from './quote.service';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[];
  searchTerm: string;
  constructor(private dataService: ProductsService, private matDialog: MatDialog) {
    this.dataService.getData().subscribe((data) => (this.products = data));
  }

  openDialog(product: Product) {
    const dialogRef = this.matDialog.open(ProductDialog, {
      width: '650px',
      data: product,
    });
  }
}

@Component({
  selector: 'product-dialog',
  templateUrl: 'product-dialog.html',
})
export class ProductDialog {
  constructor(public dialogRef: MatDialogRef<ProductDialog>, @Inject(MAT_DIALOG_DATA) public product: Product) {}
  closeDialog() {
    this.dialogRef.close();
  }
}