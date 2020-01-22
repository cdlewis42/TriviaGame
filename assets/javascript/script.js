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
    question: "Are hedgehogs native to North America?",
    answerList: ["True","False"],
    correctAnswer:1
}
]
var correctGuess = 0;
var incorrectGuess = 0;
var time = 30;

//function for a timer
function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
        if (time < 1) {
            clearInterval(clock);
            userTimeout();
        }
        if (time > 0) {
            time--;
        }
        $("#timeRemaining").html("Time Remaining: " + time);
    }
}


//displays questions
function questionContent(){
    for(var i=0;i<trivia.length;i++){
    var newDiv = $("<div>");
    newDiv.append(trivia[i].question);
    newDiv.append("<p>" + trivia[i].answerList + "</p>");
    newDiv
    $("#questions").append(newDiv);
    
}
}

function initializeGame(){
    timer();
    questionContent();
}

//Calls function to start game
