tailwind.config = {
          theme: {
                    extend: {
                              colors: {
                                        mainBg: '#010313',
                                        borderColor: 'rgba(1, 3, 19, 0.80)',
                                        playBg: 'rgba(255, 255, 255, 0.70)',
                                        gradiantColor1: "rgba(255, 255, 255, 0.56)",
                                        gradiantColor2: "rgba(152, 151, 151, 0.00)",
                                        scoreBorder: "rgba(255, 255, 255, 0.20)"
                              }
                    }
          }
}

const showAlphabet = document.getElementById('show-alphabet');
let score = 0;
const showScore = document.getElementById('score');
const errorTextShow = document.getElementById('error-text');
const showLife = document.getElementById('life')
let life = 1;
const mainScore = document.getElementById('main-score')

function hideSection(element) {
          const home = document.getElementById(element)
          home.classList.add('hidden');
}

function addSection(element) {
          const playGround = document.getElementById(element)
          playGround.classList.remove('hidden')
}

function startGame() {
          const alphabet = 'abcdefghijklmnopqrstuvwxyz'
          const alphabets = alphabet.split('');
          const randomNumber = Math.floor(Math.random() * 26);
          showAlphabet.innerText = alphabets[randomNumber].toUpperCase();
}

function stopGame(lifeToGameOver) {
          if (lifeToGameOver <= 0) {
                    hideSection('play-ground');
                    addSection('score-screen');
                    mainScore.innerText = score;
          }
}

function resetEveryThing() {
          score = 0;
          showScore.innerText = score;
          errorTextShow.innerText = '';
          life = 1;
          showLife.innerText = life;
}

document.addEventListener('keydown', (e) => {
          const pressedKey = document.querySelector('.' + e.key);
          const lowerCase = showAlphabet.innerText.toLowerCase();
          try {
                    pressedKey.classList.add('bg-yellow-400');
                    setTimeout(() => {
                              pressedKey.classList.remove('bg-yellow-400')
                    }, 200)
                    if (pressedKey.id === lowerCase) {
                              score++;
                              life++;
                              startGame();
                              showScore.innerText = score;
                              showLife.innerText = life;
                              errorTextShow.innerText = '';
                    } else {
                              errorTextShow.innerText = "Pressed wrong key";
                              life--;
                              showLife.innerText = life;
                              stopGame(life);
                    }
          } catch (err) {
                    errorTextShow.innerText = "Press Alphabets Only";
          }
})