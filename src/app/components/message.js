import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'



const Message = ({ message, backgroundColor, setMostrarMensagem, id, timeouts }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      removeMessageImmediately(id);
    }, 500);
  };

  const removeMessageImmediately = (id) => {
    clearTimeout(timeouts[id]);
    setMostrarMensagem((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  return <div 
  className={`mensagem relative border-b-2 ${isClosing ? 'closing' : ''}`}
  // style={{ backgroundColor: `${backgroundColor}` }}
  style={{
    backgroundColor: '#F6F6F9',
    color: '#1b1b1b'
  }}
  onClick={handleClose}
  >
    {message}
    <div className="close">
      <FontAwesomeIcon icon={faXmark} />
    </div>

    <div
      className={'absolute bottom-0 left-0 loading-time-message'}
      style={{
      backgroundColor: backgroundColor,
      width: '100%',
      height: '4px',
    }}></div>
  </div>;
};

export default Message;
