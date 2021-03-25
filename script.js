const input = document.querySelector('#user-email-phone');

function msgAlert() {
  alert(input.value);
}

const btn = document.querySelector('#button-login');
btn.addEventListener('click', msgAlert);
