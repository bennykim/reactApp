import React, { Component } from 'react';

import '../css/modal.css';

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-mask">
                    <div className="modal-wrapper">
                      <div className="modal-container">
                          {this.props.header}
                          {this.props.body}
                          <button onClick={this.props.closeModal.bind(this, false)}>OK</button>
                      </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Modal;
