var cards = [
	{ 
		value: 10,
		color: "#ff0000",
		height:200,
		width:100
	},
	{ 
		value: 20,
		color: "#ff6600",
		height:200,
		width:100
	},
	{ 
		value: 30,
		color: "#0000ff",
		height:200,
		width:100
	}
];

function createCards() {
	var i = 0; //set to 0 always because thats the beginning of the array
	while (cards[i]) { //loops through each array index
	  $('.gameboard').append("<a class=\"card number-" + i + "\" data-value=\"" + cards[i].value + "\" onClick=\"showValue("+i+")\";></a>"); //loops through the cards array and creates HTML elements based on each object in the array
	  i++; //continues loop
	};
};

function showValue(i) {
	alert( cards[i].value ); //reveals the value of the card
	$('.number-'+i).css("background-color", cards[i].color); //reveals the color of the card
}