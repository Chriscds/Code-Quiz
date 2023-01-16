let showQuestions = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let answerChoices = document.querySelector("#li-questions");

// TODO: Check if this is the best method to write the Q&A's
// Quiz questions
let quizQuestions = [{

        question: "1. Which is correct about the Javascript language?",
        answers:[
                    "is an object-based language", // ✅
                    "is Assembly-language", // ❌
                    "is an Object-Oriented language", // ❌
                    "is a High-level language" // ❌
                ],
    },
    {
        question: "2. Arrays in JavaScript are defined by which of the following statements?",
        answers: [
                    "It is an ordered list of values",  // ✅
                    "is Assembly-language", // ❌
                    "It is an ordered list of string", // ❌
                    "It is an ordered list of functions" // ❌
                ],
    },
    {
        question: "3. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: [
                    "Position", // ❌
                    "Window", // ✅
                    "Standard", // ❌
                    "Location" // ❌
                ],
    },
    {
        question: "4. Which of the following can be used to call a JavaScript Code Snippet?",
        answers: [
                    "Function/Method", //✅
                    "Preprocessor", // ❌
                    "Triggering Event", // ❌
                    "HTML" // ❌
                ],
    },
    {
        question: " Which of the following methods/operation does javascript use instead of == and !=?",
        answers: [
                    "JavaScript uses equalto()", // ❌
                    "JavaScript uses equals() and notequals() instead", // ❌
                    "JavaScript uses bitwise checking", // ❌
                    "JavaScript uses === and !== instead" //✅
        ],
}];

// TODO: finish writing function to push question 1 to question-title on html page.

function beginQuestions(questionTitle) {
    // let test = document.createElement(quizQuestions.question);

    questionTitle = document.createElement('question-title');
    // can set which question.
    questionTitle.innerText = quizQuestions[0].question;
    
   
  

   
    document.body.appendChild(questionTitle);
}

