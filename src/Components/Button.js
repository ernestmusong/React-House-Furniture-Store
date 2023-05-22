import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({ text, className }) {
  return (
    <button type="button" className={className}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
