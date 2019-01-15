import template from './battle.template';
import drawPlayer from '../players/drawPlayer';
import drawMonster from '../players/drawMonster';
import generateMonsterName from '../players/generateMonsterName';
import changeLife from '../players/changeLife';
import addButtonExit from './addButtonExit';

class Battle {
  static draw() {
    const elem = document.getElementById('content');
    const contentEl = document.querySelector('body');
    contentEl.removeChild(elem);
    contentEl.innerHTML = template;
    addButtonExit();
    drawMonster();
    drawPlayer();
    changeLife(100, 100);
    const monsterName = document.getElementById('monster-name');
    monsterName.textContent = generateMonsterName();
  }
}

export default Battle;
