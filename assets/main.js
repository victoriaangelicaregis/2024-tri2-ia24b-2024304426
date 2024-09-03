// uma constante(não muda valor) ta recebendo TODOS os botoes com a classe toggle-nav//
//toggle significa alternar//

const btsToggleNav = document.querySelectorAll('button.toggle-nav')

// uma constante recebe a PRIMEIRA nav que o query achar//
const nv = document.querySelector('nav')

/* a constante que tem todos os botoes rece uma FUNÇÃO que diz que PARA CADA UM desses botoes (chamados de bt)
quando forem clicados vai retirar ou colocar a classe open*/

//bt é não esta no plural pois ele pega SÓ UM BOTAO DE CADA VEZ e executa a função, depois ele passa para o segundo botão etc...//

//existe uma função em que se usa uma setinha -> , essa setinha não leva o contexto do codigo//

btsToggleNav.forEach(function(bt){
  bt.addEventListener('click', function(){
    nv.classList.toggle('open')
  })
})
