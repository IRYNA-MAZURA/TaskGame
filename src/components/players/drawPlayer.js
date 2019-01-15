export default function () {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  function drawImage(img, y) {
    if (!img.loaded) return;
    context.drawImage(img.dom, 30, y);
  }

  function loadImage(path) {
    const image = document.createElement('img');

    const result = {
      dom: image,
      loaded: false,
      num: 1,
    };

    image.onload = () => {
      result.loaded = true;
    };
    image.src = path;

    return result;
  }
  let delta = 150;
  let flag = true;
  const hero = loadImage('../src/components/players/img/hero.png');
  function draw() {
    context.clearRect(30, 150, 226, 280);
    drawImage(hero, delta);
    if (delta <= 154 && flag) {
      delta += 0.1;
    } else { flag = false; }
    if (delta >= 150 && !flag) {
      delta -= 0.1;
    } else { flag = true; }
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
}
