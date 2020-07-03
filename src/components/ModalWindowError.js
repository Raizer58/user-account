import React from 'react';
import PropTypes from 'prop-types';

import StyleModalWindowError from './style.ModalWindowError';

const ModalWindowError = ({ error, closeError }) => (
  <StyleModalWindowError>
    <p>{error}</p>
    <button type="button" onClick={closeError}>
        Close error
    </button>
  </StyleModalWindowError>
);

ModalWindowError.propTypes = {
  closeError: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default ModalWindowError;
