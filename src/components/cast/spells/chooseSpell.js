import Spell from './tasks';

class Choice {
  static keyPress() {
    window.addEventListener('keydown', (key) => {
      const K_LEFT = 37;
      const K_RIGHT = 39;
      const K_DOWN = 40;

      if (document.getElementById('spell-legilimens') !== null) {
        if (key.keyCode === K_LEFT) {
          Spell.draw.number = 1;
          Spell.draw();
        }
        if (key.keyCode === K_RIGHT) {
          Spell.draw.number = 3;
          Spell.draw();
        }
        if (key.keyCode === K_DOWN) {
          Spell.draw.number = 2;
          Spell.draw();
        }
      }
    }, false);
  }

  static mousePress() {
    const sectionCast = document.getElementById('cast');
    sectionCast.onclick = (event) => {
      let target = event.target;

      // цикл двигается вверх от target к родителям до table
      while (target !== sectionCast) {
        if (target.id === 'spell-reducto') {
          // нашли элемент, который нас интересует!
          Spell.draw.number = 1;
          Spell.draw();
          return;
        }
        if (target.id === 'spell-expelliarmus') {
          // нашли элемент, который нас интересует!
          Spell.draw.number = 2;
          Spell.draw();
          return;
        }
        if (target.id === 'spell-legilimens') {
          // нашли элемент, который нас интересует!
          Spell.draw.number = 3;
          Spell.draw();
          return;
        }

        target = target.parentNode;
      }
    };
  }
}
export default Choice;
