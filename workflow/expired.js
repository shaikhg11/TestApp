import State from './state';
class Expired extends State {
    constructor() {
        super('Expired');
        this.nextStates = [];
    }

    currentStateLable() {
        return 'Product Expired';
    }
    
    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Expired;