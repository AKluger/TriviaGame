
//start main function to run on window open

window.onload = function () {

    $("#start").click(timer.start);

}

var newGame = function () {
    $("#reveal").off()
    $("#all").empty().append( $("<div id='rain'> <div id='animate'> </div></div>"))

    x = 0
    i = 0
    rightAnswer = 0
    wrongAnswer = 0
    unanswered = 0
    $(".answers").removeClass("box")
    $(".answers").empty()
    $("#question").empty()
    timer.start()

}

var choice;
var intervalId;
var flipPage;
var clockRunning = false;
var x = 0;
var i = 0;
var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;

//runs at conclusion of game round
var endGame = function () {
    $("#correct").html("<h2>All Done!  Let's see the results:</h3>")
    $(".answers").addClass("box")
    $("#answerOne").html("<h3> Correct: " + rightAnswer + "</h3>")
    $("#answerTwo").html("<h3> Incorrect: " + wrongAnswer + "</h3>")
    $("#answerThree").html("<h3> Unanswered: " + unanswered + "</h3>")
    $("#reveal").html("<h2><button> Start Over? </button></h2>")
    $("#reveal").click(newGame);



    //BEGIN emoji rain copied from CodePen by Robert Heiser
    var container = document.getElementById('animate');
    var emoji = ['🥐', '🥖', '🍞', '🍪', '👨🏻‍🍳', '👩🏽‍🍳'];
    var circles = [];

    for (var b = 0; b < 6; b++) {
        addCircle(b * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
        addCircle(b * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    }



    function addCircle(delay, range, color) {
        setTimeout(function () {
            var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
                x: -0.15 + Math.random() * 0.3,
                y: 1 + Math.random() * 1
            }, range);
            circles.push(c);
        }, delay);
    }

    function Circle(x, y, c, v, range) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.color = c;
        this.v = v;
        this.range = range;
        this.element = document.createElement('span');
        /*this.element.style.display = 'block';*/
        this.element.style.opacity = 0;
        this.element.style.position = 'absolute';
        this.element.style.fontSize = '26px';
        this.element.style.color = 'hsl(' + (Math.random() * 360 | 0) + ',80%,50%)';
        this.element.innerHTML = c;
        container.appendChild(this.element);

        this.update = function () {
            if (_this.y > 800) {
                _this.y = 80 + Math.random() * 4;
                _this.x = _this.range[0] + Math.random() * _this.range[1];
            }
            _this.y += _this.v.y;
            _this.x += _this.v.x;
            this.element.style.opacity = 1;
            this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
            this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
            this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
        };
    }

    function animate() {
        for (var b in circles) {
            circles[b].update();
        }
        requestAnimationFrame(animate);
    }

    animate();
    // END emoji rain code
}

//timer object
var timer = {

    time: 15,

    reset: function () {

        timer.time = 15;

        $("#Timer").text("time remaining: " + timer.time);
    },

    start: function () {

        if (!clockRunning && (x < 8)) {
            clearTimeout(flipPage)
            $("#correct, #reveal").empty();
            timer.reset()
            intervalId = setInterval(timer.count, 1000)
            clockRunning = true;
            Question(questionArr[x])
            x++
            $("#start").remove();
        }

        else { endGame() }
        
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
        $("#question").empty()
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
    image: "<img src='assets/images/brioche.gif'</img>"
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

    question: "5.  This popular breakfast pastry comes in the shape of a crescent:",
    answerOne: "Quiche",
    answerTwo: "Bagel",
    answerThree: "Donut",
    answerFour: "Croissant",
    image: "<img src='assets/images/croissants.gif'</img>"
}

var qSix = {

    question: "6.  Which of these ancient cultures is known to have baked bread?",
    answerOne: "Egyptians",
    answerTwo: "Greeks",
    answerThree: "Vikings",
    answerFour: "All of the Above",
    image: "<img src='assets/images/slicedBread.gif'</img>"
}

var qSeven = {

    question: "7.  Which of these techniques is NOT typically part of cookie making?",
    answerOne: "Baking",
    answerTwo: "Rolling",
    answerThree: "Kneading",
    answerFour: "Creaming",
    image: "<img src='assets/images/cookie.gif'</img>"
}

var qEight = {

    question: "8.  Which of these items is commonly fried?",
    answerOne: "Bagel",
    answerTwo: "Carrot Cake",
    answerThree: "Doughnut",
    answerFour: "Apple Pie",
    image: "<img src='assets/images/donut.gif'</img>"
}

var questionArr = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight];


var Question = function (x) {
    // for (i = 0; i < questionArr.length; i++)
    $("#question").text(x.question)
    $("#answerOne").html("<btn>" + x.answerOne + "</btn>")
    $("#answerTwo").text(x.answerTwo)
    $("#answerThree").text(x.answerThree)
    $("#answerFour").text(x.answerFour)
    $(".answers").addClass("btn btn-lg")
    $(".answers").click(reveal);
}

var answerKey = [qOne.answerThree, qTwo.answerTwo, qThree.answerOne, qFour.answerThree, qFive.answerFour, qSix.answerFour, qSeven.answerThree, qEight.answerThree];


//runs after user chooses an answer
var reveal = function (x) {
    $(".answers").removeClass("hover")
    $("#reveal").html(questionArr[i].image) //winning gif to display if correct clicked
    i++
    clockRunning = false
    flipPage = setTimeout(timer.start, 1000)
    choice = $(this).text()
    console.log(i)
    console.log(choice)

    if (answerKey.indexOf(choice) > -1) {
        rightAnswer++
        $("#correct").html("<h3> Correct!</h3>")

    }
    else {
        $("#correct").html("<h3> Wrong Answer!</h3>")
        wrongAnswer++
    }
    $(".answers").removeClass("btn btn-lg")  //prevents hover effect on empty divs
    $(".answers").off();   //clears the click event for next round
    timer.stop()

}