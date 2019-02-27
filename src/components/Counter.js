import React, { Component } from 'react';

import '../css/counter.css'

class Counter extends Component {
    addCount = (type) => {
        const { onIncrement, onDecrement } = this.props
        if (type === 'increase') return onIncrement()
        if (type === 'decrease') return onDecrement()
    }
    render() {
        const { count } = this.props

        return (
            <div className="counter">
            <h2>Counter (redux)</h2>
            <button className="button-increase" onClick={this.addCount.bind(this, 'increase')}>+</button>
            <span className="count-value">{count.result}</span>
            <button className="button-decrease" onClick={this.addCount.bind(this, 'decrease')}>-</button>
            <div className="count-type">
                Count title : <span className="type-txt">{count.title || 'waiting..'}</span>
            </div>
            </div>
    )};
};

export default Counter;
