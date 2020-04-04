import { observable, action } from 'mobx';

export default class Counter {
    @observable count = {
      title: '',
      value: 0
    }

    constructor(root) {
      this.root = root;
    }

    @action increase = () => {
      this.count.value++;
      this.count.title = 'increment';
    };

    @action decrease = () => {
      this.count.value--;
      this.count.title = 'decrement';
    };
}
