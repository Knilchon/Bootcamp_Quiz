
window.onload = () => {
    let element = document.getElementById("wrapQuestion") as HTMLDivElement;       //connects to div in index file

    /* Input-Element */
    let inputElement = document.createElement("input");     //creates Element inputfield
    element.appendChild(inputElement);
    inputElement.id = "inputElement";
    inputElement.setAttribute("placeholder", "Gib deinen Namen ein...");

    /* Button-Element */
    let buttonElement = document.createElement("button");       //creates Element button
    element.appendChild(buttonElement); 
    buttonElement.id = "buttonElement";
    buttonElement.setAttribute("onclick", "window.location.href = 'quiz.html'");
    buttonElement.textContent = "Quiz starten";
}