import $ from 'jquery';
import template from './modal-dialog.template';
import './modal-dialog.css';

class ModalDialog {
  static draw() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('beforeend', template);

    $('#demoModal').modal({
      backdrop: 'static',
      keyboard: false,
    });
  }
}

export default ModalDialog;
