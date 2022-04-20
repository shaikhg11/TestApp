import db from '../db/categorydb';
import dbProduct from '../db/productdb';

//brain part : Resolver that resolves incoming query
/* These are the functions that will be resolved while making a request to /graphql URL */

const resolvers={
    getCategory : ({parentId})=>{        
        if(parentId) {
            return db.getCategoryList().filter((catteogry)=> {
                return catteogry.parentId ==  parentId;
              }); 
        }

        return  db.getCategoryList();
    },
    hello: () => {
        return 'GraphQL Running Test';
    } ,
    getProductByState : ({stateName})=>{        
        return dbProduct.getAllProducts().filter((product)=> {
            return product.state.StateName ==  stateName;
          }); 
    },

    updateProductState : ({productId},{stateName})=>{      
        let product = db.getAllProducts().filter((product)=> {
            return product.productId ===  parseInt(productId);
          }); 
          
          if(product) {
            return db.product.TransferProductState(product,stateName)
          }
        return "Product not found";
    }
    
    
}

export default resolvers;