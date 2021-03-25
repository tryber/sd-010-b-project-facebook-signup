const paragraph = document.querySelector('#paragraph');

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
  const fullName = document.createElement('h1');
  fullName.innerText = `Olá, ${infos.getPrimeiroNome} ${infos.getUltimoNome}`;
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
function validarCampos() {
  const formInput = document.querySelectorAll('.formInput');
  for (let index = 0; index < formInput.length; index += 1) {
    if (formInput[index].value === '') {
      paragraph.innerText = ('Campos inválidos');
      return;
    }
  }
  substituiConteudo();
}

botaoCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  paragraph.innerText = '';
  const radioInput = document.querySelectorAll('.formInput');
  for (let index = 0; index < radioInput.length; index += 1) {
    if (radioInput[index].type === 'radio' && radioInput[index].checked) {
      validarCampos();
    } else {
      paragraph.innerText = ('Campos inválidos');
    }
  }
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
