import { Product } from '../models/product.model';
import { Observable, from, of } from 'rxjs';

export class DataService {
    products: Product[];
    constructor(){
        this.products = [
            new Product(0,'a','aa',0,'image a','0'),
            new Product(24,'aa','aa',0,'image a','0'),
            new Product(1,'b','bb',10,'image a','0'),
            new Product(28,'bb','bb',10,'image a','0'),
            new Product(2,'c','cc',20,'image a','0'),
            new Product(27,'cc','cc',20,'image a','0'),           
            new Product(3,'d','dd',30,'image a','0'),
            new Product(4,'e','ee',40,'image a','0'),
            new Product(5,'f','ff',50,'image a','0'),
            new Product(6,'g','gg',60,'image a','0'),
            new Product(7,'h','hh',70,'image a','0'),
            new Product(8,'i','ii',80,'image a','0'),
            new Product(8,'ii','ii',80,'image a','0'),           
            new Product(9,'l','ll',110,'image a','0'),
            new Product(10,'m','mm',120,'image a','0'),
            new Product(11,'n','nn',130,'image a','0'),
            new Product(25,'nn','nn',130,'image a','0'),
            new Product(12,'o','oo',140,'image a','0'),
            new Product(26,'ooo','oo',140,'image a','0'),
            new Product(23,'oo','oo',140,'image a','0'),           
            new Product(13,'p','pp',1510,'image a','0'),
            new Product(14,'q','qq',130,'image a','0'),
            new Product(15,'r','rr',13120,'image a','0'),
            new Product(16,'s','ss',130,'image a','0'),
            new Product(21,'ss','ss',130,'image a','0'),
            new Product(17,'t','tt',20,'image a','0'),
            new Product(22,'tt','tt',20,'image a','0'),            
            new Product(18,'u','uu',10,'image a','0'),
            new Product(19,'v','vv',111110,'image a','0'),
            new Product(19,'vv','vv',111110,'image a','0'),
            new Product(20,'z','zz',90,'image a','0')];
    }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }
    

}