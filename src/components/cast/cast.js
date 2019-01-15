import $ from 'jquery';

import template from './cast.template';

import Choice from './spells/chooseSpell';

class Cast {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
    contentEl.innerHTML = template;
    Choice.keyPress();
    Choice.mousePress();

    $('#demoModal')
      .modal({});
  }


  static empty() {
    $('#cast')
      .empty();
  }

  static getPlayerCast() {
    Cast.draw();
    const currentCast = 'only_one_cast';

    return new Promise((resolve) => {
      $('#demoModal')
        .on('hidden.bs.modal', () => {
          resolve(currentCast);
        });
    });
  }
}
export default Cast;
