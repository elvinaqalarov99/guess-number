let computerGuess;
let attempts;
let attempt=0;
let userGuesses = [];
let low = 0;
let high = 100;
const rangeOutput = document.getElementById("rangeOutput");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function init(){
	computerGuess = getRndInteger(0,100);
	document.getElementById("newGameButton").style.display = "none";
	document.getElementById("gameArea").style.display = "none";
}

function startGameView(){
	document.getElementById("welcomeScreen").style.display = "none";
	document.getElementById("gameArea").style.display = "block";
}

function gameLevel(level){
	attempts = level ? 5 : 10;
	startGameView();
}

function show(){
	if (computerGuess > 80) console.log("yes");
}

function reloadGame(){
	location.reload();
	return false;
}


function rangeCheck(attr,value,color){
	document.getElementById(attr).style.width = `${value}%`;
	document.getElementById(attr).style.background = color;
}

function compareGuesses(){
	const userGuess = +document.getElementById("userGuess").value;
	console.log(computerGuess);
	if (attempt < attempts){
		attempt++;
		userGuesses.push(" "+userGuess);
		document.getElementById("guesses").innerHTML = userGuesses;
		document.getElementById("attempts").innerHTML = attempt;
		if (userGuess > computerGuess){
			document.getElementById("textOutput").innerHTML = "Your guess is too high";
			high = userGuess;
			rangeCheck("space",(high-low),"var(--blue)");
			rangeCheck("high",(100-(high)),"red");
			rangeOutput.innerHTML = `${low} - ${high}`;
			document.getElementById("userGuess").value = "";
		}else if ( userGuess < computerGuess ){
			document.getElementById("textOutput").innerHTML = "Your guess is too low";
			low = userGuess;
			rangeCheck("low",low,"red");
			rangeCheck("space",high-low,"var(--blue)");
			rangeOutput.innerHTML = `${low} - ${high}`;
			document.getElementById("userGuess").value = "";
		}else{
			document.getElementById("textOutput").innerHTML = "Correct. Your got it in " + attempt + " attempts";
			document.getElementById("userGuess").style.pointerEvents = "none";
			document.getElementById("newGameButton").style.display = "block";
		}
	}else{
		document.getElementById("textOutput").innerHTML = "You Lost. The number was " + computerGuess;
		document.getElementById("userGuess").style.pointerEvents = "none";
		document.getElementById("newGameButton").style.display = "block";
	}
	
}
