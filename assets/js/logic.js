
// Set variables

    // target start button
let startButton = document.querySelector('#start');
    // target timer
let timerElement = document.querySelector('#time');

let timer;
// let timeCounter;
let timeCounter = 75;

// When start button is clicked,
function startQuiz() {
    // set timer
    

    startTimer();
}

    // #start-screen is hidden and #start button removed.
    
    // timer starts counting.
function startTimer() {
   let timer = setInterval(function() {
        // decrease timer everytime
        timeCounter--;
        timerElement.textContent = timeCounter;
        if(timeCounter === 0) {
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