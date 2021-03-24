function login() {
  const getButton = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');
  const password = document.querySelector('#user-password');

  getButton.addEventListener('click', function () {
    if (emailPhone.value.length > 0 && password.value.length > 0) {
      window.alert(
        `Email ou Telefone: ${emailPhone.value} Senha: ${password.value}`
      );
    }
  });
}

login();
