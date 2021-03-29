function mostrarEmail() {
  const texto = document.getElementById('user-email-phone').value;
  alert(`${texto}`);
}

function bttEntrar() {
  const botaoLogin = document.getElementById('button-login');
  botaoLogin.addEventListener('click', mostrarEmail);
}

bttEntrar();

function mostrarElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'flex';
}

function adcEvntoGenPers() {
  const personalizado = document.getElementById('personalizado');
  personalizado.addEventListener('click', mostrarElemento);
}

adcEvntoGenPers();

function esconderElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'none';
}

function adcEvntoMascFem() {
  const masculino = document.getElementById('masculino');
  masculino.addEventListener('click', esconderElemento);
  const feminino = document.getElementById('feminino');
  feminino.addEventListener('click', esconderElemento);
}

adcEvntoMascFem();

function verifica() {
  const nome = document.getElementById('nameLogin').value;
  const sobrenome = document.getElementById('lastnameLogin').value;
  const contato = document.getElementById('phoneEmailLogin').value;
  const nascimento = document.getElementById('nascimentoLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  const elementos = [nome, sobrenome, contato, nascimento, senha];
  let saida = false;
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      saida = true;
    }
  }
  return saida;
}

function mostrarInfos(event) {
  event.preventDefault();
  const elemento = document.getElementsByClassName('right-content')[0];
  const nome = document.getElementById('nameLogin').value;
  const sobrenome = document.getElementById('lastnameLogin').value;
  const contato = document.getElementById('phoneEmailLogin').value;
  const nascimento = document.getElementById('nascimentoLogin').value;
  const form = document.getElementById('registro');
  const genero = form.elements.gender.value;
  while (elemento.firstChild) {
    elemento.removeChild(elemento.lastChild);
  }
  elemento.style.flexDirection = 'column';
  elemento.innerHTML = `<h1>Olá, ${nome} ${sobrenome}</h1><p>${contato}</p>`;
  elemento.innerHTML += `<p>${nascimento}</p><p>${genero}</p>`;
}

function dados(event) {
  const nome = document.getElementById('nameLogin').value;
  const sobrenome = document.getElementById('lastnameLogin').value;
  const contato = document.getElementById('phoneEmailLogin').value;
  const nascimento = document.getElementById('nascimentoLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  const elementos = [nome, sobrenome, contato, nascimento, senha];
  let estado = true;
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      estado = false;
    }
  }
  if (estado) {
    mostrarInfos(event);
  }
}

function valida(event) {
  const saida = verifica();
  if (saida) {
    document.getElementById('campos-invalidos').style.display = 'flex';
  }
  dados(event);
}

function bttCadastro() {
  const botaoCadastro = document.getElementById('facebook-register');
  botaoCadastro.addEventListener('click', valida);
}

bttCadastro();
