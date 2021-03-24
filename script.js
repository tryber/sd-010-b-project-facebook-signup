function entrarFacebook() {
  const entrarBotao = document.getElementById('button-login');
  entrarBotao.addEventListener('click', () => {
    const emailCelular = document.getElementById('user-email-phone').value;
    alert(emailCelular);
  });
}
entrarFacebook();

const botaoCadastro = document.getElementById('facebook-register');
const formDireita = document.querySelector('.right-content');

function recuperarInfo() {
  const getPrimeiroNome = document.getElementById('first-name-form').value;
  const getUltimoNome = document.getElementById('last-name-form').value;
  const getEmailCelular = document.getElementById('phone-email-form').value;
  const dataNasci = document.getElementById('date-birthdate-form').value;
  const iRadio = document.querySelector('input[type="radio"]:checked').value;
  return {
    getPrimeiroNome,
    getUltimoNome,
    getEmailCelular,
    dataNasci,
    iRadio,
  };
}

function renderizarInfo(infos) {
  formDireita.innerHTML = '';
  const fullName = document.createElement('h2');
  fullName.innerText = `Olá, ${infos.getPrimeiroNome}${infos.getUltimoNome}`;
  const emailCelular = document.createElement('p');
  emailCelular.innerText = infos.getEmailCelular;
  const dataNascimento = document.createElement('p');
  dataNascimento.innerText = infos.dataNasci;
  const opcaoGenero = document.createElement('p');
  opcaoGenero.innerText = infos.iRadio;
  formDireita.appendChild(fullName);
  formDireita.appendChild(emailCelular);
  formDireita.appendChild(dataNascimento);
  formDireita.appendChild(opcaoGenero);
}

function substituiConteudo() {
  const infos = recuperarInfo();
  renderizarInfo(infos);
}

// Validando campos
botaoCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  const inputText = document.querySelectorAll('.form input[type="radio"]');
  const form = document.querySelector('.form');
  const erro = document.createElement('p');
  erro.innerText = 'Campos inválidos';
  erro.style.color = 'red';
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      form.appendChild(erro);
    }
  }
  substituiConteudo();
});

//  campo personalizar genero
const genderOtherDiv = document.querySelector('.gender-other');
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach((radio) => {
  radio.addEventListener('click', () => {
    if (radio.id === 'other') {
      genderOtherDiv.style.display = 'block';
    } else {
      genderOtherDiv.style.display = 'none';
    }
  });
});
