import template from './login.template';
import addButtonExit from '../battle/addButtonExit';
import getScore from '../cast/server-requests/getScore';

class LoginField {
  static draw() {
    const contentEl = document.querySelector('body');
    contentEl.innerHTML = template;
    addButtonExit();
    const contentE2 = document.getElementById('records');
    contentE2.addEventListener('click', getScore);

    document.getElementById('form').addEventListener('keydown', (event) => {
      if (event.keyCode === 13 && document.getElementById('input-text').value === '') {
        event.preventDefault();
      }
      if (event.keyCode === 16 && document.getElementById('record-window') === null) {
        getScore();
      }
    });
  }
}

export default LoginField;
