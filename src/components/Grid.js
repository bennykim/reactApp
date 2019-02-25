import React, { Component } from 'react';

import '../css/grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortKey: '',
            searchKey: '',
            sortOrders: {},
            gridColumns: ['name', 'age', 'weight'],
            gridData: [{
                name: 'Jack', age: 20, weight: 70
            }, {
                name: 'Lee', age: 30, weight: 88
            }, {
                name: 'Chuck', age: 17, weight: 75
            }, {
                name: 'Ralph', age: 41, weight: 69
            }, {
                name: 'Mark', age: 25, weight: 80
            }]
        };
    };

    componentDidMount() {
        let sortOrders = {};
        this.state.gridColumns.forEach((key) => {
            sortOrders[key] = 1
        });
        this.setState({
            sortOrders: sortOrders
        });
    };

    filterData = () => {
        let data = this.state.gridData;
        let sortKey = this.state.sortKey;
        let searchKey = this.state.searchKey;
        let order = this.state.sortOrders[sortKey] || 1;

        if (searchKey) {
            data = data.filter((row) => {
                return Object.keys(row).some((key) => {
                   return String(row[key]).toLowerCase().indexOf(searchKey) > -1
               });
            });
        };
        if (sortKey) {
            data = data.sort((a, b) => {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order
            });
        };

        return data;
    };

    handleChange = (e) => {
        this.setState({
            searchKey: e.target.value
        });
    };

    sortBy = (key) => {
        let sortOrders = Object.assign({}, this.state.sortOrders);
        sortOrders[key] = sortOrders[key] * -1;

        this.setState({
            sortKey: key,
            sortOrders
        });
    };

    render() {
        return (
            <div className="grid">
                <h2>Grid</h2>

                <input
                    type="text"
                    name="search"
                    value={this.state.searchKey}
                    maxLength="10"
                    placeholder="Please enter keywords"
                    onChange={this.handleChange} />

                <table>
                    <thead>
                        <tr className="thead-tr">
                            {this.state.gridColumns.map((key, i) => (
                                <th key={i} className={this.state.sortKey === key ? 'active': ''}>
                                    {key}
                                    <span
                                        className={`arrow ${this.state.sortOrders[key] > 0 ? 'asc' : 'dsc'}`}
                                        onClick={this.sortBy.bind(this, key)}></span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.filterData().map((item, i)=> (
                            <tr key={i}>
                                {this.state.gridColumns.map((key, j) => (
                                    <th key={j} className={this.state.sortKey === key ? 'active': ''}>{item[key]}</th>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
};

export default Grid;
