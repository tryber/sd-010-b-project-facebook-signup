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
  for (const index = 0;index <= encontraInput.length;index +=1) {
    if (encontraInput[index].value === '') {
      return false;
    }
  }
}

function verificarRadio() {
  const pegaRadios = document.getElementsByName('gender');
  if (pegaRadios[0].checked) {
    return true;
  }
  if (pegaRadios[1].checked) {
    return true;
  }
  if (pegaRadios[2].checked) {
    return true;
  } 
    return false;
  
}

function clickCadastro() {
  const verificaRadios = verificarRadio();
  const verificarInputs = verificaInput();

  if (verificaRadios === false || verificarInputs === false) {
    const encontraP = document.getElementById('cadastro-invalito');
    encontraP.style.display = 'block';
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
