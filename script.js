const login = document.getElementById('button-login');
const message = document.getElementById('user-email-phone');
const cadastreSe = document.getElementById('button-login');

function clickLogin() {
  alert(message.value);
}

login.addEventListener('click', clickLogin);
/* []validar os campos quando aperta cadastre
[] colocar opção de texto quando clicado em personalizado
[]  requisito ultimo */

function validando(){
  const nome = document.getElementById('firstname');
  const sobreNome = document.getElementById('lastname');
  const emailTelefone = document.getElementById('phone_email');
  const senha = document.getElementById('password');
  const aniversario = document.getElementById('birthdate');
  const cadastreSe = document.getElementById('facebook-register');
  
  cadastreSe.addEventListener('click', function(){
    
    if ( nome.value===''|| sobreNome.value===''|| emailTelefone.value===''|| senha.value==='' || aniversario.value===''){
      return alert('Campos inválidos');
    }else {
      return alert('enviado');
    } 
  })
}
validando()
