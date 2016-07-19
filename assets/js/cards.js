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
	var i = 0;
	while (cards[i]) {
	  $('.gameboard').append("<a class=\"card number-" + i + "\" data-value=\"" + cards[i].value + "\" onClick=\"showValue("+i+")\";></a>");
	  i++;
	};
};

function showValue(i) {
	alert( cards[i].value );
	$('.number-'+i).css("background-color", cards[i].color);
}