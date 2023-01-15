let showQuestions = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let answerChoices = document.querySelector("#li-questions");
// Quiz questions
let quizQuestions = [{

        question: "1. Which is correct about the Javascript language?",
        answers: [
                    "is an object-based language", // ✅
                    "is Assembly-language", // ❌
                    "is an Object-Oriented language", // ❌
                    "is a High-level language" // ❌
        ],

        question: "2. Arrays in JavaScript are defined by which of the following statements?",
        answers: [
                    "It is an ordered list of values",  // ✅
                    "is Assembly-language", // ❌
                    "It is an ordered list of string", // ❌
                    "It is an ordered list of functions" // ❌
        ],

        question: "3. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: [
                    "Position", // ❌
                    "Window", // ✅
                    "Standard", // ❌
                    "Location" // ❌
        ],

        question: "4. Which of the following can be used to call a JavaScript Code Snippet?",
        answers: [
                    "Function/Method", //✅
                    "Preprocessor", // ❌
                    "Triggering Event", // ❌
                    "HTML" // ❌
        ],

        question: " Which of the following methods/operation does javascript use instead of == and !=?",
        answers: [
                    "JavaScript uses equalto()", // ❌
                    "JavaScript uses equals() and notequals() instead", // ❌
                    "JavaScript uses bitwise checking", // ❌
                    "JavaScript uses === and !== instead" //✅
        ],

}];



function beginQuestions() {
    let test = document.createElement(quizQuestions.question);

    // test.textContent = questionTitle + " Is this working?";
    test.textContent = quizQuestions[0].question;
    document.body.appendChild(test);
    // questionTitle.push(test); ??????
}

// First attempt ----------------------------------------------------------------
/* -------------------------------- 
    // for (var i= 0; i < quizQuestions.length; i++) {
    //     alert(quizQuestions[i].question)
    // showQuestions.style.visibility = "visible";

    //     let title = document.createElement("title");
    //     // let title = document.createElement(questionTitle);
    //     title.textContent = quizQuestions.answers[0][1];

    //     questionTitle.push(title);
    // }

*/ 
    // 1. Which is correct about the Javascript language?
        // answer: is an object-based language (true)
        // answer: is Assembly-language
        // answer: is an Object-Oriented language
        // answer: is a High-level language
    // 2. Arrays in JavaScript are defined by which of the following statements?
        // answer: It is an ordered list of values (true)
        // answer: It is an ordered list of objects
        // answer: It is an ordered list of string
        // answer: It is an ordered list of functions
    // 3. Which of the following object is the main entry point to all client-side JavaScript features and APIs?
        // answer: Position
        // answer: Window (true)
        // answer: Standard
        // answer: Location
    // 4. Which of the following can be used to call a JavaScript Code Snippet?
        // answer: Function/Method (true)
        // answer: Preprocessor
        // answer: Triggering Event
        // answer: HTML
    // 5. Which of the following methods/operation does javascript use instead of == and !=?
        // answer: JavaScript uses equalto()
        // answer: JavaScript uses equals() and notequals() instead
        // answer: JavaScript uses bitwise checking
        // answer: JavaScript uses === and !== instead (true)
