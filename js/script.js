'use strict';

const text = document.querySelector('#color'),
  button = document.querySelector('#change');

const changeColor = function () {
  const randomNumber = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  document.body.style = 'background-color: ' + randomNumber;
  button.style.color = randomNumber;
  text.textContent = randomNumber;
};

button.addEventListener('click', changeColor);
