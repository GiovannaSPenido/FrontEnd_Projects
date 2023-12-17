let contador = 0;

function incrementar() {
  contador++;
  atualizarContador();
}

function decrementar() {
  contador--;
  atualizarContador();
}

function resetar() {
  contador = 0;
  atualizarContador();
}

function atualizarContador() {
  document.getElementById('contador').textContent = contador;
}

document.getElementById('incrementar').addEventListener('click', incrementar);
document.getElementById('decrementar').addEventListener('click', decrementar);
document.getElementById('resetar').addEventListener('click', resetar);
