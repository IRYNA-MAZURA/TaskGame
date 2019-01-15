export default function () {
  const arrOfHeads = ['../src/components/players/img/monster/first_head.png', '../src/components/players/img/monster/second_head.png', '../src/components/players/img/monster/third_head.png'];
  const arrOfHands = ['../src/components/players/img/monster/first_hands.png', '../src/components/players/img/monster/second_hands.png', '../src/components/players/img/monster/third_hands.png'];
  const arrOfBodies = ['../src/components/players/img/monster/first_body.png', '../src/components/players/img/monster/second_body.png', '../src/components/players/img/monster/third_body.png'];
  const arrOfLegs = ['../src/components/players/img/monster/first_legs.png', '../src/components/players/img/monster/second_legs.png', '../src/components/players/img/monster/third_legs.png'];
  const context = document.getElementById('canvas').getContext('2d');

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  function drawImage(img, x, y) {
    if (!img.loaded) return;


    context.drawImage(img.dom, x, y);
  }

  function loadImage(path) {
    const image = document.createElement('img');

    const result = {
      dom: image,
      loaded: false,
    };

    image.onload = () => {
      result.loaded = true;
    };
    image.src = path;

    return result;
  }

  const legs = loadImage(arrOfLegs[randomInteger(1, 3) - 1]);
  const body = loadImage(arrOfBodies[randomInteger(1, 3) - 1]);
  const hands = loadImage(arrOfHands[randomInteger(1, 3) - 1]);
  const head = loadImage(arrOfHeads[randomInteger(1, 3) - 1]);
  let delta = 100;
  let flag = true;

  function draw() {
    context.clearRect(700, 100, 410, 400);
    drawImage(legs, 700, 100);
    drawImage(body, 700, delta);
    drawImage(hands, 700, delta);
    drawImage(head, 700, delta);
    if (delta <= 104 && flag) {
      delta += 0.1;
    } else {
      flag = false;
    }
    if (delta >= 100 && !flag) {
      delta -= 0.1;
    } else {
      flag = true;
    }
    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw);
}
