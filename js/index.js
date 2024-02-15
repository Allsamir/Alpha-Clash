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
let life = 5;
const mainScore = document.getElementById('main-score')

function hideSection(element) { // dynamic add hidden class
          const home = document.getElementById(element)
          home.classList.add('hidden');
}

function addSection(element) { // dynamic remove hidden class
          const playGround = document.getElementById(element)
          playGround.classList.remove('hidden')
}

function startGame() { // random key generator
          const alphabet = 'abcdefghijklmnopqrstuvwxyz'
          const alphabets = alphabet.split('');
          const randomNumber = Math.floor(Math.random() * 26);
          showAlphabet.innerText = alphabets[randomNumber].toUpperCase();
          showBg(alphabets[randomNumber])
}

function stopGame(lifeToGameOver) { // stop the game and show the result
          if (lifeToGameOver <= 0) {
                    hideSection('play-ground');
                    addSection('score-screen');
                    mainScore.innerText = score;
          }
}

function resetEveryThing() { // reset everything
          score = 0;
          showScore.innerText = score;
          errorTextShow.innerText = '';
          life = 5;
          showLife.innerText = life;
}

function showBg (alphabet) { // random alphabet's bg
          const bg = document.querySelector('.' + alphabet);
          bg.classList.add('bg-yellow-400');
}

function gameFuntionality (pressedKey, lowerCaseAlphapet) { // game funtionality
                    if (pressedKey.id === lowerCaseAlphapet) {
                              score++;
                              startGame();
                              showScore.innerText = score;
                              errorTextShow.innerText = '';
                    } else {
                              errorTextShow.innerText = "Pressed wrong key";
                              life--;
                              showLife.innerText = life;
                              stopGame(life);
                    }
}

function quitTheGame(pressedKey) {
          if (pressedKey === 'Escape') {
                    hideSection('play-ground');
                    addSection('score-screen');
                    mainScore.innerText = score;
          }
}

document.addEventListener('keydown', (e) => { // getting the pressed key
          const pressedKey = document.querySelector('.' + e.key); //Pressed key
          const lowerCase = showAlphabet.innerText.toLowerCase(); // Random key
          quitTheGame(e.key);
          try {
                    pressedKey.classList.add('bg-yellow-400');
                    setTimeout(() => {
                              pressedKey.classList.remove('bg-yellow-400')
                    }, 200)
                    gameFuntionality(pressedKey, lowerCase);
          } catch (err) {
                    errorTextShow.innerText = "Press Alphabets Only";
          }
})