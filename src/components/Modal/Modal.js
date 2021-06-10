import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleOverlayClick}>
        <div className={style.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}