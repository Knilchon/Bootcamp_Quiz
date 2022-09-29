let prozess = 1;
let time = 0;
let quizIsRunning = true;
window.onload = function(){
    initilize()
};
   
function initilize(){
    let element = document.getElementById("wrapQuestion");      //declares connection to a given div

    let questionElement = document.createElement("label");       //creates a question Element
    element.appendChild(questionElement);   
    questionElement.id = "questionElement";
    questionElement.textContent = "Placeholder Text weil wirs brauchen.";

    let answer1Element = document.createElement("button");       //creates answer Elements
    answer1Element.addEventListener("click",selectFunc);
    element.appendChild(answer1Element); 
    answer1Element.id = "answer1Element"

    let answer2Element = document.createElement("button");  
    answer2Element.addEventListener("click",selectFunc);
    element.appendChild(answer2Element);      
    answer2Element.id = "answer2Element";

    let answer3Element = document.createElement("button");     
    answer3Element.addEventListener("click",selectFunc);
    element.appendChild(answer3Element);   
    answer3Element.id = "answer3Element";

    let answer4Element = document.createElement("button");   
    answer4Element.addEventListener("click",selectFunc);
    element.appendChild(answer4Element);     
    answer4Element.id = "answer4Element";


    let progressElement = document.createElement("label");       //creates a progress Element
    element.appendChild(progressElement); 
    progressElement.id = "progressElement";
    progressElement.textContent = prozess.toString() + "/5";

    let timeElement = document.createElement("label");       //creates a timer Element
    element.appendChild(timeElement); 
    timeElement.id = "timeElement";
    timeElement.textContent = "Time";

    let nextQuestionElement = document.createElement("button");    //creates a next question Element
    nextQuestionElement.addEventListener("click",nextQuestion);
    element.appendChild(nextQuestionElement); 
    nextQuestionElement.id = "nextQuestionElement";
    nextQuestionElement.textContent = "Next";

    let submitElement = document.createElement("button");       //creates a submit button Element
    submitElement.addEventListener("click",submitFunc);
    element.appendChild(submitElement); 
    submitElement.id = "submitElement";
    submitElement.textContent = "Submit";
}

function selectFunc(){
    if(this.value === "Selected"){
        this.value = "Unselected";
    }else{
        this.value= "Selected";
    }
}
function submitFunc(){
    //hidSub();
    compareAnswers();
    //unhideNext();
}
function nextQuestion(){
    questionCounter();

}
function questionCounter(){
    let prozessIntContent: number = +document.getElementById("progressElement").textContent;
    document.getElementById("progressElement").textContent = prozessIntContent.toString() + "/5";
    //console.log(newProzess);
    }
function compareAnswers(){
    //compares button labels with given answer and tells them if they should be slected => /bool shouldSelect = true;
    //compares if shouldSelect is true and if the value is "Selected"
}
