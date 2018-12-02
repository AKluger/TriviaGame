
//start main function to run on window open

window.onload = function() {

    $("#start").click(timer.start);



}
var intervalId;
var flipPage;
var clockRunning = false;
var x;
var i;

var Question = function(x)    {
    $("#question").append(x.question)
    $("#answerOne").append(x.answerOne)
    $("#answerTwo").append(x.answerTwo)
    $("#answerThree").append(x.answerThree)
    $("#answerFour").append(x.answerFour);
    $(".answers").click(reveal);
}


var reveal = function(x)    {
    for (i = 0; i < questionArr.length; i++)
    timer.stop()
    $("#reveal").html(questionArr[i].image) //winning gif to display if correct clicked
    clockRunning = false
    flipPage = setTimeout(timer.start, 4000)
    clearTimeout(flipPage);
}
// var answers = function()    {
//     $(".answers").click(reveal(x));
// }


//starting time

//use click event for start button to call the first question 

//Use element Ids and jQuery to label answer divs, 4 per question with click.
//also use hover event on each answer div

//use stopwatch functionality or set TimeOut?  including reset function to be called for each question page, putting starting time in clock div to begin countdown.  
//Also include count function but starting from 25 seconds.
//And StopInterval function


//design one object per question with keys including question then answerOne Two etc..

var qOne = {

    question: "1.  Which of these ingredients is NOT usually found in bread?",
    answerOne: "Flour",
    answerTwo: "Salt",
    answerThree: "Pepper",
    answerFour: "Yeast",
    image: "<img src='assets/images/pepper.gif'</img>"
}

var qTwo = {

    question: "2.  Which of these processes occurs both in bread making AND beer making?",
    answerOne: "Baking",
    answerTwo: "Fermentation",
    answerThree: "Icing",
    answerFour: "Dueling"
}

var qThree = {

    question: "3.  What is a signature ingredient of the French bread known as 'Brioche'?",
    answerOne: "Butter",
    answerTwo: "Chocolate",
    answerThree: "Wine",
    answerFour: "Brown Sugar"
}

var qFour = {

    question: "4.  the German dessert Schwarzwälder Kirschtorte is commonly known as what?",
    answerOne: "Chocolate Eclair",
    answerTwo: "Viennoiserie",
    answerThree: "Black FOrest Cake",
    answerFour: "Peanut-Butter Jelly Time"
}

var qFive = {

    question: "4.  This popular breakfast pastry comes in the shape of a crescent",
    answerOne: "Croissant",
    answerTwo: "Bagel",
    answerThree: "Doughnut",
    answerFour: "Quiche"
}

var qSix = {

    question: "5.  Which of these ancient cultures is known to have baked bread?",
    answerOne: "Egyptians",
    answerTwo: "Greeks",
    answerThree: "Vikings",
    answerFour: "All of the Above"
}

var qSeven = {

    question: "7.  This pastry is sometimes referred to as escargot for its spiral shape:",
    answerOne: "Galette",
    answerTwo: "Pain aux raisins",
    answerThree: "Palmier",
    answerFour: "Eclair"
}

var qEight = {

    question: "8.  Which of these items is commonly fried?",
    answerOne: "Doughnut",
    answerTwo: "Bagel",
    answerThree: "Carrot Cake",
    answerFour: "Apple Pie"
}

var questionArr = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight];

// for i in questionArr maybe with each stop of the game iterates to next set of questions

var timer = {

time: 15,

start: function()    {
    for (i = 0; i < questionArr.length; i++)
    if(!clockRunning)   {
        intervalId = setInterval(timer.count, 1000)
        clockRunning = true;
        Question(questionArr[i]);
        // $("start").remove(); 
    }
},


//count function to increment timer down each second
count: function()    {
    timer.time--;
    $("#Timer").text("time remaining: " + timer.time)
    if (timer.time === 0) {

        //  ...run the stop function.
        timer.stop();
        $("#answerOne").html("<h3> Time's Up!</h3>");

       
      }
},

stop: function()    {
    intervalId = clearInterval(intervalId)
    // clockRunning = false
    // reveal(qOne)
    // flipPage = setTimeout(timer.start, 4000)
    // clearTimeout(flipPage);
    
    //does clockrunning need to be false here?
},
};



//use function to populate ID with those by iterating.  So create array of objects then pass them as argument?
//if any button is clicked run freeze timer function.  
//as part of freeze timer, if question = q1 display correct image

//build answer key.  Correct answer value is 1 others are 0 so if answer value = 1 run correct function


//if timer runs out...

//setTimeout for answer reveal page that calls function of next question

//if answer x then .html this stuff and do 3 second countdown or .html this other stuff a do countdown as well

//I guess that static answer page with countdown is its own function









//scoreboard object featuring correct incorrect and unanswered to be entered in answer divs on final page

