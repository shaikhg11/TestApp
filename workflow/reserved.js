import State from './state';
class Reserved extends  State {
    constructor() {
        super('Reserved');
        this.nextStates = ["Sold"];
    }

    currentStateLable() {
        return 'Product Reserved';
    }

    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Reserved;