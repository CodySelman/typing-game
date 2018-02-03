// Variables

const  playerInputForm = document.getElementById('userInput');
let currentWord = 'type this';
const currentWordForm = document.getElementById('current-word');

// Event Listeners

playerInputForm.addEventListener('input', submitText);

// Initialize

instantiateWord();

// Functions

function submitText(e){
    e.preventDefault();
    const playerInput = playerInputForm.value;
    const currentWord = currentWordForm.innerHtml;
    console.log(currentWord);

}

function instantiateWord() {
    currentWordForm.innerHTML = 'First Word';
}