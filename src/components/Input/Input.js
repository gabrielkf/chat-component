import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder=""
      value={message}
      onChange={({ target: { value } }) =>
        setMessage(value)
      }
      onKeyPress={event =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <button
      type="submit"
      className="sendButton"
      onClick={e => sendMessage(e)}
    >
      Enviar
    </button>
  </form>
);

Input.propTypes = {
  setMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Input;
