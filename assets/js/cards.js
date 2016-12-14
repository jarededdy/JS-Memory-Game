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
	alert( allCards[i].value ); //reveals the value of the card
	$('.number-'+i).css("background-color", allCards[i].color); //reveals the color of the card
	checkCards(i);
}

var firstCard = 0;
var secondCard = 0;
var score = 0;
var firstCardClicked;
var secondCardClicked;

function checkCards (i) {
	var cardVal = allCards[i].value;

	if (firstCard == 0) {
		firstCard = cardVal;
		firstCardClicked = "number-" + i;
	}
	else {
		secondCard = cardVal;
		secondCardClicked = "number-" + i;
	}

	if (secondCard !=0) {
		function checkValues() {
			if (firstCard == secondCard) {
				//add a point and show it on the scoreboard
				//var score ++;
				//$('.scoreboard').html(score);

				//remove the cards from the game
				$(firstCardClicked).css("display", "none");
				$(secondCardClicked).css("display", "none");

				// reset values to 0
				firstCard=0;
				secondCard=0;
			} else {
				//take away a point and show it on the scoreboard
				//var score --;
				//$('.scoreboard').html(score);

				//reset background colors to grey
				$(firstCardClicked).css("background-color", "#eaeaea");
				$(secondCardClicked).css("background-color", "#eaeaea");

				// reset values to 0
				firstCard=0;
				secondCard=0;
			}
		}
	}
}

function resetBoard () {
	$('.card').css("background-color", "#eaeaea");
	$('.gameboard').html("");
	createCards();
}