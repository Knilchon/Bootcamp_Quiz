
window.onload = () => {
    let element = document.getElementById("wrapQuestion");       //connects to div in index file

    let inputElement = document.createElement("input");     //creates Element inputfield
    let buttonElement = document.createElement("button");       //creates Element button
    //let name = inputElement.value;
    //let dlog = document.createElement("label");


    element.appendChild(inputElement);      //loads input Element in div
    element.appendChild(buttonElement);      //loads button Element in div
    //element?.appendChild(dlog);

}