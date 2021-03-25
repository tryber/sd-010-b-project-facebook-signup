function textAlert() {
  let textMsg = document.getElementById("user-email-phone").value;
  alert(textMsg);
}
​​
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
    // let msgAlert = document.querySelector('#form-group');
    // let buttonn = document.querySelector("#button-login")
    // buttonLogin.addEventListener('click', function () {
    // msgAlert.innerHTML = 'Campos inválidos';
    // }

