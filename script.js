// Requisito 7
function entrar() {
  const btnentrar = document.getElementById('button-login');
  const email = document.getElementById('user-email-phone');
  function alertemail() {
    alert(email.value);
  }
  btnentrar.addEventListener('click', alertemail);
}

entrar();

// Requisito 18
let missingData = false;

function filledfields() {
  missingData = false;
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  for (let index = 0; index < 5; index += 1) {
    if (input[index].value === '') {
      missingData = true;
      break;
    }
  }
}

function filledradios() {
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  if (!(input[5].checked) && !(input[6].checked) && !(input[7].checked)) {
    missingData = true;
  }
}

// Requisito 19
function createInputGenrer() {
  const localGenderPersonal = document.querySelector('.genderPersonal');
  const radioPersonal = document.querySelector('#personalizado');
  radioPersonal.addEventListener('click', () => {
    if (!document.querySelector('#inputP')) {
      const inputPersonal = document.createElement('input');
      inputPersonal.placeholder = 'Gênero (opcional)';
      inputPersonal.type = 'text';
      inputPersonal.className = 'data';
      inputPersonal.id = 'inputP';
      inputPersonal.name = 'gender-custom';
      localGenderPersonal.appendChild(inputPersonal);
    }
  });
}

createInputGenrer();

// Requisito 19 - Adicional -- Remove input gênero personalizado caso clicado em Masculino / Feminino
function removeInputGenrer() {
  const radioMasc = document.querySelector('#masculino');
  radioMasc.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated) { inputPCreated.remove(); }
  });
  const radioFem = document.querySelector('#feminino');
  radioFem.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated) { inputPCreated.remove(); }
  });
}

removeInputGenrer();

// Requisito 20
function createtext() {
  const createp = document.createElement('p');
  createp.id = 'paragraph';
  createp.innerText = 'Olá, ';
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');

  for (let index = 0; index < 5; index += 1) {
    if (index !== 3) {
      createp.innerText = `${createp.innerText} ${input[index].value}`;
    }
  }
  form.parentNode.appendChild(createp);
}

function addgender() {
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  const paragraph = document.getElementById('paragraph');
  for (let index = 5; index < 8; index += 1) {
    if (input[index].checked) {
      paragraph.innerText = `${paragraph.innerText} ${input[index].value}`;
    }
  }
}

function removeform() {
  const rightcontent = document.getElementsByClassName('right-content')[0];
  const header = document.getElementById('right-content-header');
  const form = document.getElementById('subscription');
  const quickeasy = document.getElementsByClassName('quick-easy')[0];
  const title = rightcontent.getElementsByTagName('h1')[0];
  rightcontent.removeChild(form);
  header.removeChild(quickeasy);
  header.removeChild(title);
}

function alertmissing() {
  filledfields();
  filledradios();
  if (missingData === true) {
    const message = document.getElementById('invalidMessage');
    message.innerText = 'Campos inválidos';
  } else {
    createtext();
    addgender();
    removeform();
  }
}

function checkfilled() {
  const btnsumit = document.getElementsByClassName('btnSumit')[0];
  btnsumit.addEventListener('click', alertmissing);
  function prevent(event) {
    event.preventDefault();
  }
  btnsumit.addEventListener('click', prevent);
}

checkfilled();
