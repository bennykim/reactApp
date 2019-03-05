import { observable, flow } from 'mobx';
import axios from 'axios';

export default class Weather {
    @observable weather = {
        city: '',
        img: '',
        sky: '',
        date: '',
        toggle: false
    };

    constructor(root) {
        this.root = root;
    };

    getWeatherData = flow(function *(payload) {
        this.weather.toggle = false;
        try {
            let result = yield this.fetchData(payload);
            if (result.status === 200) {
                let { city, image_url, current } = result.data;
                this.weather.city = city;
                this.weather.img = image_url;
                this.weather.sky = current.weather;
                this.weather.date = current.date.match(/\d{4}-\d{2}-\d{2}/)[0];
                this.weather.toggle = !this.weather.toggle;
            }
        } catch (err) {
            console.log(`Error ${err}`);
        };
    });

    fetchData(city) {
        const baseURL = 'https://abnormal-weather-api.herokuapp.com';
        return axios.get(`${baseURL}/cities/search`, {
            params: { city }
        }).then(res => res)
    };
};
