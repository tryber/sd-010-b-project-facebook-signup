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
mainContent.style.justifyContent = 'space-evenly';
mainContent.style.alignItems = 'center';
spawn(mainContent);

const leftContent = document.createElement('div');
leftContent.className = 'left-content';
leftContent.style.justifyContent = 'left';
leftContent.style.width = '800px';
document.querySelector('.main-content').appendChild(leftContent);

const slogan = document.createElement('p');
slogan.id = 'facebook-slogan';
//  SLINT SUCKS
let stext = 'O Facebook ajuda você a se conectar e compartilhar ';
stext = `${stext} com as pessoas que fazem parte da sua vida.`;
//  ):<
slogan.innerText = stext;
const simage = document.createElement('img');
simage.id = 'facebook-networking';
simage.src = 'imgs/networking.png';
document.querySelector('.left-content').appendChild(slogan);
document.querySelector('.left-content').appendChild(simage);

const q = 'quick-easy';
const rightContent = document.createElement('div');
rightContent.className = 'right-content';
rightContent.style.justifyContent = 'right';
rightContent.style.width = '300px';
document.querySelector('.main-content').appendChild(rightContent);
const qhead = document.createElement('h1');
qhead.innerText = 'Abra uma conta';
const rcontent = document.querySelector('.right-content');
rcontent.appendChild(qhead);
const quickText = document.createElement('p');
quickText.className = q;
quickText.innerText = 'É rápido e fácil.';
rcontent.appendChild(quickText);

const easyform = document.createElement('form');
easyform.className = q;
easyform.id = 'formeasy';
rcontent.appendChild(easyform);
easyform.style.display = 'flex';
easyform.style.flexFlow = 'row wrap';
const formeasy = document.querySelector('#formeasy');

const qlabel = document.createElement('label');
qlabel.htmlFor = q;
formeasy.appendChild(qlabel);

const qinput = document.createElement('input');
qinput.id = q;
qinput.className = q;
qinput.type = 'text';
qinput.style.width = '70px';
qinput.name = 'firstname';
qinput.placeholder = 'Nome';
qinput.required = true;
formeasy.appendChild(qinput);

const surnameLabel = document.createElement('label');
surnameLabel.htmlFor = 'surname';
surnameLabel.className = q;
formeasy.appendChild(surnameLabel);

const surnameInput = document.createElement('input');
surnameInput.id = 'surname';
surnameInput.className = q;
surnameInput.type = 'text';
surnameInput.style.width = '70px';
surnameInput.name = 'lastname';
surnameInput.placeholder = 'Sobrenome';
surnameInput.required = true;
surnameInput.style.flexDirection = 'row';
formeasy.appendChild(surnameInput);

const emailLabel = document.createElement('label');
emailLabel.htmlFor = 'email';
emailLabel.className = q;
formeasy.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.id = 'email';
emailInput.type = 'text';
emailInput.className = q;
emailInput.name = 'phone_email';
emailInput.placeholder = 'Celular ou email';
formeasy.appendChild(emailInput);

const pwdLabel = document.createElement('label');
pwdLabel.className = q;
pwdLabel.htmlFor = 'pwd';
formeasy.appendChild(pwdLabel);

const pwdInput = document.createElement('input');
pwdInput.id = 'pwd';
pwdInput.className = q;
pwdInput.type = 'password';
pwdInput.name = 'password';
pwdInput.placeholder = 'Nova senha';
formeasy.appendChild(pwdInput);

const birthLabel = document.createElement('label');
birthLabel.id = 'label-birthdate';
birthLabel.innerText = 'Data de nascimento';
birthLabel.htmlFor = 'birth';
formeasy.appendChild(birthLabel);

const birthInput = document.createElement('input');
birthInput.id = 'birth';
birthInput.type = 'text';
birthInput.name = 'birthdate';
birthInput.placeholder = 'dd/mm/aaaa';
formeasy.appendChild(birthInput);

const genderLabel = document.createElement('label');
genderLabel.id = 'label-gender';
genderLabel.innerText = 'Gênero';
genderLabel.htmlFor = 'gender';
formeasy.appendChild(genderLabel);

const genderInput = document.createElement('input');
const lmasculino = document.createElement('label');
const brake = document.createElement('br');
lmasculino.htmlFor = 'masculino';
lmasculino.innerText = 'Masculino';
genderInput.id = 'masculino';
genderInput.type = 'radio';
genderInput.name = 'gender';
genderLabel.appendChild(brake);
genderLabel.appendChild(genderInput);
genderLabel.appendChild(lmasculino);

const genderInput2 = document.createElement('input');
const lfeminino = document.createElement('label');
lfeminino.htmlFor = 'feminino';
lfeminino.innerText = 'Feminino';
genderInput2.id = 'feminino';
genderInput2.type = 'radio';
genderInput2.name = 'gender';

genderLabel.appendChild(genderInput2);
genderLabel.appendChild(lfeminino);

const genderInput3 = document.createElement('input');
const lpersonalizado = document.createElement('label');
lpersonalizado.htmlFor = 'personalizado';
lpersonalizado.innerText = 'Personalizado';
genderInput3.id = 'personalizado';
genderInput3.type = 'radio';
genderInput3.name = 'gender';
genderLabel.appendChild(genderInput3);
genderLabel.appendChild(lpersonalizado);
