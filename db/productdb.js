import Product from '../model/Product';
import Draft from '../workflow/draft';
import Available from '../workflow/available';
import Expired from '../workflow/expired';
import Returned from '../workflow/returned';
import Reserved from '../workflow/reserved';

class ProductDatabase {
  constructor() {}

  //* Creates list of categories sample data*/
  static getAllProducts() {
    const product1 = new Product(1,"Dell Latitude","$2000",null,1,new Draft());
    const product2 = new Product(2,"Acer Inspiron","$2000",null,1,new Available());
    const product3 = new Product(3,"iPhone 13","$1200",null,2,new Draft());
    const product4 = new Product(4,"Acer Inspiron2","$2000",2,null,new Draft());
    const product5 = new Product(5,"Acer Inspiron2","$2000",1,null,new Expired());
    const product6 = new Product(6,"TCL LED","$700",null,2,new Returned());
    const product7 = new Product(7,"Haier LED","$750",null,2,new Reserved());
   
    const productList = [];
    productList.push(product1);
    productList.push(product2);
    productList.push(product3);
    productList.push(product4);
    productList.push(product5);
    productList.push(product6);
    productList.push(product7);

    return productList;
  }
 
}

export default ProductDatabase;
