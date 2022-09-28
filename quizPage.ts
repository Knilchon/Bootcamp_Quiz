window.onload = () => {
    let element = document.getElementById("wrapQuestion");      //declares connection to a given div

    let questionElement = document.createElement("label");       //creates a question Element
    element.appendChild(questionElement);   

    let answer1Element = document.createElement("button");       //creates answer Elements
    element.appendChild(answer1Element); 
    let answer2Element = document.createElement("button");  
    element.appendChild(answer2Element);      
    let answer3Element = document.createElement("button");     
    element.appendChild(answer3Element);   
    let answer4Element = document.createElement("button");   
    element.appendChild(answer4Element);     

    let progressElement = document.createElement("label");       //creates a progress Element
    element.appendChild(progressElement); 

    let timeElement = document.createElement("label");       //creates a timer Element
    element.appendChild(timeElement); 

    let submitElement = document.createElement("button");       //creates a submit button Element
    element.appendChild(submitElement); 
    let nextQuestionElement = document.createElement("button");    //creates a next question Element
    element.appendChild(nextQuestionElement); 

}