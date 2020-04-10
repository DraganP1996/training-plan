import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

//import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule } from '@angular/forms';
import{ MatDialogModule } from '@angular/material/dialog';


import { AllProductsComponent } from './all-products.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    //CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    AdministrationRoutingModule
  ],
  declarations: [AllProductsComponent, ProductComponent],
})
export class AdministrationModule {}
