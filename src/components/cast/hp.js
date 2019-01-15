import { soundManager } from 'soundmanager2';
import spellOfHero from '../spell-animation/spellOfHero';
import spellOfMonster from '../spell-animation/spellOfMonster';
import ModalDialog from '../modal-dialog/modal-dialog';
import Cast from './cast';
import changeLife from '../players/changeLife';
import drawMonster from '../players/drawMonster';
import generateMonsterName from '../players/generateMonsterName';
import postScore from './server-requests/postScore';
import getScore from './server-requests/getScore';
import defSound from './definitionSound';

let hpHero = 100;
let hpMonster = 100;
let round = 1;
export default function (roundResult) {
  if (roundResult === 1) {
    defSound();
    spellOfHero();
    hpMonster -= 25;
  } else {
    const mySound = soundManager.createSound({
      url: '../src/components/cast/spells/sounds/crucio.mp3',
    });
    mySound.play();
    spellOfMonster();
    hpHero -= 25;
  }
  changeLife(hpHero, hpMonster);
  setTimeout(() => {
    ModalDialog.draw();
    Cast.getPlayerCast();
    if (hpMonster === 0) {
      hpMonster = 100;
      const monsterName = document.getElementById('monster-name');
      monsterName.textContent = generateMonsterName();
      changeLife(hpHero, hpMonster);
      round += 1;
      document.getElementById('number-round').textContent = `${round}`;
      drawMonster();
    } else if (hpHero === 0) {
      Cast.empty();
      const contentE1 = document.querySelector('#demoModalLabel');
      contentE1.innerHTML = 'Game Over';
      const contentE2 = document.querySelector('.modal-body');
      const fieldForName = document.getElementById('player-name').textContent;
      contentE2.innerHTML = `${fieldForName}:     ${round - 1}`;
      postScore(fieldForName, round);
      const recordButton = document.createElement('button');
      recordButton.id = 'record-button';
      recordButton.className = 'records-game';
      recordButton.textContent = 'Рекорды (Shift)';
      contentE2.appendChild(recordButton);
      recordButton.addEventListener('click', getScore);
      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 16 && document.getElementById('record-window') === null) {
          getScore();
        }
      }, true);
    }
  }, 4000);
}
