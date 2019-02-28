import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Store from './store';

import './css/index.css';
import App from './App';

const root = new Store()

ReactDOM.render(
    <Provider {...root}>
        <App/>
    </Provider>,
    document.getElementById('root'));
