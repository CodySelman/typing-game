// Variables

// challengeWords[] has been moved to its own file for organization purposes
const  playerInputForm = document.getElementById('userInput');
const currentWordForm = document.getElementById('current-word');

// Event Listeners

playerInputForm.addEventListener('input', correctAnswer);

// Initialize

instantiateWord();

// Functions

function random(e){
    return (Math.floor(Math.random() * e));
}

function instantiateWord() {
    currentWordForm.innerHTML = challengeWords[random(challengeWords.length)];
}

function correctAnswer(e){
    if (playerInputForm.value === currentWordForm.innerHTML){
        console.log('success');
        currentWordForm.innerHtml = '';
        instantiateWord();
        playerInputForm.value = '';
    }
}

function scrollText(){

}