import { soundManager } from 'soundmanager2';
import Spell from './spells/tasks';


export default function () {
  if (Spell.draw.number === 1) {
    const mySound = soundManager.createSound({
      url: '../src/components/cast/spells/sounds/reducto.mp3',
    });
    mySound.play();
  }
  if (Spell.draw.number === 2) {
    const mySound = soundManager.createSound({
      url: '../src/components/cast/spells/sounds/expeliarmus1.mp3',
    });
    mySound.play();
  }
  if (Spell.draw.number === 3) {
    const mySound = soundManager.createSound({
      url: '../src/components/cast/spells/sounds/legilliments.mp3',
    });

    mySound.play();
  }
}
