const arrayOfAdjectives = ['Страшный', 'Ужасный', 'Опасный', 'Огромный', 'Чудовищный'];
const arrayOfExists = ['огр', 'тролль', 'орк', 'ситх', 'бомж'];
const arrayOfNames = ['Иннокентий', 'Василий', 'Станислав', 'Сигизмунд', 'Адольф'];

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

export default function generateFullName() {
  return `${arrayOfAdjectives[randomInteger(1, 5) - 1]} ${arrayOfExists[randomInteger(1, 5) - 1]} ${arrayOfNames[randomInteger(1, 5) - 1]}`;
}
