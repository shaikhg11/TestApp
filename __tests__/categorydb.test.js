import db from '../db/categorydb';

describe("Get All Cattegories Test", () => {
    test('Check data', () => {
         let data = db.getCategoryList();
         expect(data.length > 0).toBeTruthy();
    });
})
