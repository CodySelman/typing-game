// Variables

const  playerInput = document.getElementById('userInput');

// Event Listeners

playerInput.addEventListener('input', submitText)

// Initialize



// Functions

function submitText(e){
    e.preventDefault();
    console.log(playerInput.value);
}