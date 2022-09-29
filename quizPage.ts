let prozess = 1;

window.onload = function(){
    initilize()
};
   
function initilize(){
    
    let element = document.getElementById("wrapQuestion");      //declares connection to a given div

    let questionElement = document.createElement("label");       //creates a question Element
    element.appendChild(questionElement);   
    questionElement.id = "questionElement"

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


    let progressElement = document.createElement("label");       //creates a PROGRESS Element
    element.appendChild(progressElement); 
    progressElement.id = "progressElement";
    progressElement.textContent =  prozess.toString() + "/5";

    let timeElement = document.createElement("label");       //creates a TIMER Element
    element.appendChild(timeElement); 
    timeElement.id = "timeElement";

    let nextQuestionElement = document.createElement("button");    //creates a NEXT question Element
    nextQuestionElement.addEventListener("click",nextQuestion);
    element.appendChild(nextQuestionElement); 
    nextQuestionElement.id = "nextQuestionElement";

    let submitElement = document.createElement("button");       //creates a SUBMIT button Element
    submitElement.addEventListener("click",submitFunc);
    element.appendChild(submitElement); 
    submitElement.id = "submitElement";
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
    ++prozess;
    //let prozessIntContent: number = +document.getElementById("progressElement").textContent;
    document.getElementById("progressElement").textContent = prozess.toString() + "/5";
    //console.log(newProzess);
    }
function compareAnswers(){
    //compares button labels with given answer and tells them if they should be slected => /bool shouldSelect = true;
    //compares if shouldSelect is true and if the value is "Selected"
}
