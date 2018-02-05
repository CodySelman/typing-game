gameStart();

// Variables

// challengeWords[] has been moved to its own file for organization purposes
const playerInput = document.getElementById('playerInput');
const playerInputForm = document.getElementById('playerInputForm');
const scoreText = document.getElementById('score');
const livesText = document.getElementById('lives');
const columnList = ['col1', 'col2', 'col3', 'col4', 'col5'];
const scrollInterval = setInterval(scrollText, 10);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

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
    const newWord = document.createElement('p');
    const randomWord = challengeWords[random(challengeWords.length)]
    const newWordText = document.createTextNode(randomWord);
    newWord.appendChild(newWordText);
    newWord.classList.add('currentWords'); 
    newWord.classList.add('display-4', 'position-fixed');
    const randomColumnIndex = columnList[random(columnList.length)];
    const randomColumn = document.getElementById(randomColumnIndex);
    randomColumn.appendChild(newWord);
    const pos = windowHeight;
    newWord.style.bottom = pos + 'px';
    // scrollText(newWord);
}

function checkAnswer(e){
    e.preventDefault();
    const currentWords = document.getElementsByClassName('currentWords');
    for(i = 0; i <= (currentWords.length - 1); i += 1){
        if (currentWords[i] && playerInput.value === currentWords[i].innerHTML){
            currentWords[i].parentNode.removeChild(currentWords[i]);
            playerInput.value = '';
            score += 1;
            scoreText.innerHTML = 'Score: ' + score;
            instantiateWord();
        }
    }
}

function scrollText(){
    const currentWords = document.getElementsByClassName('currentWords');
    for(i = 0; i <= (currentWords.length - 1); i += 1){
        let pos = currentWords[i].style.bottom.slice(0, -2);
        pos = Number(pos);
        if (pos <= -100){
            currentWords[i].parentNode.removeChild(currentWords[i]);
            currentWords.splice(i, 1);
            lives -= 1;
            livesText.innerHTML = 'Lives: ' + lives;
            if (lives <= 0){
                gameOver();
            } else {
                instantiateWord();
            }
        } else {
            pos -= fallSpeed;
            currentWords[i].style.bottom = pos + 'px';
        }
        console.log(typeof(pos));
    }
}

function welcomeScreen(){
    // function that loads welcome screen upon page load
}

function gameOver(){
    // function showing game over screen upon losing and prompts for retry
}

function gameStart(){
    const main = document.createElement('main');
    main.id = 'main';
    main.classList.add('h-70', 'row');
    const body = document.getElementById('body');
    body.appendChild(main);
    for(i = 0; i <= 6; i += 1){
        const div = document.createElement('div');
        const divId = 'col' + i;
        div.id = divId;
        div.classList.add('h-100');
        if (i === 0 || i === 6){
            div.classList.add('col-md-1');
        } else {
            div.classList.add('col-md-2');
        }
        main.appendChild(div);
    }
    const pLives = document.createElement('p');
    const pScore = document.createElement('p');
    pLives.id = 'lives';
    pScore.id = 'score';
    const col0 = document.getElementById('col0');
    col0.appendChild(pLives);
    col0.appendChild(pScore);
    pLivesText = document.createTextNode('Lives: 3');
    pScoreText = document.createTextNode('Score: 0');
    pLives.appendChild(pLivesText);
    pScore.appendChild(pScoreText);

    const footer = document.createElement('footer');
    footer.classList.add('h-20');
    body.appendChild(footer);
    const form = document.createElement('form');
    form.id = 'playerInputForm';
    form.classList.add('inputForm', 'w-100', 'd-flex', 'justify-content-center');
    form.autocomplete= 'off';
    textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.id = 'playerInput';
    textInput.classList.add('display-4', 'bg-dark', 'text-green', 'w-100', 'text-center');
    textInput.autofocus = 'true';
    footer.appendChild(form);
    form.appendChild(textInput);
}