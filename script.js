let field = document.querySelector('#"button-login"');

field.addEventListener('click', function () {
  let first = document.querySelector('#user-email-phone').value;
  let second = document.querySelector('#"user-password"');
  if( first == '' || second == '') {
    alert("Campos inválidos")
    }
});

function checkForm() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let phone = document.getElementById("phone_email").value;
  let password = document.getElementById("password").value;
  ​
  if (fname == '' || lname == '' || phone == '' || password == '') {
    alert("Campos inválidos");
    return false;
  }
}