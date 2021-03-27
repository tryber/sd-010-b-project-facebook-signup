const buttonEntrar = document.getElementById('button-login');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);


// Referência tirado do https://medium.com/@jezmael/como-validar-os-dados-de-um-formul%C3%A1rio-com-javascript-abdc5a5fba67

 function validar(evento) {
  evento.preventDefault();
  const name = document.getElementById('name');
  const lastname = document.getElementById('lastname');
  const phone_email = document.getElementById('phone_email');
  const password = document.getElementById('password');
  const birthdate = document.getElementById('birthdate');
  const radio = document.querySelector('input[name="gender"]:checked');
  if (name.value === '') {
    alert('Nome não informado');
    name.focus();
    return;
  }
  if (lastname.value === '') {
    alert('Sobrenome não informado');
    lastname.focus();
    return;
  }
  if (phone_email.value === '') {
    alert('E-mail não informado');
    phone_email.focus();
    return;
  }
  if (password.value === '') {
    alert('Senha não informada');
    password.focus();
    return;
  }
  if (birthdate.value === '') {
    alert('Aniversário não informado');
    birthdate.focus();
    return;
  }
  if (radio === null) {
    alert('Marque um gênero');
    return;
  }
}
  form.addEventListener('submit', validar); 

/* const buttonCadastrar = document.getElementById('facebook-register');
const userName = document.getElementById('name');
const lastName = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email'); 
const password = document.getElementById('password'); 
const birthdate = document.getElementById('birthdate'); 
const radioSelecionado = document.querySelector('input[name="gender"]:checked');
const radio = document.querySelector('input[name="gender"]:checked');

function validarCadastro(){
  if((userName.value === "") || (lastName.value === "") || (phoneEmail.value === "") || (password.value === "") || (birthdate.value === "") || (radioSelecionado.value === "" ) || (radio.value === null)){
    alert('Campo inválido');
  } else {
    alert('Tudo ok'); 
  }
}

buttonCadastrar.addEventListener('click', validarCadastro);  */

function validarCampo(){
  let 
  if(document.form1.tipoEndereco[0].checked == false){

  }
}

