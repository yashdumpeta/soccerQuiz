let currentQuestion = 0;
let errorCode = 44;
let mediumList = [
    {
        //1
        answers: ['radamel falcao', 'falcao', 'radamel'],
        image: "//nbcsports.brightspotcdn.com/dims4/default/124aaac/2147483647/strip/false/crop/3844x2269+0+0/resize/1486x877!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F29%2F9f%2F8cfd2e95976149d35ece0988192c%2Ffalcao-e1461178993831.jpeg"
    },
    {
        //2
        answers: ['robin van persie', 'van persie'],
        image: "https://tmssl.akamaized.net/images/foto/galerie/robin-van-persie-1433753294-4702.jpg?lm=1483605985"

    },
    {
        //3
        answers: ['edison cavani', 'cavani'],
        image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/02/19/2998423-61524188-2560-1440.jpg"
    },
    {
        //4
        answers: ["andrea pirlo", "pirlo"],
        image: "https://s.yimg.com/ny/api/res/1.2/2rCsWWb88HA0iUjZDsveLw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/en/blogs/sptussowexperts/163286081.jpg"
    },
    {
        //5
        answers: ["iker casillas", "casillas"],
        image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71PDORuJe7L._AC_UF894,1000_QL80_.jpg"
    },
    {
        //6
        answers: ["david Silva", "silva"],
        image: "https://static01.nyt.com/images/2020/08/07/sports/07rorynewsletter-silva1/07rorynewsletter-silva1-mediumSquareAt3X.jpg"
    },
    {
        //7
        answers: ["vincent kompany", "kompany"],
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb11a07d367540669/60dd7f51a8fb870f8837cb51/76034d0ede64afa25d1de2f797124eb2e3bd5b7d.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        //8
        answers: ["phillip lahm", "lahm"],
        image: "https://e0.365dm.com/14/06/2048x1152/football-2014-fifa-world-cup-phillip-lahm-germany_3162793.jpg?20140623164317"
    },
    {
        //9
        answers: ["willian"],
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/10/19/willian-goal-2.jpg"
    },
    {
        //10
        answers: ["juan Mata", "Mata"],
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2e45017b19f2faf6/64f152b14a15583707af28f4/1368922324.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        //11
        answers: ["Zanetti", "Javier Zanetti"],
        image: "https://e1.365dm.com/12/03/800x600/Zanetti_2733240.jpg?20120314131457"
    },
    {
        //12
        answers: ["De Rossi"],
        image: "https://media.asroma.com/prod/images/landscape_medium_fill/07646554173a-ddrpossibleyhgg1y.jpg"
    },
    {
        //13
        answers: ["Mats Hummels", "Hummels"],
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb2c9ab6bccd450d8/60db055f22d24e38a3883003/f536d1d41333e44ab7d8efe67503db212501cd25.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        //14
        answers: ["Carlos Tevez", "Tevez"],
        image: "https://icdn.caughtoffside.com/wp-content/uploads/2021/03/carlos-tevez-manchester-united-premier-league-2.jpg"
    },
    {
        //15
        answers: ["Joe Gomez", "Gomez"],
        image: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/14/thumb_113473_default_news_size_5.jpeg"
    },
    {
        //16
        answers: ["Marouane Fellaini", "Fellaini"],
        image: "https://prod-media.beinsports.com/image/1681429305128_841e277c-c3da-471e-92bf-768f58f0549d.jpg"
    },
    {
        //17
        answers: ["Ramires"],
        image: "https://a.espncdn.com/photo/2014/0922/soc_g_ramires1x_1296x729.jpg"
    },
    {
        //18
        answers: ["Nemanja Vidic", "Vidic"],
        image: "https://e2.365dm.com/13/09/800x600/nemanja-vidic-manchester-united_3002191.jpg?20140109095214"
    },
    {
        //19
        answers: ["Santi Cazorla", "Cazorla"],
        image: "https://media.cnn.com/api/v1/images/stellar/prod/150805203112-santi-cazorla-arsenal.jpg?q=w_1997,h_3000,x_0,y_0,c_fill"
    },
    {
        //20
        answers: ["Hulk"],
        image: "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/06/21/1371856855000-AP-Brazil-Soccer-Confed-Cup-Brazil-Mexico-1306211922_3_4.jpg"
    },
    {
        //21
        answers: ["Moussa Dembele", "Dembele"],
        image: "https://e0.365dm.com/21/01/2048x1152/skysports-moussa-dembele-lyon_5234220.jpg?20210111142912"
    },
    {
        //22
        answers: ["Ben Arfa"],
        image: "https://tmssl.akamaized.net/images/foto/galerie/hatem-ben-arfa-lille-2021-2022-1645538897-80721.jpg?lm=1645538904"
    },
    {
        //23
        answers: ["Ben Yedder"],
        image: "https://www.thesun.co.uk/wp-content/uploads/2020/05/NINTCHDBPICT000578977860-e1588336120485.jpg"
    },
    {
        //24
        answers: ["Nasri", "Samir Nasri"],
        image: "https://e0.365dm.com/21/09/1600x900/skysports-samir-nasri_5525928.jpg?20210926122000"
    },
    {
        //25
        answers: ["Hamsik"],
        image: "https://img.bleacherreport.net/img/images/photos/003/694/143/hi-res-bc7a42ae5a8143f8db9812efa59b4a4a_crop_north.jpg?1504872917&w=3072&h=2048"
    },
    {
        //26
        answers: ["Michael Owen", "Owen"],
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2009/10/23/21/254749.jpg?width=1200"
    },
    {
        //27
        answers: ["Canavaro", "Fabio Canavaro"],
        image: "https://e2.365dm.com/09/06/800x600/FabioCannavaro_2314530.jpg?20090605151358"
    },
    {
        //28
        answers: ['Haller'],
        image: "https://static.independent.co.uk/2023/03/18/22/18-1f15896036184c1692c281102f858523.jpg"
    },
    {
        //29
        answers: ["Bobby Charlton", "Charlton"],
        image: "https://e3.365dm.com/23/10/1600x900/skynews-bobby-charlton-manchester-united_6329650.jpg?20231021155032"
    },
    {
        //30
        answers: ["Sergio Roberto"],
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2ca4943178b6fdb4/652c1c733507ee3a494e97a8/GOAL_-_Blank_WEB_-_Facebook_(31).png?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        //31
        answers: ["Sommer"],
        image: "https://icdn.football-italia.net/wp-content/uploads/2022/12/Yann-Sommer-Switzerland.jpg"
    },
    {
        //32
        answers: ["Robinho"],
        image: "https://tmssl.akamaized.net/images/foto/galerie/robinho-brasilien-1621021409-62492.jpg?lm=1621021417"
    },
    {
        //33
        answers: ["Martin Braithwaite", "Braithwaite"],
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt96a5be12d681aef5/60dab9b7c5c41538a15059fc/5074785d5029db60bc110694e767c89ea53644be.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        //34
        answers: ["Koeman", "Ronald Koeman"],
        image: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/06/28/4bbf1617-4b6f-44a9-997a-ca15aedf190f/yRmMcAtp.jpg"
    },
    {
        //35
        answers: ["Michael Carrick", "Carrick"],
        image: "https://media.gq-magazine.co.uk/photos/5d13a9f8533a23b57fc637b1/1:1/w_1280,h_1280,c_limit/michael-carrick-gettyimages-1014723968.jpg"
    },
    {
        //36
        answers: ["Luis Muriel", "Muriel"],
        image: "https://icdn.sempreinter.com/wp-content/uploads/2021/03/Luis-Muriel-scaled-e1616859645818.jpg"
    },
    {
        //37
        answers: ["Bennacer"],
        image: "https://calciomio.net/wp-content/uploads/2023/01/Icon_sipausa_40773946.jpg"
    },
    {
        //38
        answers: ["georginio wijnaldum", "wijnaldum"],
        image: "https://e2.365dm.com/18/04/800x600/skysports-football-georginio-wijnaldum_4278001.jpg?20180408224218"
    },
    {
        //39
        answers: ["Danny Ings"],
        image: "https://www.thesun.co.uk/wp-content/uploads/2023/08/6e791b2d-e2ab-488f-bbb8-8eaa96a41ec9.jpg"
    },


]
let score = document.querySelector('.scoreCount');
let maxScore = mediumList.length;

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

