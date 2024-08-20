/* uma constante ta recebendo TODOS os botoes com a classe toggle-nav*/
const btsToggleNav = document.querySelectorAll('button.toggle-nav')

/* uma constante recebe a PRIMEIRA nav que o query achar*/
const nv = document.querySelector('nav')

/* a constante que tem todos os botoes rece uma função que diz que PARA CADA UM deles (chamados de bt)
quando forem clicados vai "retirar"? a classe open*/

btsToggleNav.forEach(function(bt){
  bt.addEventListener('click', function(){
    nv.classList.toggle('open')
  })
})
