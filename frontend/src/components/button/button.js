import classNames from 'classnames';
import React from 'react';
import './button.scss';

function Button({ children, size = 'large', color = 'yellow', ...rest}) {
  return (
    <button 
      className={classNames('button', size, color)}
      {...rest}
    >
        {children}
    </button>
  )
};

export default Button;