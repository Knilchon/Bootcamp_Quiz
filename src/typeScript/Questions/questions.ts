type Questions = {

    QuestionID: number,
    Question: string,
    Answers: string[],
    CorrectAnswer: string[],

}

export const questions: Questions[] = [
    
    {
        QuestionID: 1,
        Question: "Welche von den unten genanten Pflanzen ist keine Beere?",
        Answers: [
            "Kürbis",
            "Radieschen",
            "Banane",
            "Gurke",
        ],
        CorrectAnswer: ["Radieschen"]
    },
    
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
    },


    {
        QuestionID: 2,
        Question: "Wie heißen die kinder von Naruto",
        Answers: [
            "Sarada",
            "Boruto",
            "Himawari",
            "Madara",
        ],
        CorrectAnswer: ["Boruto", "Himawari"]
    },

    {
        QuestionID: 4,
        Question: "Wie viele Mitglieder hat die Star Wars 'Cantina Band'?",
        Answers: [
            "Drei",
            "Vier",
            "Fünf",
            "Sechs",
        ],
        CorrectAnswer: ["Fünf"]
    }
    
];