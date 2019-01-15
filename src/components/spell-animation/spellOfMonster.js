import { loadImage, drawImage } from './loadingImage';

export default function () {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  let delta = 600;
  let positionY = 260;
  let temp = 50;

  const fireball = loadImage('../src/components/spell-animation/monster.png');
  const weip = loadImage('../src/components/spell-animation/attace.png');
  function draw() {
    context.clearRect(delta, positionY, 100, 100);
    drawImage(fireball, delta, positionY, 100, 100);
    if (delta >= 260) {
      delta -= 4;
      positionY += 0.55;
    } else {
      context.clearRect(delta, positionY, 100, 100);
      if (temp !== 0) {
        drawImage(weip, 30, 150, 230, 270);
        temp -= 1;
      }
    }
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
}
