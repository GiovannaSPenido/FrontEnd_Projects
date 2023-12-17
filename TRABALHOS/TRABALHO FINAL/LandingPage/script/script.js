//evento de rolagem (scroll)
window.addEventListener("scroll", function(){
    let header = document.querySelector('#lp-nav')
    //toggle -- se a classe existir remova e se ela não existir adicione
    //window.scrollY > 0 -- isso quer dizer que no exato momento que a rolagem no eixo Y for 1 ele aplica essa classe rolagem
    header.classList.toggle('rolagem', window.scrollY > 75)
  })