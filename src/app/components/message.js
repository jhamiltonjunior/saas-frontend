import React, { useState, useEffect } from 'react';

const Message = ({ message }) => {
  // const [mostrarMensagem, setMostrarMensagem] = useState(false);

  // useEffect(() => {
  //   // Exibe a mensagem por 3 segundos
  //   setMostrarMensagem(true);
  //   const timer = setTimeout(() => {
  //     setMostrarMensagem(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [mensagem]);

  return <div className="mensagem">{message}</div>;
};

export default Message;