function loadMediumQuestions() {
    // Check if there are more questions to display
    if (currentQuestion < mediumList.length) {
        document.getElementById('playerImage').src = mediumList[currentQuestion].image;
        document.getElementById('playernameIn').value = "";
    }
    else {
        localStorage.setItem('finalScore', document.querySelector('.scoreCount').innerText);
        document.getElementById('playernameIn').value = "";
        alert("Quiz is Completed")
        window.location.href = 'mediumsummary.html';
    }

}

function submit() {
    localStorage.setItem('finalScore', document.querySelector('.scoreCount').innerText);
    document.getElementById('playernameIn').value = "";
    window.location.href = 'mediumsummary.html';
}


function checkAnswer() {

    //gets the correct answers for the current question
    let correctAnsChoices = mediumList[currentQuestion].answers;
    correctAnsChoices = correctAnsChoices.map(answer => answer.toLowerCase());
    //getting the answer from the input field
    let answerInput = document.getElementById("playernameIn").value;
    //makes everything everything lowercase so that checking is easier
    //1. lowercase the answer inputted from the user
    answerInput = answerInput.toLowerCase();

    //after getting the lowercase answer, go through the correctanswer choices and see if it matches
    //checking if its correct or not

    console.log(correctAnsChoices);
    console.log(answerInput);


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
    let scorePercentage = (score / mediumList.length) * 100;
    const scorePlace = document.getElementById("scoreCounter");

    let counter = 0;
    //how many milliseconds you want this animation to go on for
    const duration = 2200;
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
            const easeProgress = 1 - Math.pow(1 - animationProgress, 5);
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
    window.location.href = 'medium.html';
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
    loadMediumQuestions();
}