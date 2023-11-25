import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'



const Message = ({ message, backgroundColor, removeMessage, id }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      removeMessage(id);
    }, 500);
  };

  return <div 
  className={`mensagem ${isClosing ? 'closing' : ''}`}
  style={{ backgroundColor: `#${backgroundColor}` }}
  onClick={handleClose}
  >
    {message}
    <div className="close">
      <FontAwesomeIcon icon={faXmark} />
    </div>
  </div>;
};

export default Message;
