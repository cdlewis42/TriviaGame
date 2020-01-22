var trivia =[{
    question: "What is a group of hedgehogs called?",
    answerList: ["a murder", "a herd", "an array","an army"],
    correctAnswer:2
},
{
    question: "How many quills does a hedgehog have?",
    answerList:["Between 2000 and 3000", "Between 5000 and 7000", "Between 1000 and 1150", "Exactly 4124"],
    correctAnswer:1
},
{
    question: "What is a hedgehog's least useful sense?",
    answerList: ["Hearing","Seeing","Touch","Smell"],
    correctAnswer:1
}
]
var questionCounter = 0;
var correctGuess = 0;
var incorrectGuess = 0;
var time = 30;

//function for a timer
function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
        if (time < 1) {
            clearInterval(clock);
            $("#remainingTime".text("You ran out of time!"))
        }
        if (time > 0) {
            time--;
        }
        $("#remainingTime").html("Time Remaining: " + time);
    }
}


//displays questions
function questionContent(){
    for(var i=0;i<trivia.length;i++){
    $("#questions").append("<p>" + 
    trivia[i].question + 
    "</p><p class='answerList'>" + 
    trivia[i].answerList[0] + 
    "</p><p class='answerList'>" + 
    trivia[i].answerList[1] + 
    "</p><p class='answerList'>" + 
    trivia[i].answerList[2] + 
    "</p><p class='answerList'>" +
    trivia[i].answerList[3] + 
    "</p>");
    questionCounter ++
}
}

// Determines on click if user has right or wrong guess.
$("#questions").on("click", ".answerList", (function() {
    var userGuess = $(this).text();
    if (userGuess === trivia[this].correctAnswer) {
        correctGuess++
        alert("Correct!")
    }
    else {
        alert("Incorrect!")
    }
}),)

function resultsScreen() {
    if (correctGuess === 1) {
        var endMessage = "You got 1 out of 3 right!"
    }
    else if (correctGuess === 2 ) {
        var endMessage = "You got 2 out of 3 right!"
    }
    else if (correctGuess === 3){
        var endMessage = "You got a perfect score!"
    }
    else{
        var endMessage = "Oh.. You didn't get any right."
    }
    $("#questions").html(endMessage)
}


//starts game
function initializeGame(){
    questionContent();
    timer()
}


    



//Calls function to start game
initializeGame()
