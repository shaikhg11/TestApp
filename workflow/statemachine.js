import Product from "../model/Product";
import Available from './available';
import Reserved from './reserved';
import Sold from './sold';
import Returned from './returned';
import Draft from './draft';

//usage

class WFTester {
    constructor() {
    }
   
   
    static runworkflow() {
        const product = new Product(100,"Dell Latitude 5533","$2500",null,1,new Draft());

       
        

        product.setState(new Available()); // 'Set Avaiable'
        
        
        product.setState(new Reserved()); // 'sET Reserved'
        
        product.setState(new Sold());
        
        product.setState(new Returned());
        
        product.setState(new Draft());
        
        return product.getState();
    }
}

export default WFTester;


