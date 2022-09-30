import { questionShuffle } from "../presentation/quizBuilder";
import { questions } from "../Questions/questions";

let quiz = questionShuffle(questions);
let prozess = 1;
let time = 0;
let quizIsRunning = true;
window.onload = function () {
    initilize();
    incQuestionIndex();
    //console.log(quiz);
};

function initilize() {
    let element = document.getElementById("wrapQuestion") as HTMLDivElement;      //declares connection to a given div

    let questionElement = document.createElement("label");       //creates a question Element
    element.appendChild(questionElement);
    questionElement.id = "questionElement";

    let answer1Element = document.createElement("button");       //creates answer Elements
    answer1Element.addEventListener("click", selectFunc);
    element.appendChild(answer1Element);
    answer1Element.id = "answer1Element";
    answer1Element.className = "answerElements"

    let answer2Element = document.createElement("button");
    answer2Element.addEventListener("click", selectFunc);
    element.appendChild(answer2Element);
    answer2Element.id = "answer2Element";
    answer2Element.className = "answerElements"

    let answer3Element = document.createElement("button");
    answer3Element.addEventListener("click", selectFunc);
    element.appendChild(answer3Element);
    answer3Element.id = "answer3Element";
    answer3Element.className = "answerElements"

    let answer4Element = document.createElement("button");
    answer4Element.addEventListener("click", selectFunc);
    element.appendChild(answer4Element);
    answer4Element.id = "answer4Element";
    answer4Element.className = "answerElements"


    let progressElement = document.createElement("label");       //creates a PROGRESS Element
    element.appendChild(progressElement);
    progressElement.id = "progressElement";
    progressElement.textContent = prozess.toString() + "/5";

    /*let timeElement = document.createElement("label");       //creates a TIMER Element
    element.appendChild(timeElement); 
    timeElement.id = "timeElement";
    timeElement.textContent = "Time"; */

    let nextQuestionElement = document.createElement("button");    //creates a NEXT question Element
    nextQuestionElement.addEventListener("click", nextQuestion);
    element.appendChild(nextQuestionElement);
    nextQuestionElement.id = "nextQuestionElement";
    nextQuestionElement.textContent = "Next";

    let submitElement = document.createElement("button");       //creates a SUBMIT button Element
    submitElement.addEventListener("click", submitFunc);
    element.appendChild(submitElement);
    submitElement.id = "submitElement";
    submitElement.textContent = "Submit";
}

function selectFunc() {
    if (this.value === "Selected") {
        this.value = "Unselected";
        this.style.backgroundColor = "#C584D6";
    } else {
        this.value = "Selected";
        this.style.backgroundColor = "#d17e3e";
    }

}

function submitFunc() {
    //hideSub Button
    let submitElement = document.getElementById("submitElement") as HTMLButtonElement;
    submitElement.style.display = 'none';
    compareAnswers();
    //unhideNext Button
    let nextQuestionElement = document.getElementById("nextQuestionElement") as HTMLButtonElement;
    nextQuestionElement.style.display = 'inline';
}

function incQuestionIndex() {
    let questionElement = document.getElementById("questionElement") as HTMLLabelElement;
    questionElement.textContent = quiz[prozess - 1].Question;

    let answer1Buttton = document.getElementById("answer1Element") as HTMLButtonElement;
    answer1Buttton.textContent = quiz[prozess - 1].Answers[0];

    let answer2Buttton = document.getElementById("answer2Element") as HTMLButtonElement;
    answer2Buttton.textContent = quiz[prozess - 1].Answers[1];

    let answer3Buttton = document.getElementById("answer3Element") as HTMLButtonElement;
    answer3Buttton.textContent = quiz[prozess - 1].Answers[2];

    let answer4Buttton = document.getElementById("answer4Element") as HTMLButtonElement;
    answer4Buttton.textContent = quiz[prozess - 1].Answers[3];
}

function nextQuestion() {
    let buttonArray = new Array;
    buttonArray.push(
        document.getElementById("answer1Element"),
        document.getElementById("answer2Element"),
        document.getElementById("answer3Element"),
        document.getElementById("answer4Element"));
    //hide Next Button
    let nextQuestionElement = document.getElementById("nextQuestionElement") as HTMLButtonElement;
    nextQuestionElement.style.display = 'none';
    questionCounter();
    //unhide Sub Button
    let submitElement = document.getElementById("submitElement") as HTMLButtonElement;
    submitElement.style.display = 'inline';
    incQuestionIndex();
}

function questionCounter() {
    ++prozess;
    //let prozessIntContent: number = +document.getElementById("progressElement").textContent;
    let progressLabel = document.getElementById("progressElement") as HTMLLabelElement;
    progressLabel.textContent = prozess.toString() + "/5";
    //console.log(newProzess);
}

function compareAnswers() {

    let rightAnswers = new Array;
    questions[prozess - 1].CorrectAnswer.forEach(element => {
        rightAnswers.push(element);
    });
    let buttonArray = new Array;
    buttonArray.push(
        document.getElementById("answer1Element"),
        document.getElementById("answer2Element"),
        document.getElementById("answer3Element"),
        document.getElementById("answer4Element"));

    buttonArray.forEach(button => {
        rightAnswers.forEach(answer => {

            if (button.textContent === answer && button.value === "Selected") {
                button.style.backgroundColor = "#05ae4c";
                button.value = "Unselected";
            } else if (button.textContent !== answer && button.value === "Selected"
                || button.textContent === answer && button.value !== "Selected") {

                button.style.backgroundColor = "#da1313";
            }
        });

    });


}

function timer() {

}