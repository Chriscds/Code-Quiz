
// Set variables

    // target start button
let startPage = document.getElementById('start-screen');
let startButton = document.querySelector('#start');
    // target timer
let timerElement = document.querySelector('#time');

let timer;
// let timeCounter;
let timeCounter = 75;

// When start button is clicked,
function startQuiz() {
    
    // hides start-screen page and button.
    hideStartScreen()
    // start timer
    startTimer();
}
    // fuction to hide #start button and #start-screen
function hideStartScreen() {
    startPage.style.display = 'none';
}
    
    // timer starts counting.
function startTimer() {
   let timer = setInterval(function() {
        // decrease timer by one while counting down by one
        timeCounter--;
        timerElement.textContent = timeCounter;
        if(timeCounter === 0) {
        // stops timer counting down when 0 is reached
            clearInterval(timer);
        }
        
    }, 1000);
}

    // 1st question appears.

        // when first question is answered

        // 2nd question appears.

    // if answer clicked is incorrect, 
        // subtract time from timer

// quiz to end when all questions are answered or run out of time.

    // When the game ends, 
    // it should display the score and give the user ability to save with their initials.
    // in localStorage.

// event listener for when start button is clicked.
startButton.addEventListener('click', startQuiz);