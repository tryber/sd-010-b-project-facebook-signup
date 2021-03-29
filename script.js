/*
   Essa função adiciona um escutador de eventos eventName que dispara a function functionName para cada elemento que tenha o cssSelector.

   Material consultado sobre o loop forEach
   https://www.w3schools.com/jsref/jsref_foreach.asp
   Material consultado sobre arrow functions
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   https://www.w3schools.com/js/js_arrow_function.asp
  */
// function forEachElemAddEventListener(cssSelector, eventName, functionName) {
//   // obtem uma lista de elementos de cssSelector e armazena em elementsList
//   const elementsList = document.querySelectorAll(cssSelector);

//   // para cada elemento da lista de elementos
//   elementsList.forEach((element) => {
//     // adiciona um escutador de eventos eventName que dispara a function functionName
//     element.addEventListener(eventName, functionName);
//   });
// }

// /*
//    Essa função retorna um alert informando o conteudo do elemento disparou o evento.
//   */
// function alertWithUserEmailPhoneContent() {
//   // obtem um elemento de cssSelector e armazena em element
//   const userEmailPhone = document.getElementById('user-email-phone').value;
//   return alert(`Email ou telefone: ${userEmailPhone}`);
// }

/*
   Essa função adiciona um escutador de eventos eventName que dispara a function functionName para um elemento que tenha o cssSelector.
  */
function addElemEventListener(cssSelector, eventName, functionName) {
  // obtem um elemento de cssSelector e armazena em element
  const element = document.querySelector(cssSelector);

  // para o elemento adiciona um escutador de eventos eventName que dispara a function functionName
  element.addEventListener(eventName, functionName);
}

/*
   Essa função executa a configuração relacionada aos eventos, como por exemplo, escutadores de eventos.
  */
function setupEvents() {
  // para elemento de id button-login adiciona um escutador de evento click que dispara um alert com o valor do campo "Email ou telefone"
  // addEventListener('#button-login', 'click', () =>
  //   alert(
  //     `Email ou telefone: ${document.getElementById('user-email-phone').value}`,
  //   ));

  // addEventListener('#button-login', 'click', alert(
  //     `Email ou telefone: ${document.getElementById('user-email-phone').value}`,
  //   ));

  addElemEventListener('#button-login', 'click', () =>
    alert(document.getElementById('user-email-phone').value));
}

/*
   Essa função executa a function init para carregar valores e setup escutadores de evento
  */
window.onload = function init() {
  // define uma função init para carregar valores e realizar setup relacionado a eventos
  setupEvents(); // realiza setup relacionado a eventos.
};

// Criação de input de texto caso seja selecionado Gênero Personalizado
const divInputGender = document.getElementById('other-gender');
const otherGender = document.getElementById('other');
const male = document.getElementById('male');
const female = document.getElementById('female');

function inputOtherGender() {
  const inputGender = document.createElement('input');
  inputGender.type = 'name';
  inputGender.name = 'gender-custom';
  inputGender.placeholder = 'Gênero (opcional)';

  divInputGender.appendChild(inputGender);
}

function clearOtherGender() {
  divInputGender.innerHTML = '';
}

otherGender.addEventListener('click', inputOtherGender);
male.addEventListener('click', clearOtherGender);
female.addEventListener('click', clearOtherGender);

// Validação dos campos e adição de paragráfo de campos inválidos
const signUp = document.getElementById('facebook-register');
const formInput = document.getElementsByClassName('form-input');

function validate(event) {
  const element = event;
  element.preventDefault();
  const isError = document.getElementById('error-message');
  if (isError !== null) {
    isError.remove();
  }
  for (let index = 0; index < formInput.length; index += 1) {
    if (formInput[index].value === '') {
      const newElement = document.createElement('p');
      newElement.id = 'error-message';
      newElement.innerHTML = 'Campos inválidos';
      document.querySelector('.form').appendChild(newElement);
      break;
    }
  }
}

signUp.addEventListener('click', validate);

// Criação e alteração das respostas do form

function message() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input:checked').value;

  return `Olá, ${firstname} ${lastname}
  ${phoneEmail}
  ${birthdate}
  ${gender}`;
}

function subscribe() {
  let validForm = true;
  for (let i = 0; i < formInput.length; i += 1) {
    if (formInput[i].value === '') {
      validForm = false;
    }
  }
  if (validForm === true) {
    document.querySelector('.right-content').innerHTML = message();
  }
}

signUp.addEventListener('click', subscribe);
