import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
    name:'filterTable',
    pure: false
})
export class FilterArrayPipe implements PipeTransform{

    newFilteredProductsArray: Product[];

    transform(products: Product[],searchTerm: string): Product[]{
        if(!searchTerm)
            return products;
        else{
            this.newFilteredProductsArray = products.filter(product => 
                                            product.title.startsWith(searchTerm.toLowerCase().trim()));
            if(this.newFilteredProductsArray.length > 0)
                return this.newFilteredProductsArray;            
        }       
    }
}
