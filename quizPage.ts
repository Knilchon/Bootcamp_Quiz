window.onload = () => {
    let element = document.getElementById("");      //declares connection to a given div

    let questionElement = document.createElement("label");       //creates a question Element

    let answer1Element = document.createElement("button");       //creates answer Elements
    let answer2Element = document.createElement("button");       
    let answer3Element = document.createElement("button");       
    let answer4Element = document.createElement("button");       

    let progressElement = document.createElement("label");       //creates a progress Element

    let timeElement = document.createElement("label");       //creates a timer Element

    let submitElement = document.createElement("button");       //creates a submit button Element
    let nextQuestionElement = document.createElement("button");    //creates a next question Element

    element.appendChild(questionElement);       //appends all Elements to the given div
    element.appendChild(answer1Element); 
    element.appendChild(answer2Element); 
    element.appendChild(answer3Element); 
    element.appendChild(answer4Element); 
    element.appendChild(progressElement); 
    element.appendChild(timeElement); 
    element.appendChild(submitElement); 
    element.appendChild(nextQuestionElement); 

}