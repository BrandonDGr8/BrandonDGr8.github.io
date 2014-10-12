/* to represent score (seconds elapsed) */
var startTime;
var currentTime;
var gameStarted = false;
var gameContinuing = false;
var gameEnded = false;
var timeElapsed = 0;
var untilHeal = 5000;

/* these represent how many heals left until the body part is healthy */
var head=0;
var leftA=0;
var rightA=0;
var torso=0;
var leftL=0;
var rightL=0;

/* how many heals the user has left */
var heals=0;

/* how many milliseconds between everything */
var delayInjury=6000;
var delayHeal=5000;

/* how many messages have shown up -- needed to delete them sequentially */
var msgNo = 1;

/* Intervals */
var healCreation
var continuous

/* the function that creates the injuries */
var createInjury = function() {
	console.log("Create injury?");
	if (gameContinuing) {
		console.log("Injury created");
		/* choose a random body part and increase it by one */
		var bodyChoice = Math.floor(6 * Math.random());
		switch(bodyChoice) {
			case 0:
				if (head === 3) {
					gameEnd();
				}
				// head = Math.floor((3 - head) * Math.random()) + 1;
				else {
					head+=1;
					$('.head').replaceWith("<img class='head' src='img/head" + head + ".png'>");
					// TODO
					sendMsg("Head injury!");
				}
				break;
			case 1:
				if (leftA === 3) {
					gameEnd();
				}
				// leftA = Math.floor((3 - leftA) * Math.random()) + 1;
				else {
					leftA+=1;
					$('.leftA').replaceWith("<img class='leftA' src='img/leftA" + leftA + ".png'>");
					// TODO
					sendMsg("Left arm injury!");
				}
				
				break;
			case 2:
				if (rightA === 3) {
					gameEnd();
				}
				// rightA = Math.floor((3 - rightA) * Math.random()) + 1;
				else {
					rightA+=1
					$('.rightA').replaceWith("<img class='rightA' src='img/rightA" + rightA + ".png'>");
					// TODO
					sendMsg("Right arm injury!");
				}
				break;
			case 3:
				if (torso === 3) {
					gameEnd();
				}
				else {
					torso+=1;
					$('.torso').replaceWith("<img class='torso' src='img/torso" + torso + ".png'>");
					// TODO
					sendMsg("Torso injury!");
				}
				// torso = Math.floor((3 - torso) * Math.random()) + 1;
				
				break;
			case 4:
				if (leftL === 3) {
					gameEnd();
				}
				else {
					leftL+=1;
					$('.leftL').replaceWith("<img class='leftL' src='img/leftL" + leftL + ".png'>");
					// TODO
					sendMsg("Left leg injury!");
				}
				// leftL = Math.floor((3 - leftL) * Math.random()) + 1;

				break;
			case 5:
				if (rightL === 3) {
					gameEnd();
				}
				// rightL = Math.floor((3 - rightL) * Math.random()) + 1;
				else {
					rightL+=1;
					$('.rightL').replaceWith("<img class='rightL' src='img/rightL" + rightL + ".png'>");
					// TODO
					sendMsg("Right leg injury!");
				}
				
				break;
		}

		//Manipulate delayInjury here?
		delayInjury = (Math.floor(3*Math.random())*1 + 3)*1000;
		setTimeout(function() { createInjury(); console.log("enter createInjury"); }, delayInjury);
	} else {
		setTimeout(function() { createInjury(); console.log("enter createInjury"); }, 4000);
	}
}

/* the function that creates a heal */
var createHeal = function() {
	if(gameContinuing) {
		// console.log("Heal created");
		var date = new Date();
		untilHeal = 5000;
		heals++;
		//TODO: manipulate delayHeal here?
	} 
}

var sendMsg = function(message) {
	var temp = msgNo;
	msgNo++;
	$('.messageBar').append("<p id='" + temp + "'>"+ message + "</p>");
	setTimeout(function() {$('#' + temp).remove();}, 3000); // messages will disappear after 3 seconds
};

var gameHTML = [
	// TODO: HTML of initial game goes here
	'<img src="img/head0.png" alt="" class="head">',
	'<img src="img/rightA0.png" alt="" class="rightA">',
	'<img src="img/leftA0.png" alt="" class="leftA">',
	'<img src="img/torso0.png" alt="" class="torso">',
	'<img src="img/rightL0.png" alt="" class="rightL">',
	'<img src="img/leftL0.png" alt="" class="leftL">',

	'<div class="timeElapsed"></div>',
	'<div class="numHeals"></div>',
	'<div class="untilHeal"></div>'
];

