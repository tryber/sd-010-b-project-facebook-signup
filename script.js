// Criamos a função que alerta o valor do campo Email ou Telefone e a atrelamos ao evento do botão de entrar ser clicado.

function alertaEmailOuTelefone() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const botaoEntrar = document.getElementById('button-login');
botaoEntrar.addEventListener('click', alertaEmailOuTelefone);

// Atribuimos uma váriavel ao elemento <p></p> que receberá o texto "campo inválido" caso algum campo do formulário não esteja preenchido.

const textoCamposInvalidos = document.getElementById('campos-invalidos');

function validaInput() {
  const inputs = document.querySelectorAll('.cad');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      return true;
    }
  }
}

function validaRadioButton() {
  const gender = document.getElementsByClassName('radio-button');
  let opcoesSemCheck = 0;
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked === false) {
      opcoesSemCheck += 1;
    }
  }
  if (opcoesSemCheck === 3) {
    return true;
  }
}

// Se algum campo não estiver preenchido paramos a ação padrão do botão de cadastrar e mostrarmos a mensagem "Campos invalidos".

function valida(event) {
  const container = document.querySelector('.right-content');
  const nome = document.getElementById('firstname').value;
  const sobrenome = document.getElementById('lastname').value;
  const contato = document.getElementById('phone_email').value;
  const nascimento = document.getElementById('birthdate').value;
  const genero = document.formulario.gender.value;
  if (validaInput() === true || validaRadioButton() === true) {
    event.preventDefault();
    textoCamposInvalidos.innerHTML = 'Campos inválidos';
  } else {
    container.innerHTML = `Olá, ${nome} ${sobrenome}`;
    container.innerHTML += `<p>${contato}</p><p>${nascimento}</p>
    <p>${genero}</p>`;
  }
}

const botaoCadastrar = document.getElementById('facebook-register');
botaoCadastrar.addEventListener('click', valida);

// Selecionamos a div que contém os radio buttons com opções de genêro e a opção "Personalizado".

const genderOptions = document.getElementById('gender-options');
const personalizado = document.getElementById('personalizado');

/*
Determinamos que, ao clicar em "personalizado", uma função vai verificar quantos são os nós filhos da div que contém as opções de gênero. Se forem 7 (3 para as opçẽs, 2 para os espaços entre elas e 2 que englobam o conteúdo todo) nós, adicionamos um input para o usuário inserir o gênero. Esse processo serve para garantir que não será criada mais de uma caixa caso o usuário clique em "personalizado" mais de uma vez.
*/

function criaInputGenero() {
  const input = document.createElement('input');

  if (genderOptions.childNodes.length === 7) {
    input.placeholder = 'Gênero (opcional)';
    input.name = 'gender-custom';
    input.style.width = '292px';
    input.id = 'input-personalizado';
    genderOptions.appendChild(input);
  }
}

personalizado.addEventListener('click', criaInputGenero);

// Criamos uma função para determinar que caso o usuário selecione outro gênero que não "Personalizado" o campo de input para o gênero personalizado será removido.

function retiraInputPersonalizado() {
  const inputPersonalizado = document.getElementById('input-personalizado');
  if (personalizado.checked === false) {
    inputPersonalizado.remove();
  }
}

genderOptions.addEventListener('click', retiraInputPersonalizado);
