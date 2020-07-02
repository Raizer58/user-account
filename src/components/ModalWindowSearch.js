import React from 'react';
import PropTypes from 'prop-types';

import StyleModalWindowSearch from './style.ModalWindowSearch';

const ModalWindowSearch = ({ handlerClick, dataSearch }) => {
  const {
    firstName,
    lastName,
    organization,
    email,
    phone,
  } = dataSearch;

  return (
    <StyleModalWindowSearch>
      <p>
        <span className="name">Name:</span>
        <span className="value">
          {`${firstName} ${lastName}`}
        </span>
      </p>
      <p>
        <span className="name">Organization:</span>
        <span className="value">{organization}</span>
      </p>
      <p>
        <span className="name">Email:</span>
        <span className="value">{email}</span>
      </p>
      <p>
        <span className="name">Pnohe:</span>
        <span className="value">{phone}</span>
      </p>
      <button
        type="button"
        onClick={() => handlerClick()}
      >
        Close contact
      </button>
    </StyleModalWindowSearch>
  );
};

ModalWindowSearch.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  dataSearch: PropTypes.object.isRequired,
};

export default ModalWindowSearch;
