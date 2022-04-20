import ProductService from '../services/ProductService';

describe("Get All Products Test", () => {
    test('Check data', () => {
         let data = ProductService.getAllProducts();
         expect(data.length > 0).toBeTruthy();
    });
})

describe("Update Product State", () => {
    test('Update data', () => {
         let data = ProductService.TransferProductState(1,"Available");
         expect(data.length > 0).toBeTruthy();
    });
})

describe("Update Product State", () => {
    test('Update data', () => {
         expect(() => {
            ProductService.TransferProductState(1,"Expired");
          }).toThrow();
    });
})

