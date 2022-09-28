
window.onload = () => {
    let element = document.getElementById("wrapQuestion");       //connects to div in index file

    let inputElement = document.createElement("input");     //creates Element inputfield
    element.appendChild(inputElement); 
    inputElement.id = "inputElement";
    let buttonElement = document.createElement("button");       //creates Element button
    element.appendChild(buttonElement); 
    buttonElement.id = "buttonElement"; 
    //let name = inputElement.value;
    //let dlog = document.createElement("label");
    //element?.appendChild(dlog);

}