import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import '../css/counter.css'

@inject((store) => ({ counter: store.counter}))

@observer class Counter extends Component{
    render() {
        const { count, increase, decrease } = this.props.counter;
        return (
            <div className="counter">
                <h2>Counter (mobx)</h2>
                <button className="button-increase" onClick={increase}>+</button>
                <span className="count-value">{count.value}</span>
                <button className="button-decrease" onClick={decrease}>-</button>
                <div className="count-title">
                    Count title : <span className="title-txt">{count.title || 'waiting..'}</span>
                </div>
            </div>
        )
    }
}

export default Counter;
