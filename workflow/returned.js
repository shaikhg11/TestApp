import State from './state';
class Returned extends State {
    constructor() {
        super('Returned');
        this.nextStates = ["Draft", "Deleted"];
    }

    currentStateLable() {
        return 'Product Returned';
    }

    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Returned;