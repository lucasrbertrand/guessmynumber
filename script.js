'use strict';

// // Somente para ver o resultado
// // lê primeiro esse então vai aparecer no console
// // "Start Guessing"

// console.log(document.querySelector('.message').textContent);

// // serve para substituir o valor de todos os textos
// // dentro da class ".message"
// // isso já é manipulação do DOM

// document.querySelector('.message').textContent = 'Correct Number, baby!';

// //Vai ler após a mudança

// console.log(document.querySelector('.message').textContent);

// // selecionar os elementos de classe number e score

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// //selecionar o input field, usa-se o value pois não é
// //texto, então busca-se o type dele que é value.

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//-------------------------------------------//

// seleciona primeiro o botão
// depois adiciona o evento
// após o segundo clique devemos passar a funcionalidade dele, então teremos que retornar uma função.

//após a "," do click passamos o valor da função
// neste caso queremos passar o VALOR digitado no input, para o console, para sabermos que foi pego o valor.
// A função neste caso é um EVENT HANDLER

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

const btnCheckPress = function () {
  const guess = Number(document.querySelector('.guess').value);
  secretNumber;

  // When there is no input at the guess

  if (!guess) {
    displayMessage('Type a number beetween 1 and 20');

    // When you got the guess right
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Amazing!!! ${secretNumber} is right`;
    document.querySelector('body').style.backgroundColor = '#FF3CAC';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //when guess is different than secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Try a LOWER number' : 'Try a HIGHER number'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost! Try again!');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#E23D28';
      document.querySelector('body').style.backgroundImage = 'none';
    }
  }
};

// When guess is higher than the correct one
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = `Try a lower number`;
//   } else {
//     document.querySelector('.message').textContent = `You lost! Try again!`;
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#E23D28';
//     document.querySelector('body').style.backgroundImage = 'none';
//   }

// When guess is lower than the correct one
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = `Try a higher number`;
//     } else {
//       document.querySelector('.message').textContent = `You lost! Try again`;
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#E23D28';
//       document.querySelector('body').style.backgroundImage = 'none';
//     }
//   }
// };

// Função do botão again

const resetBtn = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#0093e9';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayScore(score);
};

document.querySelector('.again').addEventListener('click', resetBtn);

// Função do botão check!

document.querySelector('.check').addEventListener('click', btnCheckPress);
