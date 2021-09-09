class TriviaView {
    constructor(trivia) {
        this.trivia = trivia
    }


    setupQuestions() {
        const question = document.createElement("question")
        const answer = document.createElement("answer")
    }


}


fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
