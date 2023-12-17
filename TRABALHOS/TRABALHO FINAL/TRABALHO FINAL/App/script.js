// Função para mudar o card
function mudaCard() {
    // Obter o valor da variável --active-card do root
    const valorVariavel = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--active-card'));
  
    // Ocultar todos os cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active');
    });
  
    // Obter o próximo valor da variável (ciclo entre 1, 2 e 3)
    const proximoValorVariavel = (valorVariavel % 3) + 1;
  
    // Atualizar o valor da variável no root
    document.documentElement.style.setProperty('--active-card', proximoValorVariavel);
  
    // Mostrar o card correspondente ao novo valor
    document.getElementById(`card${proximoValorVariavel}`).classList.add('active');
  }
  
  // Chamar a função para iniciar a exibição do primeiro card
  mudaCard();
  
  // Adicionar um listener para reiniciar ao chegar ao último card
  document.querySelector('.next-user').addEventListener('click', function () {
    // Chamar a função normalmente
    mudaCard();
  });

  function toggleChat() {
    // Obter a referência ao elemento do chat
    const chat = document.getElementById('chat');
    // Obter a referência ao botão
    const chatButton = document.querySelector('.start-chat');
  
    // Alternar a visibilidade do chat alterando a variável do root
    const chatDisplay = getComputedStyle(document.documentElement).getPropertyValue('--chat-display');
    document.documentElement.style.setProperty('--chat-display', chatDisplay === 'none' ? 'block' : 'none');
    }
  