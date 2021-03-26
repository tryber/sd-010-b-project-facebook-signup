/* alerta */
const bot = document.getElementById('button-login');
const inputEmailTel = document.getElementById('user-email-phone');
bot.addEventListener('click', () => window.alert(inputEmailTel.value));

/* check de preenchimento */

/* genero personalizado  */

function genero() {
  const divGenero = document.querySelector('#genderPersonalizado');
  const inputGender = document.createElement('input');
  const input = divGenero.appendChild(inputGender);
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
}

const personalizado = document.querySelector('#personalizado');

function clicaPersonalizado() {
  personalizado.addEventListener('change', genero);
}

clicaPersonalizado();
