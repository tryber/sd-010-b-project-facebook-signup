function spawn(element) {
  const main = document.querySelector('main');
  main.appendChild(element);
  return main;
}

const header = document.createElement('header');
header.className = 'top-bar';
header.style.backgroundColor = 'rgb(66, 103, 178)';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
spawn(header);

const img = document.createElement('img');
img.className = 'facebook-logo';
img.src = 'imgs/facebook-logo.png';
document.querySelector('.top-bar').appendChild(img);

const forms = document.createElement('form');
forms.className = 'facebook-login';
forms.style.display = 'flex';
document.querySelector('.top-bar').appendChild(forms);

const field = document.createElement('fieldset');
field.className = 'form-group';
field.style.display = 'flex';
field.style.flexDirection = 'column';
document.querySelector('form').appendChild(field);

const lemail = document.createElement('label');
lemail.id = 'user-email-phone-label';
const userEmail = 'user-email-phone';
lemail.htmlFor = userEmail;
lemail.innerText = 'Email ou telefone';
document.querySelector('fieldset').appendChild(lemail);

const iemail = document.createElement('input');
iemail.id = userEmail;
iemail.type = 'text';
iemail.innerText = 'Email ou telefone';
document.querySelector('fieldset').appendChild(iemail);

const field2 = document.createElement('fieldset');
field2.className = 'form-group';
field2.id = 'field2';
field2.style.display = 'flex';
field2.style.flexDirection = 'column';
document.querySelector('form').appendChild(field2);

const lpass = document.createElement('label');
lpass.id = 'user-password-label';
lpass.htmlFor = 'user-password';
lpass.innerText = 'Senha';
document.querySelector('#field2').appendChild(lpass);

const ipass = document.createElement('input');
ipass.id = 'user-password';
ipass.type = 'password';
ipass.innerText = 'Senha';
document.querySelector('#field2').appendChild(ipass);

const field3 = document.createElement('fieldset');
field3.className = 'form-control';
field3.id = 'field3';
field3.style.display = 'flex';
field3.style.alignSelf = 'flex-end';
field3.style.flexDirection = 'column';
document.querySelector('form').appendChild(field3);

function alerta() {
  const textoDigitado = document.getElementById('user-email-phone');
  alert(textoDigitado.value);
}

const button = document.createElement('button');
button.id = 'button-login';
button.innerText = 'Entrar';
document.querySelector('#field3').appendChild(button);
button.addEventListener('click', alerta);

const mainContent = document.createElement('div');
mainContent.className = 'main-content';
mainContent.style.display = 'flex';
spawn(mainContent);

const leftContent = document.createElement('div');
leftContent.className = 'left-content';
leftContent.style.justifyContent = 'left';
leftContent.style.width = '800px';
document.querySelector('.main-content').appendChild(leftContent);

const slogan = document.createElement('p');
slogan.id = 'facebook-slogan';
stext = "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.";
slogan.innerText = stext;
simage = document.createElement('img');
img.id = 'facebook-networking';
img.src = 'imgs/networking.png'
document.querySelector('.left-content').appendChild(slogan);
document.querySelector('.left-content').appendChild(simage);
