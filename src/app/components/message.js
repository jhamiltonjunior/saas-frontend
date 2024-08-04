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
  className={`mensagem ${isClosing ? 'closing' : ''}`}
  style={{ backgroundColor: `${backgroundColor}` }}
  onClick={handleClose}
  >
    {message}
    <div className="close">
      <FontAwesomeIcon icon={faXmark} />
    </div>
  </div>;
};

export default Message;
