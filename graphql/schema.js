import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Category{
        categoryId: Int
        categoryName: String
        parentId: Int
    }
    type Product{
        productName: String
        productPrice: String
        images: [String]
        categoryId: Int
        state:  State
    }

    type State{
        StateName: String
    }

    type Query {
        getCategory(parentId: Int): [Category],
        getProductByState(stateName: String): [Product],
        hello: String
    }  
    
    type Mutation {
        updateProductState(productId:String,newState:String): String
      }
`);

export default schema;