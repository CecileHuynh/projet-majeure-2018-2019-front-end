import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ className, content, onClickType }) => (
  <button
    className={`Button ${className}`}
    onClick={onClickType}
    type="button"
  >
    {content}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickType: PropTypes.func.isRequired,
};

export default Button;
