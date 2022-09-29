window.onload = () => {
    let element = document.getElementById("wrapQuestion");

    let resultElement = document.createElement("label");           //creates result element
    element.appendChild(resultElement);
    resultElement.id = "resultElement";
    resultElement.textContent = "You answered 4 of 5 Questions correctly!"

    let scoreboardElement = document.createElement("label");      //creates scoreboard element
    element.appendChild(scoreboardElement);
    scoreboardElement.id = "scoreboardElement";

    let restartElement = document.createElement("button");       //(creates button element )
    element.appendChild(restartElement);
    restartElement.id = "restartElement";
    restartElement.setAttribute("onclick", "window.location.href = 'quiz.html'");
    restartElement.textContent = "Neustart"
}