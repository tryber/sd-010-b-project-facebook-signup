const email = document.getElementById('user-email-phone');
const button = document.getElementById('button-login');

button.addEventListener('click', () => {
  alert(email.value);
});
