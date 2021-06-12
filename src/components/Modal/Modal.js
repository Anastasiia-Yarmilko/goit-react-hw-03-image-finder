import React, { Component } from 'react';
import style from './Modal.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.closeOnEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeOnEscape);
  }

  closeOnEscape = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  handelCloseModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    return (
      <div className={style.Overlay} onClick={this.handelCloseModal}>
         <div className={style.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;