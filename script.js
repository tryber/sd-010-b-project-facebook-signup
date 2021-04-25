/*
function enviar() {
  const valor = document.getElementById('user-email-phone').value;
  alert(`${valor}`);
}
 uma função que recebe o valor colocado dentro do input do login e mostra na tela por meio de um alert

enviar();
*/
const input = document.querySelector('#user-email-phone');

function messageAlert() {
  alert(input.value);
}

const btn = document.querySelector('#button-login');
btn.addEventListener('click', messageAlert);
