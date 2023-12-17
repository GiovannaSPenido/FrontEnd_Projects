// Listar contatos (apenas uma vez)

var contadorDeCliques = 0;
var listarContatos = document.getElementById("listarContatos");
listarContatos.onclick = function() {
  contadorDeCliques += 1;
  if (contadorDeCliques === 1) {
    listar(contatos);
  }
};

// Criando lista inicial de contatos como objetos do JavaScript
var ana = {
  nome: "Ana",
  sobrenome: "Nascimento",
  celular: "(21) 9999-9999",
  email: "ana.nascimento@mail.com"
};

var carlos = {
  nome: "Carlos",
  sobrenome: "Maciel",
  celular: "(21) 8888-8888",
  email: "carlos.maciel@mail.com"
};

var manoel = {
  nome: "Manoel",
  sobrenome: "Almeida",
  celular: "(21) 7777-7777",
  email: "manoel.almeida@mail.com"
};

// Inserindo os contatos em um vetor

var contatos = [ana, carlos, manoel];

// Percorrendo cada contato (objeto) no vetor

function listar() {
  for (var i = 0; i < contatos.length; i++) {
    imprimir(contatos[i]);
  }
}

// Função para imprimir os contatos

function imprimir(pessoa) {
  var contatos = document.getElementById('contatos');
  contatos.innerHTML += "<div class='itemLista'><b>Nome</b>: " + pessoa.nome + " " + pessoa.sobrenome + "<br><b>Celular</b>: " + pessoa.celular + "<br><b>E-mail</b>: " + pessoa.email + "</div>";
}

// Função para adicionar novo contato

var adicionarContato = document.getElementById("adicionarContato");
adicionarContato.onclick = function() {
  var nome = prompt("Digite um nome");
  var sobrenome = prompt("Digite um sobrenome");
  var celular = prompt("Digite um número de celular");
  var email = prompt("Digite um endereço de e-mail");

  if (nome === null && sobrenome === null && celular === null && email === null) {
    nome = "";
    sobrenome = "";
    celular = "";
    email = "";
  }
  contatos[contatos.length] = new add(nome, sobrenome, celular, email);
  atualizarLista();
}

// Atualizar lista de contatos
function atualizarLista() {
  document.getElementById('contatos').innerHTML = ''; // Limpar a lista de contatos exibida
  listar(contatos.length); // Listar os contatos novamente
}

// Método (função associada a um objeto) para criar um novo contato (objeto com propriedades)

function add(nome, sobrenome, celular, email) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.celular = celular;
  this.email = email;
}

// Função para remover contato

var removerContato = document.getElementById("removerContato");
removerContato.onclick = function() {
  var removerNome = prompt("Digite o primeiro nome do contato que deseja remover");
  for (var i = 0; i < contatos.length; i++) {
    if (removerNome === contatos[i].nome) {
      contatos.splice(contatos[i], 1); // Remove objeto do vetor de contatos
    }
  }
  atualizarLista();
}

// Limpar lista de contatos

var limparLista = document.getElementById("limparLista");
limparLista.onclick = function() {
  location.reload(true);
}