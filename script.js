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

const aparecerInput = nada => {
  const pegaInput = document.getElementById('genero-opcional');
  pegaInput.style.display = 'block'
}

const desaparecerInput = nada => {
  const pegaInput = document.getElementById('genero-opcional');
  pegaInput.style.display = 'none'
}