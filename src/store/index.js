import Counter from './modules/counter';
import Weather from './modules/weather';

class Store {
  constructor() {
    this.counter = new Counter(this);
    this.weather = new Weather(this);
  }
}

export default Store;
