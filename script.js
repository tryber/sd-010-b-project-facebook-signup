const btnEntrar = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');

// verifica se a pessoa digitou o email e clicou em entrar
// font de pesquisa > https://blog.betrybe.com/javascript/javascript-alert/
function entrar() {
  const emailPessoa = emailTelefone.value;
  if (emailPessoa === '') {
    alert('Digite seu email!');
  } else {
    alert(emailPessoa);
  }
}
btnEntrar.addEventListener('click', entrar);

<<<<<<< HEAD
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70
=======
function verificaInput() {
  const encontraInput = document.getElementsByClassName('input');
  for (let index = 0; index <= encontraInput.length; index += 1) {
    if (encontraInput[index].value === '') {
      return false;
    }
  }
}

function verificarRadio() {
  const pegaRadios = document.getElementsByName('gender');
  if (pegaRadios[0].checked || pegaRadios[1].checked || pegaRadios[2].checked) {
    console.log('passou no tsete');
  } else {
    return false;
  }
}

function checked() {
  const encontraSelecionado = document.getElementsByName('gender');
  for (let index = 0; index <= encontraSelecionado.length; index += 1) {
    if (encontraSelecionado[index].checked) {
      return encontraSelecionado.value;
    }
  }
}

function clickCadastro() {
  const verificaRadios = verificarRadio();
  const verificarInputs = verificaInput();
  if (verificaRadios === false || verificarInputs === false) {
    const encontraP = document.getElementById('cadastro-invalito');
    encontraP.style.display = 'block';
  } else {
    const encontraConteudo = document.getElementsByClassName('conteudo');
    const encontraP = document.getElementsByClassName('texto-formulario');
    const encontraNome = document.getElementsByName('firstname').value;
    const encontraSobrenome = document.getElementsByName('lastname').value;
    const encontraEmail = document.getElementsByName('phone_email').value;
    const encontraData = document.getElementsByName('birthdate').value;
    const encotraGender = checked();
    encontraConteudo.style.display = 'none';
    encontraP.style.display = 'block';
    encontraP.innerText = `Olá, ${encontraNome} ${encontraSobrenome}
    ${encontraEmail}\n${encontraData}\n${encotraGender}`;
  }
}

function aparecerInput() {
  const pegaInput = document.getElementById('genero-opcional');
  pegaInput.style.display = 'block';
}

function desaparecerInput() {
  const pegaInput = document.getElementById('genero-opcional');
  pegaInput.style.display = 'none';
}

clickCadastro();

verificaInput();

verificarRadio();

aparecerInput();

desaparecerInput();
>>>>>>> e70b473b50f46b01e07d8438cce28c0e5f356884
