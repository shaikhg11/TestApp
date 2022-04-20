import State from './state';

class Sold extends State {
    constructor() {
        super('Sold');
        this.nextStates = ["Returned"];
    }

    currentStateLable() {
        return 'Product Sold';
    }
    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Sold;