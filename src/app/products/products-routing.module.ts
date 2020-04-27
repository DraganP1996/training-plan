import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { ProductListComponent } from './product-list/product-list.component';
import { MockListComponent } from './product-mock-list/mock-list.component';

const routes: Routes = [Shell.childRoutes([{ path: 'list', component: ProductListComponent }, 
                                           {path: 'mock-list', component: MockListComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductsRoutingModule {}