const URLAPI = 'http://localhost:3001';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {setMessage} from '../utils/setMessage';

export async function register() {
  const registerForm = document.getElementById('register');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const form = new FormData(registerForm);

  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');

  const body = JSON.stringify({
    name,
    email,
    password,
  })

  const response = await fetch(`${URLAPI}/api/user/register`, {
    method: 'POST',
    body,
  })
  const json = await response.json();
  
  // setMostrarMensagem(false);
  // setMostrarMensagem(true);
  // const timer = setTimeout(() => {
  //   setMostrarMensagem(false);
  // }, 3000);
  if (json.message === 'name is invalid') {
    return 'O nome é inválido, tente algo como "João Silva"';
  }

  return json.message
}