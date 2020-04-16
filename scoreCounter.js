var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");
var reset  = document.querySelector(".reset");
var num = document.querySelector(".num");
var winScore = document.querySelector("p span");
var name1 = document.querySelector(".name1");
var name2 = document.querySelector(".name2");
var p1name = document.querySelector("#p1name");
var p2name = document.querySelector("#p2name");

var player1=0;
var player2=0;
var gameOver=false;
var winningScore=5;
p1.addEventListener("click" , function(){
	if(!gameOver){
	player1++;
	if(player1===winningScore){
		p1score.classList.add("winner");
		gameOver=true;
		alert("player1 won!!");
		
	}
	p1score.textContent=player1;
}

});

p2.addEventListener("click" , function(){

	if(!gameOver){
	player2++;
	if(player2===winningScore){
		p2score.classList.add("winner");
		gameOver=true;
		alert("player2 won!!");
	}
	p2score.textContent=player2;
}

	
});

reset.addEventListener("click" , function(){
	
resetfull();
	});

function resetfull(){
	player1=0;
player2=0;
p1score.textContent=0;
p2score.textContent=0;
p1score.classList.remove("winner");
p2score.classList.remove("winner");
gameOver=false;

}

num.addEventListener("change" , function(){
	winScore.textContent=this.value;
	winningScore=Number(this.value);
	resetfull();
	});

name1.addEventListener("change" , function(){
	
p1name.textContent=this.value;
p1.textContent=this.value;

});


name2.addEventListener("change" , function(){
	
p2name.textContent=this.value;
p2.textContent=this.value;
});