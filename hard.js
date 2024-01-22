let currentQuestion = 0;
let errorCode = 44;

let hardList = [
    {
        //1
        answers : ["Laurent Koscielny", "Koscielny"],
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt58354aa0a4e04052/60dbda0b2e95e10f21f1fbb4/e6b0825dda0118df3381ca8f7eec52439bd37941.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
        //2
        answers : ["Corentin Tolisso", "Tolisso"],
        image : "https://images.teamtalk.com/content/uploads/2022/06/01081538/bayern-munich-midfielder-corentin-tolisso.jpg"
    },
    {
        //3
        answers : ["Alex Telles", "Telles"],
        image : "https://static.independent.co.uk/2021/07/27/16/acfaf302b2f2122c8a75ce481acfcabaY29udGVudHNlYXJjaGFwaSwxNjI3NDg2NDcy-2.56738654.jpg"
    },
    {
        //4
        answers : ["Marco Materazzi", "Materazzi"],
        image : "https://icdn.sempreinter.com/wp-content/uploads/2021/05/Marco-Materazzi-scaled-e1620056738876.jpg"
    },
    {
        //5
        answers : ["Troy Deeney", "Deeney"],
        image : "https://i.guim.co.uk/img/media/f3ffc4dddbba7bb6a5d6c3f3841b0ee9873c0bb1/759_120_2162_1297/master/2162.jpg?width:1200&height:1200&quality:85&auto:format&fit:crop&s:e99abd868afe9291fa776263ff6fdd36"
    },
    {
        //6
        answers : ["Douglas Costa", "Costa"],
        image : "https://tmssl.akamaized.net/images/foto/galerie/douglas-costa-fc-bayern-1603258399-49616.jpg?lm:1603258416"
    },
    {
        //7
        answers : ["Thorgan Hazard", "Hazard"],
        image : "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/d134b376ac03a5bb5d72bb90cdd815ca0b83e5830f16c5ba7e460e0028f2e889.jpg"
    },
    {
        //8
        answers : ["Juanfran"],
        image : "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2016/05/29/1865095-39298952-2560-1440.jpg"
    },
    {
        //9
        answers : ["Karim Bellarabi", "Bellarabi"],
        image : "https://tmssl.akamaized.net/images/foto/galerie/karim-bellarabi-1510558310-12720.jpg?lm:1510558324"
    },
    {
        //10
        answers : ["Ahmed Musa", "Musa"],
        image : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta022e8dcdaf3801a/60df6ff4b08e424bfbbf757d/f17a1ebacbe754cb97821bb1b78a6f12179e5699.jpg"
    },
    {
        //11
        answers : ["Joao Mario", "Mario"],
        image : "https://icdn.sempreinter.com/wp-content/uploads/2019/02/joao-mario-5-e1549749620371.jpg"
    },
    {
        //12
        answers : ["Lucas Digne", "Digne"],
        image : "https://www.astonvillanews.co.uk/static/uploads/10/2023/08/Resizing-template-2023-08-08T184806.932-1140x783.jpg"
    },
    {
        //13
        answers : ["Zico"],
        image : "https://www.footballhistory.org/images/zico_brazil.jpg"
    },
    {
        //14
        answers : ["Andriy Shevchenko", "Shevchenko"],
        image : "https://tmssl.akamaized.net/images/foto/galerie/shevchenko-milan-1497255151-10729.jpg?lm:1497255159"
    },
    {
        //15
        answers : ["Hugo Sanchez", "Hugo"],
        image : "https://m.media-amazon.com/images/M/MV5BOGMxYmYwOTQtODJlYy00M2VkLWFlMDctOTVmNzFlMWMxYjAzXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
    },
    {
        //16
        answers : ["Rivaldo"],
        image : "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2018/09/rivaldo.jpg?fit:1600%2C1067&ssl:1"
    },
    {
        //17
        answers : ["Seedorf"],
        image :"https://tmssl.akamaized.net/images/foto/galerie/clarence-seedorf-ac-milan-mailand-2012-schuss-1592552357-41780.jpg?lm:1592552430"
    },
    {
        //18
        answers : ["Jonathan Tah", "Tah"],
        image : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta08c2f21f9b4be73/6570a8d0939b6c040ad17f1c/GettyImages-1829879561.jpg?auto:webp&format:pjpg&width:3840&quality:60"
    },
    {
        //19
        answers : ["Inaki Williams", "Williams"],
        image : "https://cdn.vanguardngr.com/wp-content/uploads/2023/01/Inaki-Williams.jpg"
    },
    {
        //20
        answers : ["Stoichkov"],
        image : "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/854_stoitxkov.jpg"
    },
    {
        //21
        answers : ["Ollie Watkins", "Watkins"],
        image : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcd55058de9016395/64395bded7799b3876b41586/GOAL_-_Blank_WEB_-_Facebook.jpg?auto:webp&format:pjpg&width:3840&quality:60"
    },
    {
        //22
        answers : ["Marcos Llorente", "Llorente"],
        image : "https://prod-media.beinsports.com/image/1685777213646_26bce75f-4ae8-4b0b-b797-b001022c1776.jpg"
    },
    {
        //23
        answers : ["Michael Laudrup", "Laudrup"],
        image : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3b3840bad08250a0/62feac6b6894f733513bbfde/2664782.jpg?auto:webp&format:pjpg&width:3840&quality:60"
    },
    {
        //24
        //WRONGOWNONONOG
        answers : ["fernando hierro", "hierro"],
        image: "https://www.telegraph.co.uk/content/dam/world-cup/2018/06/13/TELEMMGLPICT000166219343_trans_NvBQzQNjv4BqC_LLCXkS_z-CZqgOMP7Be-z-hddcE3OAkLr7nFoIkco.jpeg"
    },

    {
        //25
        answers : ["Leonardo Spinazzola", "Spinazzola"],
        image : "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article27615225.ece/ALTERNATES/s1200c/0_GettyImages-1613548575.jpg"
    },
    {
        //26
        answers : ["Patrick Kluivert", "Kluivert"],
        image : "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2016/03/kluivert.jpg?fit:1600%2C1185&ssl:1"
    },
    {
        //27
        answers : ["Fernando Morientes", "Morientes"],
        image : "https://tmssl.akamaized.net/images/foto/galerie/fernando-morientes-1490268172-9098.jpg?lm:1490268196"
    },
    {
        //28
        answers : ["pato"],
        image : "https://tmssl.akamaized.net/images/foto/galerie/alexandre-pato-ac-mailand-1628591174-68629.jpg?lm:1628591186"
    },
    {
        //29
        answers : ["Larsson", "Henrik Larsson"],
        image : "https://tmssl.akamaized.net/images/foto/galerie/henrik-larsson-schweden-1582817891-32631.jpg?lm:1582817903"
    },
    {
        //30
        answers : ["Samuel Umtiti", "Umtiti"],
        image : "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/RLXNUHPOOVOKHD7F6OJ27U6P7A.jpg"
    },
    {
        //31
        answers : ["Dante"],
        image : "https://e2.365dm.com/14/08/800x600/football-dante-bayern-munich-munchen-fc_3183401.jpg?20140806140706"
    },
    {
        //32
        answers : ["Franco Baresi", "Baresi"],
        image : "https://thesefootballtimes.co/wp-content/uploads/2019/07/baresi-2400x1766.jpg"
    },

    {
        //33
        answers : ["Pedro"],
        image : "https://upload.wikimedia.org/wikipedia/commons/c/c1/Bar%C3%A7a_-_Napoli_-_20140806_-_Pedro_Rodriguez.jpg"
    },

    {
        //34
        answers : ["Pepe Reina"],
        image : "https://storage.googleapis.com/afs-prod/media/238f9668c6c64adfb4b555c65518dd56/2118.jpeg"
    },

    {
        //35
        answers : ["Kurt Zouma"],
        image : "https://static.standard.co.uk/2023/01/18/16/newFile-6.jpg?crop:8:5,smart&quality:75&auto:webp&width:960"
    },

    {
        //WROOWNROWNRONR
        //36
        answers : ["Toby Alderweireld", "Alderweireld"],
        image : "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTDVfyKpn9l1Qt6SHIfCoKwwR5rHf-MkFOXFdVT6E9vgRjay1Xa48ETbFrBlzt0W7QsgH-1uC5VtPzLFvM"
    },
    {
        //37
        answers : ["Bailly", "eric Bailly"],
        image : "https://www.the-sun.com/wp-content/uploads/sites/6/2023/08/crop-23446033.jpg?w=620"
    },


]

let score = document.querySelector('.scoreCount');
let maxScore = hardList.length;

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
    if (currentQuestion < hardList.length) {
        document.getElementById('playerImage').src = hardList[currentQuestion].image;
        document.getElementById('playernameIn').value = "";
    }
    else {
        localStorage.setItem('finalScore', document.querySelector('.scoreCount').innerText);
        document.getElementById('playernameIn').value = "";
        alert("Quiz is Completed")
        window.location.href = 'hardsummary.html';
    }

}

function submit() {
    localStorage.setItem('finalScore', document.querySelector('.scoreCount').innerText);
    document.getElementById('playernameIn').value = "";
    window.location.href = 'hardsummary.html';
}


function checkAnswer() {

    //gets the correct answers for the current question
    let correctAnsChoices = hardList[currentQuestion].answers;
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
    let scorePercentage = (score / hardList.length) * 100;
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
    window.location.href = 'hard.html';
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