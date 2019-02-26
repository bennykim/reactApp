import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigator.css';

class Navigator extends Component{
    render() {
        const list = [{
            path: '/',
            name: 'Todo'
        }, {
            path: '/grid',
            name: 'Grid'
        }, {
            path: '/modals',
            name: 'Modals'
        }, {
            path: '/counter',
            name: 'Counter'
        }];

        return (
            <div className="navigator">
                <ul>
                    {list.map((router, i) => (
                        <li key={i}>
                            <Link to={router.path}>{router.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };
};

export default Navigator;
