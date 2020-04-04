import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import '../css/modals.css';
import Modal from './Modal';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };
  }

    handleChange = (value) => {
      this.setState({
        isModal: value
      });
    };

    render() {
      const isModal = this.state.isModal;
      let modal;

      if (isModal) {
        modal = <Modal
          header={<h3>Modal Header</h3>}
          body={<p>Modal Body</p>}
          closeModal={this.handleChange}
        />;
      }

      return (
        <div className="modals">
          <h2>Modals</h2>
          <button 
            className="button-show-modal" 
            onClick={this.handleChange.bind(this, true)}
          >
            Show Modal
          </button>
          <CSSTransitionGroup
            transitionName="modal"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={300}
          >
            {modal}
          </CSSTransitionGroup>
        </div>
      );
    }
}

export default Modals;
