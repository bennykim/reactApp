import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import '../css/async.css';

@inject((store) => ({ weather: store.weather}))

@observer class Async extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'Seoul',
            list: ['Seoul', 'Tokyo', 'Beijing', 'Toronto']
        };
    };

    componentDidMount() {
        this.getWeather('Seoul');
    };

    getWeather = (city) => {
        this.state.isActive = city;
        this.props.weather.getWeatherData(city);
    };

    render() {
        const { weather, getWeatherData } = this.props.weather;
        return (
            <div className="async">
                <h2>Async Actions</h2>
                {this.state.list.map((item) => (
                    <button
                        key={item}
                        className={item === this.state.isActive ? 'active' : ''}
                        onClick={this.getWeather.bind(this, item)}>{item}</button>
                    ))}
                {weather.toggle ?
                    <div className="wrapper">
                        <p>City: <span>{weather.city}</span></p>
                        <p>Weather: <span>{weather.sky}</span></p>
                        <p>Date: <span>{weather.date}</span></p>
                        <img src={weather.img} alt="weather_img" />
                    </div>
                    :
                    <p className="loading">Loading...</p>}
            </div>
        )
    };
};

export default Async;
