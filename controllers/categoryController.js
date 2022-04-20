/* eslint-disable class-methods-use-this */
import CategoryService  from '../services/CategoryService';

class CategoryController {
  getAllCattegories(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'success',
      Category: CategoryService.getAllCattegories()
    });
  }

  getCategory(req, res) {    
    const cattegoryList = CategoryService.getCategory(req.params.parentId);        
    
    if(cattegoryList && cattegoryList.length > 0 ) {
      return res.status(200).send({
        success: 'true',
        message: 'success',
        cattegoryList,
      });
    }

    return res.status(404).send({
      success: 'false',
      message: 'category does not exist',
    });
  }

  
}

const categoryController = new CategoryController();
export default categoryController;
