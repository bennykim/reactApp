import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Todo from './components/Todo';
import Grid from './components/Grid';
import Modals from './components/Modals';
import Counter from './components/Counter';
import Navigator from './components/Navigator';

import { increment, decrement } from './store/modules/counter';

import logo from './assets/logo.svg';
import './css/app.css';

class App extends Component{
    handleIncrement = () => {
        this.props.increment();
    };
    handleDecrement = () => {
        this.props.decrement();
    };
    render() {
        const { count } = this.props;

        return (
            <BrowserRouter>
                <div className="app">
                    <Navigator />

                    <Route exact path="/" component={Todo} />
                    <Route path="/grid" component={Grid} />
                    <Route path="/modals" component={Modals} />
                    <Route path="/counter" component={() => 
                        <Counter
                            count={count}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement} />
                    } />

                    <img className="logo" src={logo} alt="React logo"/>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect((state) => ({
    count: state.counter
}), {
    increment,
    decrement
})(App);
