const itensMenu = document.querySelector('.itensMenu')
const menu = document.querySelector('.menu')
menu.addEventListener('click',()=>{
  itensMenu.classList.toggle('hide')
  menu.classList.toggle('bgMenu')
})
