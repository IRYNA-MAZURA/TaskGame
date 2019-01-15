export default function (playerLife, monsterLife) {
  const playerCanvas = document.getElementById('player-lifes');
  const playerContext = playerCanvas.getContext('2d');
  const monsterCanvas = document.getElementById('monster-lifes');
  const monsterContext = monsterCanvas.getContext('2d');

  playerContext.fillStyle = 'rgb(61, 124, 41)';
  monsterContext.fillStyle = 'rgb(61, 124, 41)';


  playerContext.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
  monsterContext.clearRect(0, 0, monsterCanvas.width, monsterCanvas.height);
  playerContext.fillRect(0, 0, 4.5 * playerLife, playerCanvas.height);
  monsterContext.fillRect(0, 0, 4.5 * monsterLife, monsterCanvas.height);
}
