import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

//import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { ProductsRoutingModule } from './products-routing.module';
//import { HomeComponent } from './home.component';
//import { QuoteService } from './quote.service';
import { ProductListComponent } from './product-list.component';
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
    FormsModule
  ],
  declarations: [ProductListComponent,FilterArrayPipe],
})
export class ProductsModule {}
