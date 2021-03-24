const buttonLogin = document.querySelector('#button-login');
const nomeSenha = document.querySelector('#user-email-phone');
const divold = document.querySelector('.right-content');
const divmain = document.querySelector('.main-content');
const buttonSalvar = document.querySelector('#facebook-register');
const input = document.querySelectorAll('input');
const mensagem = document.querySelector('#mensagem');

function info(string, genero, index) {
  if (index === 6) {
    string.push(genero.value);
    divold.remove();
    const div = document.createElement('div');
    div.className = 'right-content';
    divmain.appendChild(div);
    const p = document.createElement('p');
    const resto1 = `Data de Nascimento ${string[4]}. Gênero ${string[5]}`;
    const resto2 = `Celular/Email ${string[2]}`;
    p.innerHTML = `Olá, ${string[0]} ${string[1]}. ${resto2}. ${resto1}`;
    div.appendChild(p);
  }
}

buttonLogin.addEventListener('click', () => {
  alert(nomeSenha.value);
});

buttonSalvar.addEventListener('click', (event) => {
  event.preventDefault();
  const string = [];
  for (let index = 2; index < (input.length - 3); index += 1) {
    const genero = document.querySelector('input[name="gender"]:checked');
    if (input[index].value === '' || genero == null) {
      mensagem.innerHTML = 'Campos inválidos';
      mensagem.style.color = 'red';
      break;
    } else {
      string.push(input[index].value);
      info(string, genero, index);
    }
  }
});

const personalizado = document.querySelector('#personalizado');
const div = document.querySelector('#campo-personalizado');

personalizado.addEventListener('click', () => {
  const input2 = document.createElement('input');
  const feminino = document.querySelector('#feminino');
  const masculino = document.querySelector('#masculino');
  input2.type = 'text';
  input2.className = 'persona';
  input2.name = 'gender-custom';
  input2.placeholder = 'Gênero';
  div.appendChild(input2);
  feminino.addEventListener('click', () => {
    input.remove();
  });
  masculino.addEventListener('click', () => {
    input.remove();
  });
});
