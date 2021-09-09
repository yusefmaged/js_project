window.onload = function () {
    
    let time;
    const displayResult = []

    // createPlayBtn()
    
    document.getElementById("play").addEventListener("click", function() {
        createRules()
        createGameBtn()
        removeImg()
        togglePlayBtn()
        removePlayButton()
    });

    function createTriviaBtn() {
        let trivButton = document.createElement("button");
        trivButton.setAttribute("id", "triviaBtn")
        trivButton.innerHTML = "Trivia";

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(trivButton);

        document.getElementById("triviaBtn").addEventListener("click", function () {
            createAnswersTag()
            createQuestionsTag()
            createTriviaTitle()
            toggleTriviaTitle()
            toggleTrivBtn()
            getQuestions()
            createCorrectBtn()
            createIncorrectBtn1()
            createIncorrectBtn2()
            createIncorrectBtn3()
            removeTrivBtn()
            clickAnswer()
        });
    }

    function removeGame() {
        let gamebtn = document.getElementById("game")
        gamebtn.remove()
    }

    function removeTimer() {
        let gamebtn = document.getElementById("timer")
        gamebtn.remove()
    }

    function removeGameTitle() {
        let gamebtn = document.getElementById("gameTitle")
        gamebtn.remove()
    }

    function removeColorBtns() {
        let colorBtns = document.getElementById("A")
        colorBtns.remove()
    }


        
    function createGameBtn() {
        let gameButton = document.createElement("button");
        gameButton.setAttribute("id", "gameBtn")
        gameButton.innerHTML = "Game";

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(gameButton);

        document.getElementById("gameBtn").addEventListener("click", function () {
            toggleRules()
            removeRules()
            toggleGameBtn()
            removeGameBtn()
            startTimer()
            createPoints()
            createGameTitle()
            createAtag()
            toggleAtag()
            createColorBtns()
            createColorText()
            startGame()
            newColor()
            toggleAtag()
            createTriviaBtn()
            toggleTrivBtn()
        });
    }



    
    // document.getElementById("triviaBtn").addEventListener("click", function () {
    //     toggleMainTitle()
    //     toggleTriviaTitle()
    //     createTriviaTitle()
    //     toggleTrivBtn()
    //     toggleGameBtn()
    //     getQuestions()
    //     createLPBtn()
    // });

    // document.getElementById("gameBtn").addEventListener("click", function () {
    //     startTimer()
    //     toggleMainTitle()
    //     createGameTitle()
    //     toggleGameTitle()
    //     toggleGameBtn()
    //     toggleTrivBtn()
    //     createColorBtns()
    //     startGame()
    //     newColor()
    // });

    let colorArray = ["RED", "GREEN", "ORANGE", "BLUE", "RED", "GREEN", "ORANGE", "BLUE", "RED", "GREEN", "ORANGE", "BLUE"]
    let colorArray2 = ["RED", "GREEN", "ORANGE", "BLUE", "RED", "GREEN", "ORANGE", "BLUE", "RED", "GREEN", "ORANGE", "BLUE"]

    function toggleScore() {
        if (document.getElementById('lpBtn').style.visibility = 'hidden') {
            document.getElementById('lpBtn').style.visibility = 'hidden'
        } else document.getElementById('lpBtn').style.visibility = 'visibility'
    }
    
    function startTimer(duration = 7, display = document.querySelector('#timer')) {
        let timer = duration, minutes, seconds;
        time = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60);

            display.textContent = seconds;

            if (--timer < 0) {
                stop()
                toggleTrivBtn()
                removeGameTitle()
                removeColorBtns()
                removeGame()
                removeTimer()

            }
        }, 1000);

    }

    function stop() {
        clearInterval(time);
    }

    function createTriviaTitle() {
        let header = document.createElement("h1")
        let text = document.createTextNode("General Knowledge")
        let body = document.getElementsByTagName("body")[0];
        header.setAttribute("id", "trivTitle")
        body.appendChild(header);
        header.appendChild(text)
    }

    async function getQuestions() {

        const response = await fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple');
        const data = await response.json();

        let newResult = []

        for (let key in data) {
            for (let key2 in data[key]) {
                for (let key3 in data[key][key2])
                    if (key3 === "question" || key3 === "correct_answer" || key3 === "incorrect_answers") {
                        newResult.push(data[key][key2][key3])
                    }
                displayResult.push(newResult)
                newResult = []
            }
        }
        newQuestion()
    }

    async function newQuestion() {

        const question = document.querySelector("#question")
        const correctAnswer = document.querySelector("#correctAnswer")
        const incorrectAnswer1 = document.querySelector("#incorrectAnswer1")
        const incorrectAnswer2 = document.querySelector("#incorrectAnswer2")
        const incorrectAnswer3 = document.querySelector("#incorrectAnswer3")

        if (displayResult[0][0].includes("&")) displayResult.shift()

        question.textContent = displayResult[0][0]
        correctAnswer.textContent = displayResult[0][1]
        incorrectAnswer1.textContent = displayResult[0][2][0]
        incorrectAnswer2.textContent = displayResult[0][2][1]
        incorrectAnswer3.textContent = displayResult[0][2][2]

        displayResult.shift()
    }

    function toggleTrivBtn() {
        if (document.getElementById('triviaBtn').style.visibility === 'hidden') {
            document.getElementById('triviaBtn').style.visibility = 'visible'
        } else document.getElementById('triviaBtn').style.visibility = 'hidden'
    }

    function toggleGameBtn() {
        if (document.getElementById('gameBtn').style.visibility === 'hidden') {
            document.getElementById('gameBtn').style.visibility = 'visible'
        } else document.getElementById('gameBtn').style.visibility = 'hidden'
    }

    function toggleLPBtn() {
        if (document.getElementById('lpBtn').style.visibility === 'hidden') {
            document.getElementById('lpBtn').style.visibility = 'visible'
        } else document.getElementById('lpBtn').style.visibility = 'hidden'
    }

    function toggleMainTitle() {
        if (document.getElementById('mainTitle').style.visibility === 'hidden') {
            document.getElementById('mainTitle').style.visibility = 'visible'
        } else document.getElementById('mainTitle').style.visibility = 'hidden'
    }

    function toggleGameTitle() {
        if (document.getElementById('gameTitle').style.visibility === 'hidden') {
            document.getElementById('gameTitle').style.visibility = 'hidden'
        } else document.getElementById('gameTitle').style.visibility = 'visibility'
    }

    function toggleTriviaTitle() {
        if (document.getElementById('triviaBtn').style.visibility = 'hidden') {
            document.getElementById('triviaBtn').style.visibility = 'hidden'
        } else document.getElementById('triviaBtn').style.visibility = 'visibility'
    }

    function togglePlayBtn() {
        if (document.getElementById('play').style.visibility === 'hidden') {
            document.getElementById('play').style.visibility = 'visible'
        } else document.getElementById('play').style.visibility = 'hidden'
    }

    function toggleRules() {
        if (document.getElementById('rules').style.visibility === 'hidden') {
            document.getElementById('rules').style.visibility = 'visible'
        } else document.getElementById('rules').style.visibility = 'hidden'
    }

    function toggleTimer() {
        if (document.getElementById('timer').style.visibility === 'hidden') {
            document.getElementById('timer').style.visibility = 'visible'
        } else document.getElementById('timer').style.visibility = 'hidden'
    }
    // function toggleNQBtn() {
    //     if (document.getElementById('nextQuestion').style.visibility = 'hidden') {
    //         document.getElementById('nextQuestion').style.visibility = 'hidden'
    //     } else document.getElementById('nextQuestion').style.visibility = 'visibility'
    // }

    // function createLPBtn() {
    //     let button = document.createElement("button");
    //     button.setAttribute("id", "lpBtn")
    //     button.innerHTML = "Lets Begin";

    //     let body = document.getElementsByTagName("body")[0];
    //     body.appendChild(button);

    //     button.addEventListener("click", function(){
    //         startTimer()
    //         toggleLPBtn()
    //         createCorrectBtn()
    //         createIncorrectBtn1()
    //         createIncorrectBtn2()
    //         createIncorrectBtn3()
    //         newQuestion()
    //         clickAnswer()
    //     });
    // }

    function createPlayBtn() {
        let playButton = document.createElement("button");
        playButton.setAttribute("id", "play")
        playButton.innerHTML = "Play";

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(playButton);
    }

    function createCorrectBtn() {
        let correctButton = document.createElement("button");
        correctButton.setAttribute("id", "correctAnswer")

        let body = document.getElementById("answers");
        body.appendChild(correctButton);

        correctButton.addEventListener("click", function () {
            newQuestion()
        });
    }

    function createIncorrectBtn1() {
        let incorrectButton1 = document.createElement("button");
        incorrectButton1.setAttribute("id", "incorrectAnswer1")

        let body = document.getElementById("answers");
        body.appendChild(incorrectButton1);

        incorrectButton1.addEventListener("click", function () {
            newQuestion()
        });
    }

    function createIncorrectBtn2() {
        let incorrectButton2 = document.createElement("button");
        incorrectButton2.setAttribute("id", "incorrectAnswer2")

        let body = document.getElementById("answers");
        body.appendChild(incorrectButton2);

        incorrectButton2.addEventListener("click", function () {
            newQuestion()
        });
    }

    function createIncorrectBtn3() {
        let incorrectButton3 = document.createElement("button");
        incorrectButton3.setAttribute("id", "incorrectAnswer3")

        let body = document.getElementById("answers");
        body.appendChild(incorrectButton3);

        incorrectButton3.addEventListener("click", function () {
            newQuestion()
        });
    }

    function clickAnswer() {
        correctAnswer.addEventListener("click", function () {
            let points = document.getElementById('points')
            let number = parseInt(points.innerHTML)
            number += 100
            points.innerHTML = number
            // gameOver(number)
            winner()
            newQuestion()
        })

        incorrectAnswer1.addEventListener("click", function () {
            let points = document.getElementById('points')
            let number = parseInt(points.innerHTML)
            number -= 100
            points.innerHTML = number
            // gameOver(number)
            winner()
            newQuestion()
        })

        incorrectAnswer2.addEventListener("click", function () {
            let points = document.getElementById('points')
            let number = parseInt(points.innerHTML)
            number -= 100
            points.innerHTML = number
            // gameOver(number)
            winner()
            newQuestion()
        })

        incorrectAnswer3.addEventListener("click", function () {
            let points = document.getElementById('points')
            let number = parseInt(points.innerHTML)
            number -= 100
            points.innerHTML = number
            winner()
            // gameOver(number)
            newQuestion()
        })
    }

    function gameOver(points){

        if (points === 300) {
            window.alert("You win!")
            window.location.reload()
        } else if (points < 100) {
            window.alert("You're trash kid")
            window.location.reload()
        }
    }


    function createColorBtns() {

        let orangeBtn = document.createElement("button")
        orangeBtn.setAttribute("id", "orange")
        orangeBtn.innerHTML = "Orange"

        let greenBtn = document.createElement("button")
        greenBtn.setAttribute("id", "green")
        greenBtn.innerHTML = "Green"

        let redBtn = document.createElement("button")
        redBtn.setAttribute("id", "red")
        redBtn.innerHTML = "Red"

        let blueBtn = document.createElement("button")
        blueBtn.setAttribute("id", "blue")
        blueBtn.innerHTML = "Blue"

        let a = document.getElementById("A");
        a.appendChild(orangeBtn);
        a.appendChild(greenBtn);
        a.appendChild(redBtn);
        a.appendChild(blueBtn);

    }

    function newColor() {

        game.textContent = colorArray.splice([Math.floor(Math.random() * colorArray.length)], 1)
        document.getElementById("game").style.color = colorArray2.splice([Math.floor(Math.random() * colorArray.length)], 1)
    }

    function startGame(display = document.querySelector('#game')) {

        // game.textContent = colorArray.splice([Math.floor(Math.random() * colorArray.length)], 1)
        // document.getElementById("game").style.color = colorArray2.splice([Math.floor(Math.random() * colorArray.length)], 1)

        console.log(typeof document.getElementById("game").style.color)

        let points = document.getElementById('points')
        let number = parseInt(points.innerHTML)


        document.getElementById("orange").addEventListener('click', function() {
            if (document.getElementById("game").style.color === "orange") {
                number += 100
                points.innerHTML = number
                newColor()
                winner()
            } else {
                newColor()
                // number -= 100
                // points.innerHTML = number
                // gameOver(number)
            }
        })

        document.getElementById("green").addEventListener('click', function () {
            if (document.getElementById("game").style.color === "green") {
                number += 100
                points.innerHTML = number
                newColor()
                winner()
            } else {
                // number -= 100
                // points.innerHTML = number
                // gameOver(number)
                newColor()
            }
                
        })

        document.getElementById("blue").addEventListener('click', function () {
            if (document.getElementById("game").style.color === "blue") {
                number += 100
                points.innerHTML = number
                newColor()
                winner()
            } else {
                // number -= 100
                // points.innerHTML = number
                // gameOver(number)
                newColor()
            }
        })

        document.getElementById("red").addEventListener('click', function () {
            if (document.getElementById("game").style.color === "red") {
                number += 100
                points.innerHTML = number
                newColor()
                winner()
            } else {
                // number -= 100
                // points.innerHTML = number
                // gameOver(number)
                newColor()
            }
        })



        // if (document.getElementById("orange").clicked == true && document.getElementById("game").style.color === "orange") {
        //     alert("nice one dude");
        // }

        // if (document.getElementById("green").clicked == true && document.getElementById("game").style.color === "green") {
        //     alert("nice one dude");
        // }

        // if (document.getElementById("blue").clicked == true && document.getElementById("game").style.color === "blue") {
        //     alert("nice one dude");
        // }

        // if (document.getElementById("red").clicked == true && document.getElementById("game").style.color === "red") {
        //     alert("nice one dude");
        // }
    }

    function createGameTitle() {
        let header = document.createElement("h2")
        let text = document.createTextNode("Pick the color, not the word")
        header.setAttribute("id", "gameTitle")
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(header);
        header.appendChild(text)
    }

    function createColorText() {
        let header = document.createElement("h1")
        let text = document.createTextNode("Pick the color, not the word")
        let body = document.getElementsByTagName("body")[0];
        header.setAttribute("id", "game")
        body.appendChild(header);
        header.appendChild(text)
    }

    function createRules() {
        let rules = document.createElement("h4")
        let text = document.createTextNode("You have 8 seconds to score as high as you can in a game of 'Pick the Color, Not the Word'. These points will contribute to your total score. Then you'll play a game of trivia. If you answer the trivia question correctly 100 points will be added to your score. If you get it wrong, 100 gets taken away. When you reach 1000 total points, you win! If you hit 0, you lose.")
        let body = document.getElementsByTagName("body")[0];
        rules.setAttribute("id", "rules")
        body.appendChild(rules);
        rules.appendChild(text)
    }

    function toggleRules() {
        if (document.getElementById('rules').style.visibility === 'hidden') {
            document.getElementById('rules').style.visibility = 'visible'
        } else document.getElementById('rules').style.visibility = 'hidden'
    }

    function toggleAtag() {
        if (document.getElementById('A').style.visibility === 'hidden') {
            document.getElementById('A').style.visibility = 'visible'
        } else document.getElementById('A').style.visibility = 'hidden'
    }

    function toggleA2tag() {
        if (document.getElementById('answers').style.visibility === 'hidden') {
            document.getElementById('answers').style.visibility = 'visible'
        } else document.getElementById('answers').style.visibility = 'hidden'
    }

    function toggleGame() {
        if (document.getElementById('game').style.visibility === 'hidden') {
            document.getElementById('game').style.visibility = 'visible'
        } else document.getElementById('game').style.visibility = 'hidden'
    }
    
    function removeImg(){
        let img = document.getElementById("mainTitle")
        img.remove()
    }

    function removePlayButton() {
        let play = document.getElementById("play")
        play.remove()
    }

    function createh2() {
        //header
        let header = document.createElement('h2');
        let body = document.getElementsByTagName("body")[0]
        body.appendChild(header);
    }

    function createh3() {
        //header
        let header = document.createElement('h3');
        let body = document.getElementsByTagName("body")[0]
        body.appendChild(header);
    }

    function createAtag() {
        let header = document.createElement("SPAN");
        let body = document.getElementsByTagName("body")[0]
        header.setAttribute("id", "A")
        body.appendChild(header);
    }

    function createAnswersTag() {
        let header = document.createElement("SPAN");
        let body = document.getElementsByTagName("body")[0]
        header.setAttribute("id", "answers")
        body.appendChild(header);
    }

    function createPoints() {
        let header = document.createElement("SPAN");
        let body = document.getElementsByTagName("body")[0]
        header.setAttribute("id", "points")
        header.innerHTML = "0";
        body.appendChild(header);
    }

    function createQuestionsTag() {
        let header = document.createElement("SPAN");
        let body = document.getElementsByTagName("body")[0]
        header.setAttribute("id", "question")
        body.appendChild(header);
    }

    function createtriviaTag(){
        let header = document.createElement("SPAN");
        let body = document.getElementsByTagName("body")[0]
        header.setAttribute("id", "trivia")
        body.appendChild(header);
    }

    function removeRules(){
        let play = document.getElementById("rules")
        play.remove()
    }

    function removeGameBtn() {
        let gamebtn = document.getElementById("gameBtn")
        gamebtn.remove()
    }

    function removeTrivBtn() {
        let trivbtn = document.getElementById("triviaBtn")
        trivbtn.remove()
    }

    function createPopUp() {
        let header = document.createElement("div");
        let body = document.getElementsByTagName("body")[0]
        header.setAttribute("id", "popup")
        body.appendChild(header);
    }

    function createPopUpText() {
        let header = document.createElement("SPAN");
        let body = document.getElementsByTagName("div")[0]
        header.setAttribute("id", "popuptext")
        body.appendChild(header);
    }

    function winner() {

        let points = document.getElementById('points')
        let number = parseInt(points.innerHTML)
        if (number === 1000) {
            window.location.reload()
        } else if (number === 0 || number < 0) {
            window.location.reload()
        }
    }
}

