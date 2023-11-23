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

  const body = JSON.stringify({
    name,
    email,
    password,
  })

  const response = await fetch(`${URLAPI}/api/user/register`, {
    method: 'POST',
    body,
  })

  console.log(await response.json())

}