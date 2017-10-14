$(document).ready(function() {

 //   * There will be four crystals displayed as buttons on the page.

 //   * The player will be shown a random number at the start of the game.
 	var myRand = Math.floor(Math.random() * 100);
 	$("#randomNumber").text(myRand);

 //   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
 	var crystalRandOne = Math.floor(Math.random() * 10);
 	var crystalRandTwo = Math.floor(Math.random() * 10);
 	var crystalRandThree = Math.floor(Math.random() * 10);
 	var crystalRandFour = Math.floor(Math.random() * 10);

 //     * Your game will hide this amount until the player clicks a crystal.
 	$("#crystalOne").click(function() {
 		$("#crystalOne").html("<h1>" + crystalRandOne + "</h1>");
 		playerScore += crystalRandOne;
 		$("#totalScore").text(playerScore);
 		checkScore();
 	});
 	$("#crystalTwo").click(function() {
 		$("#crystalTwo").html("<h1>" + crystalRandTwo + "</h1>");
 		playerScore += crystalRandTwo;
 		$("#totalScore").text(playerScore);
 		checkScore();
 	});
 	$("#crystalThree").click(function() {
 		$("#crystalThree").html("<h1>" + crystalRandThree + "</h1>");
 		playerScore += crystalRandThree;
 		$("#totalScore").text(playerScore);
 		checkScore();
 	});
 	$("#crystalFour").click(function() {
 		$("#crystalFour").html("<h1>" + crystalRandFour + "</h1>");
 		playerScore += crystalRandFour;
 		$("#totalScore").text(playerScore);
 		checkScore();
 	});

 //     * When they do click one, update the player's score counter.
 	var playerScore = 0;

 //   * The player wins if their total score matches the random number from the beginning of the game.
 	var checkScore = function() {
 		if (playerScore === myRand) {
 			win();
 		} else if (playerScore > myRand) {
 			lose();
 		}
 	}
 	
 //   * The player loses if their score goes above the random number.

 //   * The game restarts whenever the player wins or loses.
 	var reset = function() {
 		myRand = Math.floor(Math.random() * 100);
 		crystalRandOne = Math.floor(Math.random() * 10);
 		crystalRandTwo = Math.floor(Math.random() * 10);
 		crystalRandThree = Math.floor(Math.random() * 10);
 		playerScore = 0;
 		
 		crystalRandFour = Math.floor(Math.random() * 10);
 		$("#randomNumber").text(myRand);
 		$("#crystalOne").empty();
 		$("#crystalTwo").empty();
 		$("#crystalThree").empty();
 		$("#crystalFour").empty();
 		$("#totalScore").text("0");
 	}
 //     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

 //   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
 	var wins = 0;
 	var win = function() {
 		wins++;
 		$("#wins").text(wins);
 		alert("Player Wins!");
 		reset();
 	}
 	var losses = 0;
 	var lose = function() {
 		losses++;
 		$("#losses").text(losses);
 		alert("Player Loses!");
 		reset();
 	}
});