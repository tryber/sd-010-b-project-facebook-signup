function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function paraEvento(event) {
  event.preventDefault();
}

function limpaForm() {
  const pai = document.getElementById('formcontato');
  const listaDivs = document.getElementsByClassName('removivel');


  for (let i = 0; i < listaDivs.length; i += 1) {
    if (listaDivs[i].classList.contains('removivel') === true) {
      listaDivs[i].classList.add('remover');
      // pai.removeChild(listaDivs[i]);
    }
  }
}

function imprimeDados() {
  const array = document.getElementsByClassName('imprimir');
  const els = document.getElementsByClassName('checked-genero');
  let genero;
  for (let i = 0; i < els.length; i++) {
    if (els[i].checked) {
      genero = (els[i].value);
    }
  }
  const pai = document.getElementById('formcontato');
  const pNome = document.createElement('p');
  const pEmail = document.createElement('p');
  const pData = document.createElement('p');
  const pGenero = document.createElement('p');
  pNome.innerHTML = `Olá, ${array[0].value} ${array[1].value}`;
  pai.appendChild(pNome);
  pEmail.innerHTML = `Email ou Telefone: ${array[2].value}.`;
  pai.appendChild(pEmail);
  pData.innerHTML = `Data de Nascimento: ${array[3].value}.`;
  pai.appendChild(pData);
  pGenero.innerHTML = `Genero: ${genero}.`;
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
    para(event);
  } else {
    limpaForm();
    imprimeDados();
    paraEvento(event);
  }

}



document.getElementById('button-login').addEventListener('click', alerta);
document.getElementById('facebook-register').addEventListener('click', valida);
