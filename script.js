// captura a mudanção do tamanho da tela
window.onresize = () => {
  const itemHidden = document.getElementById('screen-small');
  itemHidden.style.display = 'none';
  const screen = window.innerWidth;
  if (screen < 899) {
    itemHidden.style.display = 'flex';
  }
};
// variaveis para o item 19
const genderCustom = document.getElementById('gender-custom');
const genderPer = document.getElementById('gender-per');
const genderMasc = document.getElementById('gender-masc');
const genderFem = document.getElementById('gender-fem');
// variaveis para o item 18 e 20
const btnCadastrase = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('.input');
const radios = document.querySelectorAll('.gender-radio');

// cria um alert com o valor digitado no input email ou telefone
function btnLogin() {
  const btnEnviar = document.querySelector('#button-login');
  const alertText = document.querySelector('#user-email-phone');

  btnEnviar.addEventListener('click', () => {
    alert(alertText.value);
  });
}

// habilita o input de "Gênero (opcional)"
function outroGenreno() {
  genderCustom.style.display = 'none';

  genderPer.addEventListener('click', () => {
    genderCustom.style.display = 'block';
  });

  genderFem.addEventListener('click', () => {
    genderCustom.style.display = 'none';
  });

  genderMasc.addEventListener('click', () => {
    genderCustom.style.display = 'none';
  });
}

// verifica de os input com nome, sobrenome, data, email não estão vazios
function verificaInputs() {
  let validacaoInput = true;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      validacaoInput = false;
    }
  }
  return validacaoInput;
}

// verifica se os radio-buttons estão marcados
function verificaRadios() {
  let validacaoRadios = false;
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      validacaoRadios = true;
    }
  }
  return validacaoRadios;
}

// analise se ambas as funçoes de validação (input e radio) estão preenchidos
// printa na tela caso estejam vazios
function cadastroVerificacao() {
  const validacao = document.querySelector('#validacao');
  const resultado = document.createElement('div');
  resultado.setAttribute('class', 'resultado');
  let ativacao = true;
  if (!verificaInputs() || !verificaRadios()) {
    resultado.innerText = 'Campos inválidos';
    validacao.appendChild(resultado);
    ativacao = false;
  }
  return ativacao;
}

// retorna valor do radio-button marcado
function opicaoRadio() {
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked === true) {
      return radios[index].value;
    }
  }
}

// funão do botão Cadastra-se, se formulário preenchido printa na tela os valores
btnCadastrase.addEventListener('click', (event) => {
  event.preventDefault();
  const conteudo = document.querySelector('.right-content');
  if (cadastroVerificacao()) {
    conteudo.innerHTML = `Olá, ${inputs[0].value} ${inputs[1].value}, 
    email/telefone: ${inputs[2].value}, 
    data nascimento: ${inputs[3].value}
    genero: ${opicaoRadio()}`;
  }
});

btnLogin();
outroGenreno();
