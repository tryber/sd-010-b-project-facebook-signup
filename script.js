function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

document.getElementById('button-login').addEventListener('click', alerta);

 function validar_form_contato() {
 const nome = formcontato.firstname.value;
 const sobreNome = formcontato.lastname.value;
 const email = formcontato.phone_email.value;
 const senha = formcontato.password.value;
 const texto = "Nome: " +nome + " "+ sobreNome + "; Email: "+email;
 alert(texto) 
 return true;
 }
 
 

