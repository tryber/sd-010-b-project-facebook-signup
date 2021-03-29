function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function paraEvento(event) {
  event.preventDefault();
}

function limpaForm() {
  const listaDivs = document.getElementsByClassName('removivel');
  for (let i = 0; i < listaDivs.length; i += 1) {
    if (listaDivs[i].classList.contains('removivel') === true) {
      listaDivs[i].classList.add('remover');
    }
  }
}

function imprimeDados() {
  const array = document.getElementsByClassName('imprimir');
  const els = document.getElementsByClassName('checked-genero');
  let genero;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].checked) {
      genero = (els[i].value);
    }
  }
  const pai = document.getElementById('formcontato');
  const pNome = document.createElement('p').innerHTML = `Olá, ${array[0].value} ${array[1].value}`;
  pai.appendChild(pNome);
  for (let i = 2; i < array.length; i += 1) {
    const p = document.createElement('p').innerHTML = `${array[i].value}.`;
    pai.appendChild(p);
  }
  const pGenero = document.createElement('p').innerHTML = `Genero: ${genero}.`;
  pai.appendChild(pGenero);
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
    paraEvento(event);
  } else {
    limpaForm();
    imprimeDados();
    paraEvento(event);
  }
}

document.getElementById('button-login').addEventListener('click', alerta);
document.getElementById('facebook-register').addEventListener('click', valida);
