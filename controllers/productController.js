import ProductService from '../services/ProductService';
import AppConstants from '../constatnts/constants';

class ProductController {
  getAllProducts(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'success',
      ProductList: ProductService.getAllProducts(),      
    });
  }

  getAllProductsByState(req, res) {
    let filteredByState = ProductService.getProductsByState(req.params.state);
    
    if(filteredByState && filteredByState.length > 0 ) {
        return res.status(200).send({
            success: 'true',
            message: 'success',
            ProductList: filteredByState,      
          });
    }
    else {
        return res.status(404).send({
            success: 'false',
            message: 'product does not exist',
          });
    }
  } 
  
  updateProductState(req, res) {
    const productId = parseInt(req.params.productId);
    const newState = req.params.newState;
    let message = ProductService.TransferProductState(productId,newState);

    if(message === AppConstants.PRODCUT_NOT_FPUND) {
      return res.status(404).send({
        success: 'false',
        message: message,              
      });
    }
    else {
      return res.status(200).send({
        success: 'true',
        message: message,              
      });
    }
  }  
}

const productController = new ProductController();
export default productController;

