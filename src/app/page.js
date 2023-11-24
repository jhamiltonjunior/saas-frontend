"use client"

import React, { useEffect, useState } from 'react';
import { register } from './utils/registerAndLogin.js';
import Message from './components/message';
import './style.css';

const App = () => {
  const [mostrarMensagem, setMostrarMensagem] = useState([]);
  let i = 0
  const handleRegister = async () => {
    const returnedMessage = await register();
    i=1
    const newMessage = { text: returnedMessage+i, id: Date.now() };
    setMostrarMensagem((prevMessages) => [
      ...prevMessages,
      newMessage
    ])
    // setMessage(returnedMessage)

    setTimeout(() => {
      setMostrarMensagem((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== newMessage.id)
      )
    }, 8000);
  };

  useEffect(() => {
    // setMostrarMensagem(true);
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    
  }, []);

  return (
    <>
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form id="register">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <button className="mt-4" onClick={handleRegister}>Registrar</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Olá, Amigo!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <div className="message-container">
      {mostrarMensagem.map((message) => (
        <Message key={message.id} message={message.text} />
      ))}
    </div>
    </>
  );
}

export default App;
