const verde = document.getElementById('verde')
const prateado = document.getElementById('prateado')
const dourado = document.getElementById('dourado')
const grafite = document.getElementById('grafite')
const azul = document.getElementById('azul')
const trocaDeImagem = document.getElementById('product-image')
const menu = document.querySelector('span#menu-burger')

verde.addEventListener('click', () => {trocaDeImagem.setAttribute('src', 'imagem/verde.jpg')})

prateado.addEventListener("click", () => {trocaDeImagem.setAttribute('src', 'imagem/prateado.jpg')})

dourado.addEventListener('click', () => {trocaDeImagem.setAttribute('src', 'imagem/dourado.jpg')})

grafite.addEventListener('click', () => {trocaDeImagem.setAttribute('src', 'imagem/grafite.jpg')})

azul.addEventListener('click', () => {trocaDeImagem.setAttribute('src', 'imagem/azul.jpg')})


/* ===================================== MENU ===========================================*/

function c(){
    
   if(ilist.style.display == 'block')
        {ilist.style.display = 'none'}
    else
        {ilist.style.display = 'block'}
}