import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../css/colors.css';

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            colorList: []
        }
    }

    componentDidMount() {
        this.refs.input.focus()
    }

    handleChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') return this.addColor()
    }

    addColor = () => {
        if (this.state.color === '') return
        this.setState({
            color: '',
            colorList: [...this.state.colorList, this.state.color]
        })
    }

    deleteColor = (idx) => {
        this.setState({
            colorList: this.state.colorList.filter((color, i) => i !== idx)
        })
    }

    render() {
        return (
            <div className="colors">
                <h2>React</h2>

                { this.state.colorList.length > 0 ?
                    <ul className="color-list">
                        {this.state.colorList.map((color, idx) => {
                            return (
                                <li className="color-txt" key={idx}>
                                    {color}
                                    <button type="button" name="button" onClick={this.deleteColor.bind(this, idx)}>-</button>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <ul></ul>
                }

                {this.state.colorList.length < 5 ?
                    <div className="add-color">
                        <input
                            ref="input"
                            type="text"
                            name="inputColor"
                            value={this.state.color}
                            maxLength="15"
                            placeholder="Please enter a color"
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress} />
                        <button type="button" name="button" onClick={this.addColor}>+</button>
                    </div>
                    :
                    <p className="msg">The list is full.</p>
                }

                <img className="logo" src={logo} alt="React logo"/>
            </div>
        )
    }
}

export default Colors;
