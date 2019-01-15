import { loadImage, drawImage } from './loadingImage';
import Spell from '../cast/spells/tasks';

export default function () {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  let delta = 260;
  let positionY = 260;
  let temp = 50;

  let fireball;
  let weip;
  if (Spell.draw.number === 1) {
    fireball = loadImage('../src/components/spell-animation/spell3.png');
    weip = loadImage('../src/components/spell-animation/spell31.png');
  }
  if (Spell.draw.number === 2) {
    fireball = loadImage('../src/components/spell-animation/fireball1.png');
    weip = loadImage('../src/components/spell-animation/blick.png');
  }
  if (Spell.draw.number === 3) {
    fireball = loadImage('../src/components/spell-animation/brush.png');
    weip = loadImage('../src/components/spell-animation/weip.png');
  }
  function draw() {
    context.clearRect(delta, positionY, 100, 100);
    drawImage(fireball, delta, positionY, 100, 100);
    if (delta <= 700) {
      delta += 4;
      positionY += 0.55;
    } else {
      context.clearRect(delta, positionY, 100, 100);
      if (temp !== 0) {
        drawImage(weip, 700, 100, 400, 400);
        temp -= 1;
      }
    }
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
}
