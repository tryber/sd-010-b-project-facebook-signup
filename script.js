const login = document.getElementById('button-login');
const message = document.getElementById('user-email-phone');
const cadastreSe = document.getElementById('button-login');

function clickLogin() {
  alert(message.value);
}

login.addEventListener('click', clickLogin);

function validando() {
  const cadastreSe = document.getElementById('facebook-register');
  const input = document.querySelectorAll('.inputs'); 
  const pai = document.getElementById('formulario');
  cadastreSe.addEventListener('click', function (event) {
    for (let index = 0; index < input.length; index += 1) {
      if (input[index].value === '') {
        const invalido = document.createElement('p');
        invalido.innerText = 'Campos inválidos';
        invalido.id = 'campoInvalido';
        pai.appendChild(invalido);
        break;
      }
    }
  } );
}
validando();

const generos = document.querySelector('#quadrogenero');
function apagandoInput(novoGenero) {
  const inputGeneroNovo = document.querySelector('#inputGeneroNovo');
  if (inputGeneroNovo !== null) {
    novoGenero.removeChild(inputGeneroNovo);
  }
}

generos.addEventListener('click', (e) => {
  if (e.target.type === 'radio') {
    const novoGenero = document.querySelector('#inputPersonalizado');
    const inputGeneroNovo = document.createElement('input');
    console.log('passou no if 1');
    if (e.target.id === 'personalizado') {
      apagandoInput(novoGenero);
      inputGeneroNovo.placeholder = 'Gênero (opcional)';
      inputGeneroNovo.name = 'gender-custom';
      novoGenero.appendChild(inputGeneroNovo);
      inputGeneroNovo.id = 'inputGeneroNovo';
      console.log('passou no if 2');
    } else {
      apagandoInput(novoGenero);
      console.log('passou no else');
    }
  }
});




