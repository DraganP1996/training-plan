import { Component, OnInit, Inject } from '@angular/core';

import { ProductsService } from '../core/services/products.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: Product[];
  constructor(
    private dataService: ProductsService,
    private router: Router,
    private matDialog: MatDialog,
    private notificationService: NotificationService
  ) {
    this.dataService.getData().subscribe((data) => (this.products = data));
  }

  changeRoute() {
    this.router.navigate(['admin/product']);
  }

  editProduct(id: number) {
    this.router.navigate(['admin/product/' + id]);
  }
  deleteProduct(id: number) {}
  openDialog(product: Product) {
    const dialogRef = this.matDialog.open(DeleteDialog, {
      width: '350px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.deleteData(product.id).subscribe(
          () => this.notificationService.showNotification('Product deleted !'),
          (error) => this.notificationService.showNotificationError(error)
        );
        this.products = this.products.filter((p) => p != product);
      }
    });
  }
}
@Component({
  selector: 'delete-product-dialog',
  templateUrl: 'delete-product-dialog.html',
})
export class DeleteDialog {
  constructor(public dialogRef: MatDialogRef<DeleteDialog>) {}

  closeDialog(boo: boolean) {
    this.dialogRef.close(boo);
  }
}