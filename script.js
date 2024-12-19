// Adiciona movimento lateral ao texto
const text = document.getElementById('moving-text');

let direction = 1; // Direção inicial
let position = 0;

function moveTextHorizontally() {
  position += direction * 2; // Ajusta a velocidade
  if (position > 200 || position < -200) direction *= -1; // Inverte direção
  text.style.transform = `translate(${position}px, 0)`;
  requestAnimationFrame(moveTextHorizontally);
}

moveTextHorizontally();
