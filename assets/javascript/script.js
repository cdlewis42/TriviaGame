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
var guesses = 0;
$("#remainingTime").hide()
$("#questions").hide()

//function for a timer
function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
        if (time === 0) {
            $("#questions").empty()
            $("#remainingTime").text("You ran out of time!")
            $("#questions").text(scoreCard)

        }
        else if(time>0){
            time--;
            $("#remainingTime").html("Time Remaining: " + time);
        }
    }
}


//displays questions
function questionContent(){
    for(var i=0;i<trivia.length;i++){
    $("#questions").append("<p>" + 
    trivia[i].question + 
    "</p><button class='answerList btn'>" + 
    trivia[i].answerList[0] + 
    "</button><button class='answerList btn'>" + 
    trivia[i].answerList[1] + 
    "</button><button class='answerList btn'>" + 
    trivia[i].answerList[2] + 
    "</button><button class='answerList btn'>" +
    trivia[i].answerList[3] + 
    "</button>");
    questionCounter ++
}
}

// Determines on click if user has right or wrong guess.
$(".answerList").on("click", (function() {
    var userGuess = $(this).text();
    if (userGuess === trivia[this].correctAnswer) {
        correctGuess++
        alert("Correct!")
    }
    else {
        alert("Incorrect!")
    }
}),)


//toggles class to active to change border
$("btn").on("click", function(){
$(this).toggleClass('active');
document.getElementsByClassName("btn").style.border = "5px dotted red"
})



var scoreCard = function () {
    var arrayLength=trivia.length

    if (correctGuess === arrayLength-2) {
        var endMessage = "You got 1 out of 3 right!"
    }
    else if (correctGuess === arrayLength-1 ) {
        var endMessage = "You got 2 out of 3 right!"
    }
    else if (correctGuess === arrayLength.length){
        var endMessage = "You got a perfect score!"
    }
    else{
        var endMessage = "Oh.. You didn't get any right."
    }
    $("#questions").html(endMessage)
}


//starts game

$("#start").on("click",function(){
    questionContent();
    $("#questions").show()
    $("#start").hide()
    $("#remainingTime").show()
    timer()
})

