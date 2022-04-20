import State from './state';

class DeletedDraft extends State {
    constructor() {
        super('DeletedDraft');
        this.nextStates = [];
    }

    currentStateLable() {
        return 'DeletedDraft Returned';
    }
    
    doWork() {
        console.log('Doing work in ' + this.StateName);
    }
}
export default DeletedDraft;