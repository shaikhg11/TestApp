import State from './state';

class Draft extends State {
    constructor() {
        super('Draft');
        this.nextStates = ["Available", "DeletedDraft"];
    }

    currentStateLable() {
        return 'Product Drafted';
    }
    
    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default Draft;