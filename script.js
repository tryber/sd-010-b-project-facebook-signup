const login = document.getElementById('button-login');
const message = document.getElementById('user-email-phone');

function clickLogin() {
  alert(message.value);
}

login.addEventListener('click', clickLogin);

function validando(){
  const nome = document.getElementById('firstname');
  const sobreNome = document.getElementById('lastname');
  const emailTelefone = document.getElementById('phone_email');
  const senha = document.getElementById('password');
  const aniversario = document.getElementById('birthdate');
  const cadastreSe = document.getElementById('facebook-register');
  
  cadastreSe.addEventListener('click', function () {
    
    if ( nome.value === '' || sobreNome.value === '' || emailTelefone.value === '' || senha.value === '' || aniversario.value === '' ) {
      return alert('Campos inválidos');
    }
    return alert('enviado');
    } 
  )
}
validando()

