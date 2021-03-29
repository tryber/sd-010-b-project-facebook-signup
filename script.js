//Emite alerta com nome de usuário após clicar no botão ENTRAR.
const enterButton = document.querySelector('#button-login');

enterButton.addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

// const form = document.getElementById('formulario');
// form.addEventListener('submit', () => {
//   const CadName = document.getElementById('name');
//   const CadLastName = document.getElementById('sName');
//   const CadPhoneEmail = document.getElementById('foEmail');
//   const CadPassword = document.getElementById('foSenha"');
//   const CadBirthdate = document.getElementById('label-birthdate');
//   const CadRadio = document.querySelector('input[name="gender"]:checked');

//   if (CadName.value === '') {
//     alert('Campos inválidos');
//     return;
//   }

//   if (CadLastName.value === '') {
//     alert('Campos inválidos');
//     return;
//   }

//   if (CadPhoneEmail.value === '') {
//     alert('Campos inválidos');
//     return;
//   }

//   if (CadPassword.value === '') {
//     alert('Campos inválidos');
//     return;
//   }

//   if (CadBirthdate.value === '') {
//     alert('Campos inválidos');
//     return;
//   }

//   if (CadRadio === null) {
//     alert('Campos inválidos');
//     return;
//   }

// });
// adicionando comentario para envio da pr //
const selectedPers = document.getElementById('other');
selectedPers.addEventListener('click', () => {
  const arm = document.getElementById('genders');
  const opc = document.createElement('input');
  opc.type = 'Text';
  opc.name = 'gender-custom';
  opc.id = 'opcional';
  opc.placeholder = 'Gênero (opcional)';
  arm.appendChild(opc);
});
