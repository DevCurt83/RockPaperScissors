var h = window.innerHeight;
var w = window.innerWidth;
gameStart();
var scores = [0,0], roundscore, activePlayer, gamePlaying, userPick; 
var comment = [" - You both chose the same thing!!", " - Round goes to Player 1", " - Round goes to CPU", " - Make your choice", "chose Rock", "chose Paper", "chose scissors", "", "Press the RESET button to play again"];
var result = ["YOU ARE THE WINNER!!", "COMPUTER HAS WON!!"];
var picGroup = document.getElementsByClassName("img-wrap");
var rock = document.querySelector("#rock");
var scissors = document.querySelector("#scissors");
var paper = document.querySelector("#paper");
var rockButton = document.querySelector("#rock-hover");
var paperButton = document.querySelector("#paper-hover");
var scissorsButton = document.querySelector("#scissors-hover");

function gameStart() {
document.querySelector('.after-start').style.display = ('none');
document.querySelector(".instruction1").style.display = ("none");
document.querySelector(".instruction2").style.display = ("none");
}

document.getElementById('start').addEventListener("click", initialise);

function initialise() {
	// nextPlayer(); 
	document.querySelector(".instruction2").textContent = comment[7];
	if(scores[0] || scores[1] === 3){
		if(scores[0] === 3){
		document.querySelector(".result-message").textContent = result[0];
		for(i = 0;i <=2;i++){
			picGroup[i].style.display = 'none';		
		}
	}
	    if(scores[1] === 3){
		document.querySelector(".result-message").textContent = result[1];
		for(i = 0;i <=2;i++){
			picGroup[i].style.display = 'none';		
		}
    }
    }
    //testing for active issue
    document.querySelector(".score-player-0").classList.add("active");
	document.querySelector(".score-player-1").classList.remove("active");
	gamePlaying = true;
	activePlayer = 0;
    document.querySelector(".game-state-pic").style.display = ("none");
    document.querySelector(".initial-state").style.display = ("none");
	document.querySelector(".after-start").style.display = ("block");
	document.querySelector("#rock-hover").style.display = ("inline-block");
	document.querySelector("#paper-hover").style.display = ("inline-block");
	document.querySelector("#scissors-hover").style.display = ("inline-block");
	paper.style.display = "inline-block";
	scissors.style.display = "inline-block";
	rock.style.display = "inline-block"; 
	// document.querySelectorAll('.picture-group').style.display = ("inline-block");
	if(gamePlaying){
	document.querySelector(".instruction1").textContent = comment[3];
	document.querySelector(".instruction1").style.display = ("inline-block");
	myFunction();
}
}

//user clicks on rock paper etc
function chingChang (chong) {
	//state variable
	if(gamePlaying){
   //decide what button has been pressed using button value
   //storing that value 
  userPick = parseInt(chong.value);
  console.log(userPick);
  if(chong.value === "1") {
  	document.querySelector(".instruction1").classList.remove('alt-background');
  	document.querySelector(".instruction2").classList.remove('alt-background');
  	document.querySelector(".instruction2").textContent = "CPU is making its choice......";
  	document.querySelector(".instruction2").style.display = "inline-block";
  	document.querySelector(".instruction1").textContent = "You " + comment[4];
  	document.querySelector("#paper-hover").style.display = ("none");
  	document.querySelector("#scissors-hover").style.display = ("none");
  	document.querySelector("#paper").style.display = ("none");
  	document.querySelector("#scissors").style.display = ("none");
  	activePlayer = 1;
  	cpuChoice();
  }
  else if(chong.value === "2") {
  	document.querySelector(".instruction1").classList.remove('alt-background');
  	document.querySelector(".instruction2").classList.remove('alt-background');
  	document.querySelector(".instruction2").textContent = "CPU is making its choice......";
  	document.querySelector(".instruction2").style.display = "inline-block";
  	document.querySelector(".instruction1").textContent = "You " + comment[5];
    document.querySelector("#rock-hover").style.display = ("none");
  	document.querySelector("#scissors-hover").style.display = ("none");
  	document.querySelector("#rock").style.display = ("none");
  	document.querySelector("#scissors").style.display = ("none");
  	activePlayer = 1;	
  	cpuChoice();
  }
  else {
  	document.querySelector(".instruction1").classList.remove('alt-background');
  	document.querySelector(".instruction2").classList.remove('alt-background');
  	document.querySelector(".instruction2").textContent = "CPU is making its choice......";
  	document.querySelector(".instruction2").style.display = "inline-block";
  	document.querySelector(".instruction1").textContent = "You " + comment[6];
  	document.querySelector("#rock-hover").style.display = ("none");
  	document.querySelector("#paper-hover").style.display = ("none");
  	document.querySelector("#paper").style.display = ("none");
  	document.querySelector("#rock").style.display = ("none");
  	activePlayer = 1;
  	cpuChoice();
  }
}
}
//-------------------------------------------- function tasks -----------------------------------


