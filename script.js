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
  if (pegaRadios[0].checked) {
    return true;
  } else if (pegaRadios[1].checked) {
    return true;
  } else if (pegaRadios[2].checked) {
    return true;
  } else {
    return false;
  }
}

function checked() {
  const encontraSelecionado = document.getElementsByName('gender');
  for(let index in encontraSelecionado) {
    if(encontraSelecionado[index].checked) {
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
    const encontraForm = document.getElementsByClassName('form-cadastro');
    const encontraP = document.getElementsByClassName('texto-formulario');
    const encontraNome = document.getElementsByName('firstname').value;
    const encontraSobrenome = document.getElementsByName('lastname').value;
    const encontraEmail = document.getElementsByName('phone_email').value;
    const encontraData = document.getElementsByName('birthdate').value;
    const encotraGender = checked();
    encontraP.style.display = 'block';
    encontraP.innerText = encontraNome + encontraSobrenome;
    encontraP.innerText = encontraEmail + encontraData + encotraGender;
    encontraForm.style.display = 'none';
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
