import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { AllProductsComponent } from './all-products.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'products', component: AllProductsComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/:id', component: ProductComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdministrationRoutingModule {}