// Variables

// challengeWords[] has been moved to its own file for organization purposes
const playerInput = document.getElementById('playerInput');
const playerInputForm = document.getElementById('playerInputForm');
const scoreText = document.getElementById('score');
const livesText = document.getElementById('lives');
const columnList = ['col1', 'col2', 'col3', 'col4', 'col5'];


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let wordId = 0;
let score = 0;
let lives = 3;
let fallSpeed = 5;

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
    const para = document.createElement('p');
    const randomWord = challengeWords[random(challengeWords.length)]
    const node = document.createTextNode(randomWord);
    para.appendChild(node);
    para.id = wordId;
    wordId += 1;
    para.classList.add('display-4', 'position-fixed', 'hidden-text');
    const randomColumnIndex = columnList[random(columnList.length)];
    const randomColumn = document.getElementById(randomColumnIndex);
    randomColumn.appendChild(para);
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
            if (lives <= 0){
                gameOver();
            }
            clearInterval(scrollInterval);
            instantiateWord();
        } else {
            pos -= fallSpeed;
            e.style.bottom = pos + 'px';
        } 
    }
}

function gameOver(){
    
}