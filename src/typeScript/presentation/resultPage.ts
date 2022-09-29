window.onload = () => {
    let element = document.getElementById("wrapQuestion");

    let resultElement = document.createElement("label");           //creates result element
    element.appendChild(resultElement);
    resultElement.id = "resultElement";

    let scoreboardElement = document.createElement("label");      //creates scoreboard element
    element.appendChild(scoreboardElement);
    scoreboardElement.id = "scoreboardElement";

    let continueElement = document.createElement("button");       //creates button element
    element.appendChild(continueElement);
    continueElement.id = "continueElement";
}