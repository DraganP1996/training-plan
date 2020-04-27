import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) },
  {
    path: 'admin',
    loadChildren: () => import('./administration/administration.module').then((m) => m.AdministrationModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}