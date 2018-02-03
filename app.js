// Variables

const  playerInputForm = document.getElementById('userInput');
let currentWord = 'type this';
const currentWordForm = document.getElementById('current-word');
const challengeWords = ['firstWord', 'secondWord', 'thirdWord'];

// Event Listeners

playerInputForm.addEventListener('input', submitText);

// Initialize

instantiateWord();

// Functions

function submitText(e){
    e.preventDefault();
    const playerInput = playerInputForm.value;
    if (playerInput === currentWordForm.innerHTML){
        console.log('success');
        currentWordForm.innerHtml = '';
        instantiateWord();
    }

}

function instantiateWord() {
    currentWordForm.innerHTML = randomWord();
}

function randomWord(){
    const randomNumber = (Math.floor(Math.random() * challengeWords.length));
    const newWord = challengeWords[randomNumber];
    return newWord;
}