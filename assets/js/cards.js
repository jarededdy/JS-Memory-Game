//setting my global variables
var firstCard;
var secondCard;
var score = 0;
var bestRecord = 1000000;
var firstCardClicked = false;
var secondCardClicked = false;
var firstCardClass;
var secondCardClass;

var cards = [
	{ 
		value: 10,
		color: "#ff0000"
	},
	{ 
		value: 20,
		color: "#ff6600"
	},
	{ 
		value: 30,
		color: "#0000ff"
	},
	{ 
		value: 40,
		color: "#00ff00"
	},
	{ 
		value: 50,
		color: "#efc849"
	},
	{ 
		value: 60,
		color: "#6348bd"
	},
	{ 
		value: 70,
		color: "#e57b86"
	}
];

var cardsClone = cards.slice(); //clone the array cards
var allCards = cards.concat(cardsClone); //combine the cloned array with the original cards array

function shuffle(array) { //shuffle array that will shuffle the indexes of any array passed as an argument
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function createCards() {
	shuffle(allCards); //shuffle the allCards array indexes
	var i = 0; //set to 0 always because thats the beginning of the array
	while (allCards[i]) { //loops through each array index
	  $('.gameboard').append("<a class=\"card number-" + i + "\" data-value=\"" + allCards[i].value + "\" onClick=\"showValue("+i+")\";></a>"); //loops through the cards array and creates HTML elements based on each object in the array
	  i++; //continues loop
	};
	return allCards;
};

function showValue(i) {
	$('.number-'+i).css("background-color", allCards[i].color); //reveals the color of the card
	setTimeout(function(){
		checkCards(i);
	}, 600);
}

function checkCards (i) {
	var cardVal = allCards[i].value;
	if (firstCardClicked == false) { //if we haven't clicked any cards yet this runs
		firstCard = cardVal; //get the card clicked's value
		firstCardClass = ".number-" + i; //grab the class of the first card so we can change the background color later
		firstCardClicked = true; //we have clicked the first card so this should be true so we will run the next if statement
		return firstCard;
	} else if (firstCardClicked == true && secondCardClicked == false) {
		secondCard = cardVal
		//alert ("first Card Value is " + firstCard + " second Card Value is " + secondCard);
		secondCardClass = ".number-" + i;//grab the class of the second card so we can change the background color later
		checkValues(firstCard, secondCard, firstCardClass, secondCardClass);
  	firstCardClicked = false;
  	secondCardClicked = false;
	}; 
};

function checkValues(firstCard, secondCard, firstCardClass, secondCardClass) {
		if (firstCard == secondCard) {
			//add a point and show it on the scoreboard
			score ++;
			$('.scoreboard').html(score);

			//remove the cards from the game
			$(firstCardClass).css("visibility", "hidden");
			$(secondCardClass).css("visibility", "hidden");

			// reset values to 0
			firstCard=0;
			secondCard=0;
		} else {
			//take away a point and show it on the scoreboard
			score ++;
			$('.scoreboard').html(score);

			//reset background colors to grey
			$(firstCardClass).css("background-color", "#eaeaea");
			$(secondCardClass).css("background-color", "#eaeaea");

			// reset values to 0
			firstCard=0;
			secondCard=0;
		};
};

function resetBoard () {
	if (bestRecord > score) {
		bestRecord = score;
		$('.best-record').html(bestRecord);
	};
	firstCard = 0;
	secondCard = 0;
	score = 0;
	firstCardClicked = false;
	secondCardClicked = false;
	firstCardClass;
	secondCardClass;
	$('.scoreboard').html(score);
	$('.card').css("background-color", "#eaeaea");
	$('.gameboard').html("");
	createCards();
}