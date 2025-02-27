/* const botao = document.querySelector('button')

function handleClick(e:PointerEvent){
    console.log(e.pageX)
    if(botao instanceof HTMLElement){
        botao.style.background = 'black'
    }
}

botao?.addEventListener('click', handleClick) */

// menu lateral mobile

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu);



