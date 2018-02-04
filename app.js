// Variables

// challengeWords[] has been moved to its own file for organization purposes
const  playerInputForm = document.getElementById('userInput');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Event Listeners

playerInputForm.addEventListener('input', correctAnswer);

// Initialize

instantiateWord();

// Functions

function random(e){
    return (Math.floor(Math.random() * e));
}

function instantiateWord() {
    var para = document.createElement('p');
    var node = document.createTextNode(challengeWords[random(challengeWords.length)]);
    para.appendChild(node);
    para.classList.add('display-4', 'position-fixed', 'left-500');
    var element = document.getElementById('div2');
    element.appendChild(para);
    scrollText(para);
}

function correctAnswer(e){
    if (playerInputForm.value === currentWordForm.innerHTML){
        console.log('success');
        currentWordForm.innerHtml = '';
        instantiateWord();
        playerInputForm.value = '';
    }
}

function scrollText(e){
    let pos = -500;
    var id = setInterval(scroll, 10);
    function scroll(){
        if (pos >= windowWidth){
            clearInterval(id);
        } else {
            pos += 5;
            e.style.left = pos + 'px';
        }
    }
}