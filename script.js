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

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70