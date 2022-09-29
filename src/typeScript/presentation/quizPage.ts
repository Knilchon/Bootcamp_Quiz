window.onload = () => {
    let element = document.getElementById("wrapQuestion");      //declares connection to a given div

    let questionElement = document.createElement("label");       //creates a question Element
    element.appendChild(questionElement);   
    questionElement.id = "questionElement";
    questionElement.textContent = "Placeholder Text weil wirs brauchen.";

    let answer1Element = document.createElement("button");       //creates answer Elements
    element.appendChild(answer1Element); 
    answer1Element.id = "answer1Element"
    let answer2Element = document.createElement("button");  
    element.appendChild(answer2Element);      
    answer2Element.id = "answer2Element";
    let answer3Element = document.createElement("button");     
    element.appendChild(answer3Element);   
    answer3Element.id = "answer3Element";
    let answer4Element = document.createElement("button");   
    element.appendChild(answer4Element);     
    answer4Element.id = "answer4Element";

    let progressElement = document.createElement("label");       //creates a progress Element
    element.appendChild(progressElement); 
    progressElement.id = "progressElement";
    progressElement.textContent = "Progressbar";

    let timeElement = document.createElement("label");       //creates a timer Element
    element.appendChild(timeElement); 
    timeElement.id = "timeElement";

    let submitElement = document.createElement("button");       //creates a submit button Element
    element.appendChild(submitElement); 
    submitElement.id = "submitElement";
    submitElement.textContent = "Submit";

    let nextQuestionElement = document.createElement("button");    //creates a next question Element
    element.appendChild(nextQuestionElement); 
    nextQuestionElement.id = "nextQuestionElement";
    nextQuestionElement.textContent = "Next";
}