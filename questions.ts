type Question = {

    QuestionID: number,
    Question: string,
    Answers: string[],
    CorrectAnswer: string[],

}

const questions: Question[] = [
    {
        QuestionID: 3,
        Question: "Welcher Film spielt nicht in der MCU Phase 3?",
        Answers: [
            "Spider-Man Homecoming",
            "Ant Man",
            "Avengers Endgame",
            "Black Panther",
        ],
        CorrectAnswer: ["Ant Man"]
    },
    
    {
        QuestionID: 5,
        Question: "Was davon ist keine Frucht?",
        Answers: [
            "Rhabarber",
            "Tomate",
            "Avocado",
            "Apfel",
        ],
        CorrectAnswer: ["Rhabarber"]
    }
];