/* Updating the text in the game */
var updates = function() {
	if (gameContinuing) {
		// console.log("update");
		timeElapsed += 100;
		$('.timeElapsed').empty();
		$('.timeElapsed').append("Time elapsed: " + Math.floor(timeElapsed/1000) + "s");

		$('.numHeals').empty();
		$('.numHeals').append(heals + " heals left");

		untilHeal -= 100;
		$('.untilHeal').empty();
		$('.untilHeal').append("Next heal: " + Math.floor(untilHeal/1000) + "s");
	}
}

var gameEnd = function() {
	sendMsg("Your body shut down!")
	$('.mid').append("<div class='gameover'>You have failed humanity. Score: " + Math.floor(timeElapsed/1000) + "</div>");
	gameContinuing = false;
	gameEnded = true;
	clearInterval(healCreation);
	clearInterval(continuous);
	// $('.mid').empty();
}

$(document).ready(function() {
	$(".footL").mouseenter(function () {
		$(".description").show();
	});
	$(".footL").mouseleave(function () {
		$(".description").hide();
	});
	$(".footR").mouseenter(function () {
		$(".instructions").show();
	});
	$(".footR").mouseleave(function () {
		$(".instructions").hide();
	});
	console.log(gameContinuing);

	$('.play').click(function() {
		console.log("clicked");
		$('.game').empty();
		$('.game').append(gameHTML.join(''));

		var date = new Date;
		startTime = date.getTime();
		gameStarted = true;
		gameContinuing = true;

		console.log("head: " + head);
		console.log("heals: " + heals);
		console.log(gameContinuing);

		/* To keep creating heals */
		setTimeout(createInjury, delayInjury); 	// not done by interval because it varies
												// var injuryCreation = setInterval(createInjury, delayInjury);
		healCreation = setInterval(createHeal, delayHeal);
		continuous = setInterval(updates, 100);
	});

	$('.mid').mouseleave(function() { 
		if (gameContinuing && !gameEnded) { 
			console.log(gameContinuing + " " + gameEnded + "pause");
			gameContinuing = false;
			$('.game').append("<div class='pause'>GAME PAUSED</div>");
		} 
	});
	$('.mid').mouseenter(function() { 
		if (gameStarted && !gameEnded) {
			gameContinuing = true; 
			$('.pause').remove(); 
		}
	});

	/* when the player clicks on a body, the game will heal it if there are enough heals */
	$(document).on('click','.head', function(){
		console.log("head clicked");
		if(gameContinuing) {
			
			if (heals > 0 && head > 0) {
				heals--;
				head--;
				$('.head').replaceWith("<img class='head' src='img/head" + head + ".png'>");
				sendMsg("Head has been healed!");
			} else {
				sendMsg("Cannot heal!");
			}
		}
	});
	$(document).on('click','.leftA', function(){
		if(gameContinuing) {
			if (heals > 0 && leftA > 0) {
				heals--;
				leftA--;
				$('.leftA').replaceWith("<img class='leftA' src='img/leftA" + leftA + ".png'>");
				sendMsg("Left arm has been healed!");
			} else {
				sendMsg("Cannot heal!");
			}
		}
	});
	$(document).on('click','.rightA', function(){
		if(gameContinuing) {
			if (heals > 0 && rightA > 0) {
				heals--;
				rightA--;
				$('.rightA').replaceWith("<img class='rightA' src='img/rightA" + rightA + ".png'>");
				sendMsg("Right arm has been healed!");
			} else {
				sendMsg("Cannot heal!");
			}
		}
	});
	$(document).on('click','.leftL', function(){
		if(gameContinuing) {
			if (heals > 0 && leftL > 0) {
				heals--;
				leftL--;
				$('.leftL').replaceWith("<img class='leftL' src='img/leftL" + leftL + ".png'>");
				sendMsg("Left leg has been healed!");
			} else {
				sendMsg("Cannot heal!");
			}
		}
	});
	$(document).on('click','.rightL', function(){
		if(gameContinuing) {
			if (heals > 0 && rightL > 0) {
				heals--;
				rightL--;
				$('.rightL').replaceWith("<img class='rightL' src='img/rightL" + rightL + ".png'>");
				sendMsg("Right leg has been healed!");
			} else {
				sendMsg("Cannot heal!");
			}
		}
	});
	$(document).on('click','.torso', function(){
		if(gameContinuing) {
			if (heals > 0 && torso > 0) {
				heals--;
				torso--;
				$('.torso').replaceWith("<img class='torso' src='img/torso" + torso + ".png'>");
				sendMsg("Torso has been healed!");
			} else {
				sendMsg("Cannot heal!");
			}
		}
	});
});
