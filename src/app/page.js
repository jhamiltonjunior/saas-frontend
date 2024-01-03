"use client"

import React, { useEffect, useState } from 'react';
import { register } from './utils/register.js';
import Message from './components/message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import './style.css';

const App = () => {
  const [mostrarMensagem, setMostrarMensagem] = useState([]);
  const [timeouts, setTimeouts] = useState({});
  let timeoutId;

  const handleRegister = async () => {
    const [returnedMessage, backgroudColor] = await register();
    const newMessage = { text: returnedMessage, id: Date.now(), bg: backgroudColor };
    setMostrarMensagem((prevMessages) => [
      ...prevMessages,
      newMessage
    ])

    timeoutId = setTimeout(() => {
      setMostrarMensagem((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== newMessage.id)
      )
    }, 5000);

    setTimeouts((prevTimeouts) => ({
      ...prevTimeouts,
      [newMessage.id]: timeoutId,
    }));
  };

  const removeMessageImmediately = (id) => {
    clearTimeout(timeouts[id]);
    setMostrarMensagem((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  useEffect(() => {
    // setMostrarMensagem(true);
    const signUpButton = document.querySelectorAll('.signUp');
    const signInButton = document.querySelectorAll('.signIn');
    const container = document.getElementById('container');

    signUpButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add("right-panel-active");
      })
    });

    signInButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove("right-panel-active");
      })
    });

    
  }, []);

  return (
    <>
    <div className="container container-login_register" id="container">
      
      <div className="form-container sign-up-container">
        <form id="register">
          <h1>Cadastrar</h1>
          <div className="social-container">
            <a href="#" className="social primary-color">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <span>Ou use seu email para registrar-se</span>
          <input type="text" placeholder="Nome" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Senha" name="password" required />
          <input type="password" placeholder="Confirmar Senha" name="confirme_password" required />
          <button className="mt-4" onClick={handleRegister}>Registrar</button>
          <p className="ghost-mobile signIn" id="signIn">Fazer Login</p>

        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#" id="login">
          <h1>Entrar</h1>
          <div className="social-container">
          <a href="#" className="social primary-color">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <span>Faça Login</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <a href="#">Esqueceu a senha?</a>
          <button>Login</button>
          <p className="ghost ghost-mobile signUp" id="signUp">
              Registrar-se
          </p>

        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Olá, Amigo!</h1>
            <p>Insira seus dados pessoais e comece sua jornada conosco!</p>
            <button className="ghost signIn" id="signIn">Entrar</button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Bem vindo(a) de volta!</h1>
            <p>Para se manter conectado, faça login com suas informações pessoais</p>
            <button className="ghost signUp" id="signUp">Registrar-se</button>
          </div>
        </div>
      </div>

    </div>

    <div className="message-container">
      {mostrarMensagem.map((message) => (
        <Message
        key={message.id}
        message={message.text}
        removeMessage={removeMessageImmediately} 
        id={message.id} 
        backgroundColor={message.bg} 
        />
      ))}
    </div>
    </>
  );
}

export default App;
