let currentQuestion = 0;
let errorCode = 44;
let easyList = [

    {
        //1
        question: "Who is this player",
        answers: ['cristiano ronaldo', 'ronaldo', 'cristiano'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
    },

    {
        //2
        question: "Who is this player",
        answers: ['messi', 'lionel messi', 'worse than cristiano'],
        image: 'https://ca-times.brightspotcdn.com/dims4/default/4ab4d0e/2147483647/strip/true/crop/4403x2935+4+0/resize/2400x1600!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc3%2Fe0%2F67e70e054fb6a951343e1e918eff%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1597782801'

    },
    {
        //3
        question: "Who is this player",
        answers: ['neymar'],
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/230307102122-01-neymar-021423.jpg?c=original'
    },
    {
        //4
        question: "Who is this player",
        answers: ['mbappe', 'kylian mbappe', 'kylian'],
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2023-07/230724-mbappe-mn-1155-b8ddd1.jpg'
    },
    {
        //5
        question: "Who is this player",
        answers: ['haaland', 'erling', 'erling haaland'],
        image: 'https://cdn.theathletic.com/app/uploads/2022/09/07021831/ERLING-HAALAND-MANCHESTER-CITY-scaled-e1662531544452.jpg'

    },
    {
        //6
        question: "Who is this player",
        answers: ['pele'],
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/211212035603-022-pele-obit-restricted.jpg?q=h_3180,w_2515,x_0,y_0'

    },
    {
        //7
        question: "Who is this player",
        answers: ['maradona', 'diego maradona'],
        image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc21ef84b69b5baba/60db77f8bbd30c0f67e1556d/564129edba433a7a0fc400729a505148e89d8f19.jpg?auto=webp&format=pjpg&width=3840&quality=60'

    },
    {
        //8
        question: "Who is this player",
        answers: ['suarez', 'luis suarez'],
        image: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/CXMB6GZ645MF7CX6RHONJLPG7I.jpg'
    },
    {
        //9
        question: "Who is this player",
        answers: ['benzema', 'karim benzema'],
        image: 'https://icdn.football-espana.net/wp-content/uploads/2023/09/Karim-Benzema.jpg'
    },
    {
        //10
        question: "Who is this player",
        answers: ['david beckham', 'beckham', 'becks'],
        image: 'https://www.vanityestetik.com/en/blog/wp-content/uploads/2023/09/David-Beckham-football.jpg'

    },
    {
        //11
        question: "Who is this player",
        answers: ['robert lewandowski', 'lewandowski', 'lewangolski'],
        image: 'https://cdn.theathletic.com/app/uploads/2023/11/03114921/GettyImages-1691093476-scaled.jpg'
    },
    {
        //12
        question: "Who is this player",
        answers: ['jude bellingham', 'bellingham', 'belligol'],
        image: 'https://cdn.vox-cdn.com/thumbor/LO1_AdbFuM-C0POoDoUWPndrrFA=/0x0:3869x2880/1200x800/filters:focal(1607x450:2225x1068)/cdn.vox-cdn.com/uploads/chorus_image/image/72919498/1810785869.0.jpg'

    },
    {
        //13
        question: "Who is this player",
        answers: ['kane', 'harry kane'],
        image: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAxODE3MTc1NzgxMDI1Mzg1/harry-kane.jpg'

    },
    {
        //14
        question: "Who is this player",
        answers: ['salah', 'mohamed salah', 'mo salah'],
        image: 'https://www.thisisanfield.com/wp-content/uploads/P2023-10-08-Brighton_Liverpool-33.jpg'

    },
    {
        //15
        question: "Who is this player",
        answers: ['de bruyne', 'kevin de bruyne', 'kdb'],
        image: 'https://static.independent.co.uk/2022/10/23/19/1435606233.jpg'

    },
    {
        //16
        question: "Who is this player",
        answers: ['ronaldo', 'nazario'],
        image: 'https://cdn.britannica.com/48/142848-050-2A6FC569/Ronaldo-2004.jpg?w=400&h=300&c=crop'

    },
    {
        //17
        question: "Who is this player",
        answers: ['dinho', 'ronaldinho'],
        image: 'https://www.spectator.co.uk/wp-content/uploads/2023/09/GettyImages-56034481.jpg'

    },
    {
        //18
        question: "Who is this player",
        answers: ['xavi'],
        image: 'https://img.bleacherreport.net/img/images/photos/003/406/920/hi-res-7e445d0ec0d6b5cce3fee7b22fe74b6a_crop_exact.jpg?w=1200&h=1200&q=75'

    },
    {
        //19
        question: "Who is this player",
        answers: ['iniesta', 'andres iniesta'],
        image: 'https://i.pinimg.com/originals/63/6c/88/636c885c87424e5c57a41037f81b6839.jpg'

    },
    {
        //20
        question: "Who is this player",
        answers: ['sergio ramos', 'ramos'],
        image: 'https://imageio.forbes.com/specials-images/imageserve/6543c078963eb5307bc40eb9/Sevilla-unveil-Sergio-Ramos-/960x0.jpg?format=jpg&width=960'
    },
    {
        //21
        question: "Who is this player",
        answers: ['vini', 'vini jr', 'vinicius', 'vinicius jr'],
        image: 'https://remezcla.com/wp-content/uploads/2023/05/Vinicus-Jr.-Sports.jpg'
    },
    {
        //22
        question: "Who is this player",
        answers: ['gareth bale', 'bale'],
        image: 'https://imageio.forbes.com/specials-images/imageserve/5ecec1c2938ec500060ab3ba/0x0.jpg?format=jpg&crop=1231,1232,x838,y159,safe&height=416&width=416&fit=bounds'
    },
    {
        //23
        question: "Who is this player",
        answers: ['cryuff', 'johan cryuff', 'johan'],
        image: 'https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2016/03/cruyff.jpg?fit=2048%2C1566&ssl=1'
    }
]
let score = document.querySelector('.scoreCount');
let maxScore = easyList.length;

function prevQuestion() {
    currentQuestion--;
    changeQuestion(currentQuestion);
}


function nextQuestion() {
    currentQuestion++;
    changeQuestion(currentQuestion);
}

function start() {
    errorCode = 7;
    currentQuestion = 0;
    score.innerText = 0;
    changeQuestion(0);
}

function goQuiz() {
    window.location.href = 'startQuiz.html';
}

let totalScored = 0;
//at this point, we have an array of the questions (questionSet), answer and image of the difficulty chosen (difficultyChosen)
function loadEasyQuestions() {

    // Check if there are more questions to display
    if (currentQuestion < easyList.length) {
        document.getElementById('playerImage').src = easyList[currentQuestion].image;
        document.getElementById('playernameIn').value = "";
    }
    else {
        localStorage.setItem('finalScore', document.querySelector('.scoreCount').innerText);
        document.getElementById('playernameIn').value = "";
        alert("Quiz is Completed")
        window.location.href = 'easysummary.html';
    }

}

function checkAnswer() {

    //gets the correct answers for the current question
    let correctAnsChoices = easyList[currentQuestion].answers;
    //getting the answer from the input field
    let answerInput = document.getElementById("playernameIn").value;
    //makes everything everything lowercase so that checking is easier
    //1. lowercase the answer inputted from the user
    answerInput = answerInput.toLowerCase();

    //after getting the lowercase answer, go through the correctanswer choices and see if it matches
    //checking if its correct or not

    if (correctAnsChoices.includes(answerInput)) {
        console.log("Correcto");
        score.innerText = +score.innerText + 1;

        const buttons = document.querySelectorAll('.playerTraverseButtons');
        buttons[currentQuestion].classList.remove('red');
        buttons[currentQuestion].classList.add('green');

        currentQuestion++;
        changeQuestion(currentQuestion);

    } else {
        const buttons = document.querySelectorAll('.playerTraverseButtons');
        buttons[currentQuestion].classList.add('red');
        console.log("Incorrecto");
    }


}

//function for what happens if the user skips the question
function skip() {
    if (currentQuestion > 0 || errorCode === 7) {
        currentQuestion++;
        changeQuestion(currentQuestion);
    }
}



function summaryStats(score) {
    let scorePercentage = (score / easyList.length) * 100;
    const scorePlace = document.getElementById("scoreCounter");

    let counter = 0;
    //how many milliseconds you want this animation to go on for
    const duration = 3500;
    //time when entering the scoreAnimation function below
    const startTime = Date.now();
    //setting an interval time for running the scoreAnimation functionn for 15 ms
    const interval = setInterval(scoreAnimation, 15);

    function scoreAnimation() {
        //time since entering the function, given by the date.now and start time
        const durationFuncEnter = Date.now() - startTime;
        //this durationFuncEnter will be compared against the duration var above
        const animationProgress = (durationFuncEnter / duration);
        //what happens until the point it reaches the percentage of users score
        if (animationProgress < 1) {
            //equation easeProgress that determines how it eases down
            const easeProgress = 1 - Math.pow(1 - animationProgress, 24);
            //animated value using ease progress
            const animationValue = scorePercentage * easeProgress;
            scorePlace.innerText = animationValue.toFixed(2) + "%";

        }
        else {
            //output the final percentage
            scorePlace.innerText = scorePercentage.toFixed(2) + "%";
            clearInterval(interval)
        }
    }
}

function restart() {
    window.location.href = 'easy.html';
}


document.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("check").click();
    }
});
//toggling the button for which question were on to be black and white
function toggleActivationButton(buttonIndex) {
    const buttons = document.querySelectorAll('.playerTraverseButtons');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[buttonIndex].classList.add('active');
}
//changing the question, does most of the work of changing the question 
function changeQuestion(playerIndex) {
    currentQuestion = playerIndex;
    toggleActivationButton(playerIndex);
    loadEasyQuestions();
}

function submit() {
    localStorage.setItem('finalScore', document.querySelector('.scoreCount').innerText);
    document.getElementById('playernameIn').value = "";
    window.location.href = 'easysummary.html';
}
