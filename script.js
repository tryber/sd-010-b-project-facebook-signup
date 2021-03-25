document.querySelector('#button-login').addEventListener('click', function () {
  const first = document.querySelector('#user-email-phone').value;
    alert(first)
});

function checkForm() {
  const fname = document.getElementById('firstname').value;
  const lname = document.getElementById('lastname').value;
  const phone = document.getElementById('phone_email').value;
  const password = document.getElementById('password').value;

  if (fname === '' || lname === '' || phone ==='' || password === '') {
    alert('Campos inválidos');
    return false;
  }
}