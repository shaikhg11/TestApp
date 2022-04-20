
import Product from "../model/Product";
import Available from '../workflow/available';
import Sold from '../workflow/sold';
import Draft from '../workflow/draft';
import WFTester from '../workflow/statemachine';



describe("WorkFlow Test", () => {
    test('WorkFlow Test', () => {
      WFTester.runworkflow();
      // const product2 = new Product(100,"Dell Latitude 5533","$2500",null,1,new Draft());
      // expect(product2.getState()).toBe('Product Drafted')
    });
   })


   describe("Expects exception due to invalid state move", () => {
    test('Expects exception', () => {
      const product2 = new Product(100,"Dell Latitude 5533","$2500",null,1,new Draft());
      product2.setState(new Available()); // 'Set Avaiable'
        expect(() => {
          productState.setState(new Sold())
        }).toThrow();
    });
   })