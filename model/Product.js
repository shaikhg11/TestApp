// Product Data Model
import state from '../workflow/state';
import Draft  from '../workflow/draft';

class Product{
    constructor(productId,productName,productPrice,images,categoryId,state){
        this.productId = productId;
        this.productName  = productName;
        this.productPrice = productPrice;
        this.images = images;
        this.categoryId = categoryId;
        this.state = state;
    }

    static getInitialState() {
        return new Draft();
    }

    setState(state) {
        if (this.validateState(state)) {
            this.state = state;
            console.log(this.state);
            this.state.doWork();
        } else {
            throw 'Invalid state attempt: Cannot move curent state ' + this.state.StateName + ' to ' + state.StateName;
        }

        return "Product State Updated";
    }

    getState() {
        return this.state.currentStateLable();
    }

    validateState(state) {
        const nextPossible = this.state.nextStates;
        var exists = nextPossible.filter(nstat => nstat === state.StateName);
        if (exists && exists.length > 0)
            return true;
        else
            return false;
    }
}

export default Product;