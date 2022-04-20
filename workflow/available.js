import State from './state';

class Available extends State {
    constructor() {
        super('Available');
        this.nextStates = ["Expired", "Reserved", "Deleted"];
    }
    currentStateLable() {
        return 'Product Available';
    }

    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Available;