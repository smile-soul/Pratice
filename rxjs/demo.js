
class Producer {
    constructor() {
        this.listener = []
    };
    addListener(functions) {
        if(!(typeof functions === 'function')) {
            throw new Error('it is not funciton')
        } else {
            this.listener.push(functions);
        }
    };
}