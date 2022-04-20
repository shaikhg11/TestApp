import db from '../db/categorydb';
import fs from 'fs';

class CategoryService {
    constructor(){
    }

     static getAllCattegories() {
          return db.getCategoryList()
     }

     static async getResult() {
          let result = this.promiseGetDataFromFile('./data/categorydata.json');
          return result;
     }

     static async getData() {
          let data = await this.getResult();
          console.log(data)
     }

     static getCategory(parentId) {
          let cattegoryList= null; 
          
          if(parentId) {       
               cattegoryList = db.getCategoryList().filter((catteogry)=> {
               return catteogry.parentId ==  parentId;
               });
          } else {
               cattegoryList = db.getCategoryList();
          }
         
          return cattegoryList;
     }

     static promiseGetDataFromFile(fileName) {
          return new Promise((resolve, reject) => {
               setTimeout(function(){
                    resolve({'country' : 'INDIA'});
                  },2000)
             })
     }
}

export default CategoryService;
