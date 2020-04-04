import { observable, flow } from 'mobx';
import axios from 'axios';

export default class Weather {
    @observable data = {
      city: '',
      img: '',
      sky: '',
      date: '',
      toggle: false
    };

    constructor(root) {
      this.root = root;
    }

    getWeatherData = flow(function *(payload) {
      this.data.toggle = false;
      try {
        let result = yield this.fetchData(payload);
        if (result.status === 200) {
          let { city, image_url, current } = result.data;
          this.data.city = city;
          this.data.img = image_url;
          this.data.sky = current.weather;
          this.data.date = current.date.match(/\d{4}-\d{2}-\d{2}/)[0];
          this.data.toggle = !this.data.toggle;
        }
      } catch (err) {
        console.log(`Error ${err}`);
      }
    });

    fetchData(city) {
      const baseURL = 'https://abnormal-weather-api.herokuapp.com';
      return axios.get(`${baseURL}/cities/search`, {
        params: { city }
      }).then(res => res);
    }
}