//changing player 
function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // document.querySelector(".score-player-0").classList.toggle("active");
    document.querySelector(".after-start").style.display = ("block");
	document.querySelector("#rock-hover").style.display = ("inline-block");
	document.querySelector("#paper-hover").style.display = ("inline-block");
	document.querySelector("#scissors-hover").style.display = ("inline-block");

}
//for reset button when its made.... MR KING.............
document.querySelector(".reset").addEventListener('click', resetGame);
function resetGame() {
	scores = [0,0];
	roundscore = 0;
	activePlayer = 0;
	document.querySelector(".instruction1").textContent = "Press START to play";
	document.querySelector(".after-start").style.display = "none";
	document.querySelector(".initial-state").style.display = "inline-block";
	document.querySelector(".game-state-pic").style.display = "block";
	document.querySelector(".pics").style.display ="none";
	document.querySelector(".result-message").textContent = result[7];
	for(var i = 1;i <= 5;i++) {
		document.getElementById("tick-"+ i).style.display = "none";
		document.getElementById("cpu-tick-"+i).style.display = "none";
	}
	for(i = 0;i <=2;i++){
		picGroup[i].style.display = 'block';		
	}
}
function cpuChoice () {
	document.querySelector(".score-player-0").classList.toggle("active");
	document.querySelector(".score-player-1").classList.toggle("active");
	gamePlaying = false;
    setTimeout(function(){
    var choice = Math.floor(Math.random() * 3) +1;
    console.log(choice);
    if(userPick === choice) {
     //Print in a div var comment[0];
    activePlayer = 0;
    document.querySelector(".instruction1").textContent = comment[0];
    document.querySelector(".instruction1").classList.add('alt-background');
    document.querySelector(".instruction2").textContent = 'CPU made the same choice';
    document.querySelector(".instruction2").classList.add('alt-background');
    //this is where I left off 04/11/2018
    setTimeout(function(){
    initialise();

    },700);
  }    
  	if(userPick === 1 && choice === 2) {
  	document.querySelector(".instruction1").textContent = comment[2];
  	document.querySelector(".instruction2").textContent = comment[2];
  	document.querySelector("#rock-hover").style.display = ("none");
  	document.querySelector("#scissors-hover").style.display = ("none");
  	scores[activePlayer] += 1;
  	tickMachine();
  	activePlayer = 0;
  	setTimeout(function(){
  		initialise();	
  	},850);
  	}

  	if(userPick === 1 && choice === 3){
    document.querySelector(".instruction1").textContent = comment[1];
  	document.querySelector(".instruction2").textContent = comment[1];
  	document.querySelector("#paper-hover").style.display = ("none");
  	document.querySelector("#rock-hover").style.display = ("none");
  	scores[0] +=1;
  	tickMachine();
  	setTimeout(function(){
  		initialise();
  	},850);
  	}
  	if (userPick === 2 && choice === 1) {
  	document.querySelector(".instruction1").textContent = comment[1];
  	document.querySelector(".instruction2").textContent = comment[1];
  	document.querySelector("#scissors-hover").style.display = ("none");
  	document.querySelector("#paper-hover").style.display = ("none");
  	scores[0] +=1;
  	tickMachine();
  	setTimeout(function(){
  		initialise();
  	},850);
  	}
  	if (userPick === 2 && choice === 3) {
  	document.querySelector(".instruction1").textContent = comment[2];
  	document.querySelector(".instruction2").textContent = comment[2];
  	document.querySelector("#paper-hover").style.display = ("none");
  	document.querySelector("#rock-hover").style.display = ("none");
  	scores[1] +=1;
  	tickMachine();
  	setTimeout(function(){
  		initialise();
  	},850);
  	}
  	if (userPick === 3 && choice === 1) {
  	document.querySelector(".instruction1").textContent = comment[2];
  	document.querySelector(".instruction2").textContent = comment[2];
  	document.querySelector("#scissors-hover").style.display = ("none");
  	document.querySelector("#paper-hover").style.display = ("none");
  	scores[1] +=1;
  	tickMachine();
  	setTimeout(function(){
  		initialise();
  	},850);	
  	}
  	if (userPick === 3 && choice === 2) {
    document.querySelector(".instruction1").textContent = comment[2];
  	document.querySelector(".instruction2").textContent = comment[2];
  	document.querySelector("#scissors-hover").style.display = ("none");
  	document.querySelector("#rock-hover").style.display = ("none");
  	scores[0] +=1;
  	tickMachine();
  	setTimeout(function(){
  		initialise();
  	},850);	
  	}
    },2000);
    }
function tickMachine() {
   for(var i = 1; i <= scores[0];i++){
   	   document.querySelector('#tick-' + i).style.display = "inline-block";
   	}
    for(var y = 1; y <= scores[1];y++){
        document.querySelector('#cpu-tick-' + y).style.display = "inline-block";
   	}
}
function myFunction() {
    var element = document.querySelector(".instruction1");
    var element1 = document.querySelector(".instruction2");
    element.classList.remove("alt-background");
    element1.classList.remove("alt-background");
} 
