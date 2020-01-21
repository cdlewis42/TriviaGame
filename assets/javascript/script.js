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

//Starts the game

function initializeGame(){
for(var i=0;i<Array.length;i++)
var newDiv = $("#questions").append("<div>")
newDiv.append(trivia[i].question);
newDiv.append(trivia[i].answerList)
}

//Calls function to start game
initializeGame()