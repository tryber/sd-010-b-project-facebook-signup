const email = document.getElementById('user-email-phone');
const buttonHeader = document.getElementById('button-login');

function buttonH() {
  alert(email.value);
}

buttonHeader.addEventListener('click', buttonH);
