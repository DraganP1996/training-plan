import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@app/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { MockListComponent} from './product-mock-list/mock-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterArrayPipe } from '../filterTableArray.pipe';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    //CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ProductsRoutingModule,
    FormsModule,
  ],
  declarations: [MockListComponent, ProductListComponent, FilterArrayPipe],
})
export class ProductsModule {}