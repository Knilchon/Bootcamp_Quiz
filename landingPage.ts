
window.onload = () => {
    let element = document.getElementById("wrapQuestion");       //connects to div in index file

    let inputElement = document.createElement("input");     //creates Element inputfield
    element.appendChild(inputElement); 
    inputElement.outerHTML = "<input id=\"inputElement\" placeholder=\"Gib deinen Namen ein...\">";
    let buttonElement = document.createElement("button");       //creates Element button
    element.appendChild(buttonElement); 
    buttonElement.outerHTML = "<button onclick=\"window.location.href = 'quiz.html';\" id=\"buttonElement\">Quiz starten</button>"
    //let name = inputElement.value;
    //let dlog = document.createElement("label");
    //element?.appendChild(dlog);

}