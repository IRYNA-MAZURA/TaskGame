import $ from 'jquery';
import { soundManager } from 'soundmanager2';
import template from './tasks.template';
import getHP from '../hp';

const fetch = require('node-fetch');

let firstNumber; let secondNumber;
let answer; let question;
let d;
let numberOfQuestion;
let task;
let jsonTasksArray;
const jsonTasksPromise = fetch('../src/components/cast/spells/task.json');

jsonTasksPromise
  .then(response => response.json())
  .then((res) => {
    jsonTasksArray = res;
  });


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getInputValue() {
  const input = document.querySelector('#input-answer');
  return input.value;
}

function checkAnswer(event) {
  event.preventDefault();
  const result = getInputValue();
  let right = 0;
  const contentE2 = document.querySelector('#demoModalLabel');


  switch (numberOfQuestion) {
    case 1:
      if (d === 0) {
        answer = firstNumber + secondNumber;
      } else if (d === 1) {
        answer = firstNumber - secondNumber;
      } else {
        answer = firstNumber * secondNumber;
      }

      if (answer === +result) { right = 1; }
      break;

    case 2:
      answer.forEach((item) => {
        if (item.toLowerCase() === result.toLowerCase()) { right = 1; }
      });
      break;

    case 3:
      if (answer.toLowerCase() === result.toLowerCase()) { right = 1; }
      break;

    case 4:
      if (answer === +result) { right = 1; }
      break;


    default: console.log('error');
      break;
  }

  if (right === 1) {
    contentE2.innerHTML = 'Красавчик!!!';
  } else {
    contentE2.innerHTML = 'Не красавчик!!!';
  }
  setTimeout(() => {
    $('#demoModal').empty();
    const dialog = document.getElementById('demoModal');
    dialog.remove();
    getHP(right);
  }, 2000);
}

function tasks() {
  task = 'Решите математический пример';
  numberOfQuestion = 1;
  firstNumber = getRandomInt(10, 20);
  secondNumber = getRandomInt(0, 10);
  const c = ['+', '-', '*'];
  d = getRandomInt(0, 2);
  question = `${firstNumber + c[d] + secondNumber}?`;
}

function two() {
  task = 'Напишите перевод';
  numberOfQuestion = 2;
  const vocabulary = jsonTasksArray[0].two;
  const words = Object.keys(vocabulary);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = vocabulary[question];
}

function three() {
  numberOfQuestion = 4;
  task = 'Продолжите математическую последовательность';
  const obj = jsonTasksArray[1].three;
  const keysOfObject = Object.keys(obj);
  const numberOfSequence = keysOfObject[Math.floor(Math.random() * (keysOfObject.length - 1))];
  const sequence = obj[numberOfSequence];
  question = sequence.slice(0, sequence.length - 1);
  answer = sequence[sequence.length - 1];
}

function four() {
  numberOfQuestion = 3;
  task = 'Назовите столицу';
  const list = jsonTasksArray[2].four;
  const countries = Object.keys(list);
  question = countries[Math.floor(Math.random() * (countries.length - 1))];
  answer = list[question];
}

function five() {
  numberOfQuestion = 3;
  task = 'Сравните два числа (<, >, =)';
  const list = jsonTasksArray[3].five;
  const numbers = Object.keys(list);
  const number = numbers[Math.floor(Math.random() * (numbers.length - 1))];
  firstNumber = list[number][0];
  secondNumber = list[number][1];
  question = `${firstNumber}` + ' ? ' + `${secondNumber}`;
  answer = list[number][2];
}

function six() {
  numberOfQuestion = 3;
  task = 'Укажите род слова (м-мужской, ж-женский, с-средний)';
  const list = jsonTasksArray[4].six;
  const words = Object.keys(list);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = list[question];
}

function seven() {
  numberOfQuestion = 3;
  task = 'Аудирование';
  question = 'Напишите услышанное';
  const list = jsonTasksArray[5].seven;
  const words = Object.keys(list);
  answer = words[Math.floor(Math.random() * (words.length - 1))];
  const mySound = soundManager.createSound({
    url: list[answer],
  });
  mySound.play();
}

function eight() {
  numberOfQuestion = 3;
  task = 'Назовите день недели';
  const list = jsonTasksArray[6].eight;
  const words = Object.keys(list);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = list[question];
}

function nine() {
  numberOfQuestion = 3;
  task = 'Составьте слово из букв';
  const list = jsonTasksArray[7].nine;
  const words = Object.keys(list);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = list[question];
}

function ten() {
  numberOfQuestion = 3;
  task = 'Вставьте недостающую букву';
  const list = jsonTasksArray[8].ten;
  const words = Object.keys(list);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = list[question];
}

function eleven() {
  numberOfQuestion = 4;
  task = 'Укажите количество слогов в слове (ответ должен быть числом)';
  const list = jsonTasksArray[9].eleven;
  const words = Object.keys(list);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = list[question];
}

function twelve() {
  numberOfQuestion = 3;
  task = 'Назовите цвет радуги';
  const list = jsonTasksArray[10].twelve;
  const words = Object.keys(list);
  question = words[Math.floor(Math.random() * (words.length - 1))];
  answer = list[question];
}

function thirteen() {
  numberOfQuestion = 3;
  task = 'Составное ли число (ответ: да или нет)';
  const list = jsonTasksArray[11].thirteen;
  const numbers = Object.keys(list);
  question = numbers[Math.floor(Math.random() * (numbers.length - 1))];
  answer = list[question];
}

function fourteen() {
  numberOfQuestion = 4;
  task = 'Сколько дней в';
  const list = jsonTasksArray[12].fourteen;
  const month = Object.keys(list);
  question = month[Math.floor(Math.random() * (month.length - 1))];
  answer = list[question];
}

function fifteen() {
  numberOfQuestion = 3;
  task = 'Напишите лишнее слово';
  const list = jsonTasksArray[13].fifteen;
  const string = Object.keys(list);
  question = string[Math.floor(Math.random() * (string.length - 1))];
  answer = list[question];
}

class Spell {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
    contentEl.innerHTML = template;
    const form = document.querySelector('#form');
    form.onsubmit = checkAnswer;
    const masFunc = [tasks, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
      thirteen, fourteen, fifteen];
    const callFunc = masFunc[Math.floor(Math.random() * (masFunc.length - 1))];
    document.getElementById('input-answer').focus();
    callFunc();
    const contentE2 = document.querySelector('#demoModalLabel');
    contentE2.innerHTML = task;


    const contentE3 = document.querySelector('#question');
    contentE3.innerHTML = question;

    $('#demoModal').modal({});
  }


  static empty() {
    $('#task').empty();
  }
}

export default Spell;
