export default function () {
  const buttonExit = document.createElement('button');
  const link = document.createElement('a');
  link.className = 'link';
  link.href = 'https://anastasiyamazura.github.io/TaskGame/';
  buttonExit.className = 'button-exit';
  buttonExit.id = 'button-exit';
  buttonExit.textContent = 'Выход (Esc)';
  const contentBody = document.getElementById('page');
  link.appendChild(buttonExit);
  contentBody.appendChild(link);
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      document.location.href = 'https://anastasiyamazura.github.io/TaskGame/';
    }
  });
}
