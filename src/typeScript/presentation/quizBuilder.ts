import { questions } from "../Questions/questions";


export function shuffle(questionArray){
    let currentIndex = questionArray.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [questionArray[currentIndex], questionArray[randomIndex]] = [
        questionArray[randomIndex], questionArray[currentIndex]];
    }
  
    return questionArray;
};