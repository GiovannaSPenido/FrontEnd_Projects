const fieldEnviado = document.getElementById('enviado');
const btnSendRequest = document.getElementById('btn-send');

btnSendRequest.addEventListener('click', () => {
  fieldEnviado.innerHTML = 'Request successfully sent to Email'
  fieldEnviado.style.color = '#A00CE5'
})