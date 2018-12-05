
//start main function to run on window open

window.onload = function () {

    $("#start").click(timer.start);



}
var choice;
var intervalId;
var flipPage;
var clockRunning = false;
var x = 0;
var i = -1;
var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;

var timer = {

    time: 15,

    reset: function () {

        timer.time = 15;

        $("#Timer").text("time remaining: " + timer.time);
    },

    start: function () {
        // for (i = 0; i < questionArr.length; i++)
        if (!clockRunning) {
            clearTimeout(flipPage)
            $("#correct, #reveal").empty();
            timer.reset()
            intervalId = setInterval(timer.count, 1000)
            clockRunning = true;
            Question(questionArr[x])
            x++
            $("#start").remove();
        }
        //else (once i is done, run endGame function which will show score etc)
    },


    //count function to increment timer down each second
    count: function () {
        timer.time--;
        $("#Timer").text("time remaining: " + timer.time)
        if (timer.time === 0) {

            timer.stop()
            unanswered++
            reveal(x)
            $("#correct").html("<h3> Time's Up!</h3>")
            x++


        }
    },

    stop: function () {
        intervalId = clearInterval(intervalId)
        $(".answers").empty();
    }
};


// LIST OF QUESTIONS
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
    answerFour: "Dueling",
    image: "<img src='assets/images/beerDog.gif'</img>"
}

var qThree = {

    question: "3.  What is a signature ingredient of the French bread known as 'Brioche'?",
    answerOne: "Butter",
    answerTwo: "Chocolate",
    answerThree: "Wine",
    answerFour: "Brown Sugar",
    image: "<img src='assets/images/pepper.gif'</img>"
}

var qFour = {

    question: "4.  the German dessert Schwarzwälder Kirschtorte is commonly known as what?",
    answerOne: "Chocolate Eclair",
    answerTwo: "Viennoiserie",
    answerThree: "Black Forest Cake",
    answerFour: "Peanut-Butter Jelly Time",
    image: "<img src='assets/images/swedishChef.gif'</img>"
}

var qFive = {

    question: "4.  This popular breakfast pastry comes in the shape of a crescent",
    answerOne: "Quiche",
    answerTwo: "Bagel",
    answerThree: "Doughnut",
    answerFour: "Croissant",
    image: "<img src='assets/images/pepper.gif'</img>"
}

var qSix = {

    question: "5.  Which of these ancient cultures is known to have baked bread?",
    answerOne: "Egyptians",
    answerTwo: "Greeks",
    answerThree: "Vikings",
    answerFour: "All of the Above",
    image: "<img src='assets/images/pepper.gif'</img>"
}

var qSeven = {

    question: "7.  This pastry is sometimes referred to as escargot for its spiral shape:",
    answerOne: "Galette",
    answerTwo: "Pain aux raisins",
    answerThree: "Palmier",
    answerFour: "Eclair",
    image: "<img src='assets/images/pepper.gif'</img>"
}

var qEight = {

    question: "8.  Which of these items is commonly fried?",
    answerOne: "Bagel",
    answerTwo: "Carrot Cake",
    answerThree: "Doughnut",
    answerFour: "Apple Pie",
    image: "<img src='assets/images/pepper.gif'</img>"
}

var questionArr = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight];

var Question = function (x) {
    // for (i = 0; i < questionArr.length; i++)
    $("#question").text(x.question)
    $("#answerOne").text(x.answerOne)
    $("#answerTwo").text(x.answerTwo)
    $("#answerThree").text(x.answerThree)
    $("#answerFour").text(x.answerFour);
    $(".answers").click(reveal);
}

var answerKey = [qOne.answerThree, qTwo.answerTwo, qThree.answerOne, qFour.answerThree, qFive.answerFour, qSix.answerFour, qSeven.answerTwo, qEight.answerThree];

var reveal = function () {
    // for (i = 0; i < questionArr.length; i++)
    i++
    $("#reveal").html(questionArr[i].image) //winning gif to display if correct clicked
    clockRunning = false
    flipPage = setTimeout(timer.start, 4000)
    choice = $(this).text()
    // choice = $.trim(choice)
    // $(this) is updating but if statement doesnt work bc this is also printing emptied div..?
    
    console.log(choice)

    if (answerKey.indexOf(choice) > -1) {
        rightAnswer++
        $("#correct").html("<h3> Correct!</h3>")

    }
    else {
        $("#correct").html("<h3> Wrong Answer!</h3>")
        wrongAnswer++
    }
    timer.stop()

}

// var answers = function()    {
//     $(".answers").click(reveal(x));
// }

//also use hover event on each answer div

//design one object per question with keys including question then answerOne Two etc..

// for i in questionArr maybe with each stop of the game iterates to next set of questions





//use function to populate ID with those by iterating.  So create array of objects then pass them as argument?
//as part of freeze timer, if question = q1 display correct image

//setTimeout for answer reveal page that calls function of next question

//if answer x then .html this stuff and do 3 second countdown or .html this other stuff a do countdown as well

//I guess that static answer page with countdown is its own function









//scoreboard object featuring correct incorrect and unanswered to be entered in answer divs on final page

