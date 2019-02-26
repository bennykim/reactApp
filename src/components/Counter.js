import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../store/actions/counterActions'

import '../css/counter.css'

class Counter extends Component {
    incrementCount = () => {
        this.props.increment()
    };
    decrementCount = () => {
        this.props.decrement()
    };
    render() {
        return (
            <div className="counter">
                <h2>Counter (redux)</h2>
                <button className="button-increase" onClick={this.incrementCount}>+</button>
                <span className="count-value">{this.props.count.result}</span>
                <button className="button-decrease" onClick={this.decrementCount}>-</button>
                <div className="count-type">
                    Count title : <span className="type-txt">{this.props.count.title || 'waiting..'}</span>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
