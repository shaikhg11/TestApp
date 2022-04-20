import express from 'express';
import categoryController from '../controllers/categoryController';
import productController from '../controllers/productController';

import swaggerUi    from 'swagger-ui-express';
import swaggerDocument from './swagger.json';



const router = express.Router();

router.get('/api/v1/GetAllCattegories', categoryController.getAllCattegories);
router.get('/api/v1/CategoryList/:parentId?', categoryController.getCategory); //http://localhost:5000/api/v1/CategoryList/1

router.get('/api/v1/GetAllProducts', productController.getAllProducts);
router.get('/api/v1/GetProductsByState/:state', productController.getAllProductsByState); ///http://localhost:5000/api/v1/GetProductsByState/Draft

//http://localhost:5000/api/v1/UpdateProductState/1/Available (Success Case)
//http://localhost:5000/api/v1/UpdateProductState/1/Expired (Throw Exception Case)
router.post('/api/v1/UpdateProductState/:productId/:newState', productController.updateProductState);

/* Setup swagger */
router.use('/api/v1/api-docs', swaggerUi.serve);
router.get('/api/v1/api-docs', swaggerUi.setup(swaggerDocument));



export default router;
