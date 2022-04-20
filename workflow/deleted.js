import State from './state';

class Deleted extends State {
    constructor() {
        super('Deleted');
        this.nextStates = [];
    }

    currentStateLable() {
        return 'Product Deleted';
    }

    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Deleted;