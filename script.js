function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function para(event) {
  event.preventDefault();
}

function valida(event) {
  const array = document.getElementsByClassName('verifica');
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].value === '') {
      cont += 1;
    }
  }
  if (cont !== 0) {
    const pai = document.getElementById('campo-obrigatorio');
    const p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    pai.appendChild(p);
    para(event);
  }
}

document.getElementById('button-login').addEventListener('click', alerta);
document.getElementById('facebook-register').addEventListener('click', valida);
