var totalDie = 1;

function generateRandom(dice) {
	var total = 0;
	$(".resultDice").each(function () {
		var number = Math.floor((Math.random() * 6) + 1);
			switch (number) {
				case 1:
					$(this).attr("src", "img/dice1.png");
					break;
				case 2:
					$(this).attr("src", "img/dice2.png");
					break;
				case 3:
					$(this).attr("src", "img/dice3.png");
					break;
				case 4:
					$(this).attr("src", "img/dice4.png");
					break;
				case 5:
					$(this).attr("src", "img/dice5.png");
					break;
				case 6:
					$(this).attr("src", "img/dice6.png");
					break;
			};
			total += number;
	});
	// for (var i = 1; i <= totalDie; i++) {
		// if ($(dice).hasClass(i)) {
			
		// };
		$("#result").html(total);
};
	
	// document.getElementById('result').innerHTML = number;
	


$(document).ready(function () {
	// $("#add").click(function () {
	// 	var newDice = $("<div class='dice'><img src='img/dice1.png' alt='' class='resultDice'><p id='result'>Click Me</p></div>");
	// 	newDice.appendTo (".dices");
	// 	console.log("added")
	// });
	// $(".resultDice").click(function () {
	// 	console.log("clicked");
	// 	generateRandom(this);
	// });
	$(document).on('click','.resultDice',function() {
    	console.log("clicked");
    	generateRandom(".resultDice");
	});
	$(document).on('click','#add',function() {
		totalDie++;
		var newDice = $("<div class='dice'><img src='img/dice1.png' alt='' class='resultDice'></div>");
    	newDice.appendTo (".dices");
    	console.log("added");
    	$(".total").html(totalDie);
	});
	$(document).on('click','#minus',function() {
		if (totalDie > 1) {
			totalDie--;
	    	$(".dice:last").remove();
	    	console.log("removed");
		}
    	$(".total").html(totalDie);
	});
});