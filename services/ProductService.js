import db from '../db/productdb';

import Available from '../workflow/available';
import Expired from '../workflow/expired';
import Returned from '../workflow/returned';
import Reserved from '../workflow/reserved';
import Sold from '../workflow/sold';
import Draft from '../workflow/draft';
import AppConstants from '../constatnts/constants';

class ProductService {
    constructor(){
    }

     static getAllProducts() {
          return db.getAllProducts();
     }

     static getProductsByState(state) {
        return db.getAllProducts().filter((product)=> {
            return product.state.StateName ===  state;
        });
     }

     static TransferProductState(productId,newState) {
        let product = db.getAllProducts().filter((product)=> {
            return product.productId ===  productId;
          });

          if(product && product.length === 1 ) {   
            return product[0].setState(this.getStateObject(newState));
          } 
          return AppConstants.PRODCUT_NOT_FPUND;
      }

      static getStateObject(newState) {
        switch(newState) {
          case "Available":
            return new Available();
            break;
          case "Expired":
            return new Expired();
            break;
            case "Reserved":
              return new Reserved();
              break;
              case "Sold":
              return new Sold();
              break;
              case "Returned":
              return new Returned();
              break;              
          default:
            return new Draft();
        }
      }
}

export default ProductService;
