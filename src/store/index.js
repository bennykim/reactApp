import Counter from './modules/counter';

class Store {
    constructor() {
        this.counter = new Counter(this);
    }
}

export default Store;
