import classNames from 'classnames';
import React from 'react';
import './modal.scss';

function Modal({ children, size = 'medium', close, }) {
  return (
    <div className="modal-wrapper" sytle="display: none;">
      <div className={classNames('modal', size)}>
        {children}
        <button 
          className={classNames('modal', 'close')}
          onClick={close}>X</button>
      </div>
    </div>
  )
}

export default Modal;