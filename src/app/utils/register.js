import { validateMessage } from "./validadeJSONMessage";

const URLAPI = 'http://localhost:3001';

export async function register() {
  const registerForm = document.getElementById('register');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const form = new FormData(registerForm);

  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  const confirmePassword = form.get('confirme_password');

  if (password !== confirmePassword) {
    return ['As senhas não são iguais', 'ff4b2b']
  }

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
  let bgColor = ''
  if (json.status === 'error') {
    bgColor = 'ff4b2b'
  } else if (json.status === 'success') {
    bgColor = '3FAA76'
  } else {
    bgColor = '3cd83f'
  }

  console.log(json)

  const message = validateMessage(json.message);

  return [message, bgColor]
}