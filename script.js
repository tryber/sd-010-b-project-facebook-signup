// capturar a informação do email ou telefone
function alertEmailTelefone() {
  const getEmailTelefone = document.getElementById('user-email-phone');
  alert(getEmailTelefone.value);
}

// capturar o botão
function bntLogin() {
  const getBtnLogin = document.querySelector('#button-login');
  getBtnLogin.addEventListener('click', alertEmailTelefone);
}

//  validação dos campos de texto
function validate() {
  // capturar cada campo de input
  const getForms = document.getElementsByClassName('cadastro')[0];
  // verificação de inputs vazios
  for (let i = 0; i <= 4; i += 1) {
    if (getForms[i].value === '') {
      document.getElementById('camposInvalidos').innerText = 'Campos inválidos';
    }
  }
}

// botão de cadastro
function btnCadastre() {
  const getSubmit = document.getElementById('facebook-register');
  getSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
  });
}

const getRadio = document.getElementsByName('gender'); // captura os botões radio
const customTextBox = document.getElementById('gender-custom'); // captura a caixa de texto

// evento para o botao radio feminino
getRadio[0].onclick = (event) => {
  if (event.target.checked) {
    customTextBox.style.display = 'none';
  }
};

// evento para o botao radio masculino
getRadio[1].onclick = (e) => {
  if (e.target.checked) {
    customTextBox.style.display = 'none';
  }
};

// evento para o botao radio personalizado
getRadio[2].onclick = (event) => {
  if (event.target.checked) {
    customTextBox.style.display = 'flex'; // aparecer a caixa de texto
  }
};

window.onload = () => {
  bntLogin();
  btnCadastre();
};
