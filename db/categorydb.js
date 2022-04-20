import Category from '../model/Category';

class CategpryDatabase {
  constructor() {}

  //* Creates list of categories sample data*/
  static getCategoryList() {
    const cat1 = new Category(1, 'Electronic Devices', null);
    const cat2 = new Category(2, 'Smart Phones', 1);
    const cat3 = new Category(3, 'Laptop', 1);
    const cat4 = new Category(4, 'Apple iPhones', 2);
    const cat5 = new Category(5, 'Gaming Laptops', 3);
    const cat6 = new Category(6, 'Redmi Mobiles', 2);
    const cat7 = new Category(6, 'Fashion', null);
    const cat8 = new Category(7, 'Health And Beauty', null);
    const cat9 = new Category(8, 'Electronic Accessories', null);

    const CategorList = [];
    CategorList.push(cat1);
    CategorList.push(cat2);
    CategorList.push(cat3);
    CategorList.push(cat4);
    CategorList.push(cat5);
    CategorList.push(cat6);
    CategorList.push(cat7);
    CategorList.push(cat8);
    CategorList.push(cat9);
    return CategorList;
  }
}

export default CategpryDatabase;
