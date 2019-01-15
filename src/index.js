import $ from 'jquery';
import 'bootstrap';
import { soundManager } from 'soundmanager2';
import LoginField from './components/login/login';
import ModalDialog from './components/modal-dialog/modal-dialog';
import Battle from './components/battle/battle';
import Cast from './components/cast/cast';
import { pause } from './utils';

const getBattleResult = async (player) => {
  const mySound = soundManager.createSound({
    url: '../src/components/cast/spells/sounds/music.mp3',
    loops: Infinity,
  });
  mySound.setVolume(5);
  mySound.play();
  Battle.draw();
  const fieldForName = document.getElementById('player-name');
  fieldForName.textContent = player;
  await pause(3000);
  ModalDialog.draw();
  await Cast.getPlayerCast();
};

const startApp = () => {
  window.$ = $; // for debug

  LoginField.draw();


  $('.start-game').on('click', async () => {
    const name = document.getElementById('input-text').value;
    await getBattleResult(name);
  });
};

startApp();
