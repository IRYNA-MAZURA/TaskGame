const fetch = require('node-fetch');


function outputScore(results) {
  const recordWindow = document.createElement('div');
  recordWindow.className = 'record-window';
  recordWindow.id = 'record-window';
  const label = document.createElement('span');
  label.textContent = 'Рекорды';
  recordWindow.appendChild(label);
  const listRecord = document.createElement('div');
  listRecord.className = 'list-record';
  listRecord.id = 'list-record';
  recordWindow.appendChild(listRecord);
  results.forEach((element) => {
    let resultText = '';
    const outputRecord = document.createElement('span');
    resultText += `${element.name}` + ' :    ' + `${element.score}`;
    outputRecord.textContent = resultText;
    listRecord.appendChild(outputRecord);
  });
  const buttonBack = document.createElement('button');
  buttonBack.className = 'button-back';
  buttonBack.textContent = 'Назад (Shift)';
  buttonBack.id = 'btn-back';
  recordWindow.appendChild(buttonBack);
  document.getElementById('page').appendChild(recordWindow);
  buttonBack.addEventListener('click', () => {
    document.getElementById('record-window').remove();
  });
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 16) {
      document.getElementById('record-window').remove();
    }
  }, false);
}

export default function () {
  const score = fetch('http://localhost:8000/score');
  score.then(res => res.json())
    .then((res) => {
      outputScore(res);
    });
}
