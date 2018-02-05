// Variables

// challengeWords[] has been moved to its own file for organization purposes
const playerInput = document.getElementById('playerInput');
const playerInputForm = document.getElementById('playerInputForm');
const scoreText = document.getElementById('score');
const livesText = document.getElementById('lives');


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let wordId = 0;
let score = 0;
let lives = 3;
let fallSpeed = 1;

// Event Listeners

playerInput.addEventListener('input', checkAnswer);
playerInputForm.addEventListener('submit', noRefresh);

// Initialize

instantiateWord();

// Functions

function random(e){
    return (Math.floor(Math.random() * e));
}
function noRefresh(e){
    e.preventDefault();
    playerInput.value = '';
}

function instantiateWord() {
    var para = document.createElement('p');
    var node = document.createTextNode(challengeWords[random(challengeWords.length)]);
    para.appendChild(node);
    para.id = wordId;
    para.classList.add('display-4', 'position-fixed', 'hidden-text');
    var element = document.getElementById('col1');
    element.appendChild(para);
    scrollText(para);
}

function checkAnswer(e){
    e.preventDefault();
    for(i = 0; i <= wordId; i += 1){
        const maybeWordId = document.getElementById(wordId.toString());
        if (maybeWordId && playerInput.value === maybeWordId.innerHTML){
            console.log('success');
            maybeWordId.parentNode.removeChild(maybeWordId);
            instantiateWord();
            playerInput.value = '';
            score += 1;
            scoreText.innerHTML = 'Score: ' + score;
        }
    }
}

function scrollText(e){
    let pos = windowHeight;
    const scrollInterval = setInterval(scroll, 10);
    function scroll(){
        if (pos <= -200 && e){
            lives -= 1;
            livesText.innerHTML = 'Lives: ' + lives;
            clearInterval(scrollInterval);
            instantiateWord();
        } else {
            pos -= fallSpeed;
            e.style.bottom = pos + 'px';
        } 
        
    }
}