// Selecione o elemento '.merchandising'
var merchandising = document.querySelector('.merchandising');

// Defina a posição inicial e a velocidade da animação
var position = -27;
var speed = 0.05;

// Crie uma função para atualizar a posição do elemento
function updatePosition() {
  // Atualize a posição
  position += speed;
  
  // Se a posição chegar ao final do intervalo, reinicie-a
  if (position > 27) {
    position = -26; // Mova a posição de volta para o início do intervalo
  }
  
  // Atualize a transformação do elemento
  merchandising.style.transform = 'translateX(' + position + 'vw)';
  
  // Solicite o próximo quadro de animação
  requestAnimationFrame(updatePosition);
}

// Inicie a animação
requestAnimationFrame(updatePosition);

let index = 3;
  const cards = document.querySelectorAll('.cards');
  const c1 = document.querySelector('.c1')
  const percentages = [51, 25.5, 0, -25.5, -51];

  function updateCards() {
    // Remove a classe 'selected' do card atualmente selecionado
    cards.forEach(card => card.classList.remove('selected'));

    // Atualiza a transformação de cada card
    cards.forEach((card, i) => {
      c1.style.transform = `translateX(${percentages[(index + i) % 5]}%)`;
    });

    // Adiciona a classe 'selected' ao novo card selecionado
    cards[index-1].classList.add('selected');
  }

  document.getElementById('right').addEventListener('click', () => {
    index = (index % 5) + 1;
    updateCards();
  });

  document.getElementById('left').addEventListener('click', () => {
    index = ((index - 2 + 5) % 5) + 1;
    updateCards();
  });

  // Adiciona uma animação automática que avança o carrossel a cada 3 segundos
  setInterval(() => {
    index = (index % 5) + 1;
    updateCards();
  }, 5000);

  updateCards();









