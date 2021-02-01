/**
 * 
 */

var minutes = 25;
var seconds = "00";
var interval=false;


function template(){
	document.getElementById("minutes").innerHTML=minutes;
	document.getElementById("seconds").innerHTML=seconds;
}

function start(){
	
	var click = new Audio("song/click.mp3");
	var bell = new Audio("song/bell.mp3");
	
	if(interval===true){
		minutes=4;
		seconds=59;
	}else{
		minutes = 24;
		seconds = 59;				
	}
	
	click.play();

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	
	var minutes_interval = setInterval(minutesTimer, 60000); 
	var seconds_interval = setInterval(secondsTimer, 1000);
	
	function minutesTimer() {
		minutes = minutes - 1;
		document.getElementById("minutes").innerHTML = minutes;
	}
	
	function secondsTimer() {
		seconds = seconds - 1;
		document.getElementById("seconds").innerHTML = seconds;
		
		if(seconds<=0){
			if(minutes<=0){
				clearInterval(minutes_interval);
				clearInterval(seconds_interval);
				
				document.getElementById("done").innerHTML="Sessão Completa. Click no play para iniciar o seu intervalo!";
				
				document.getElementById("done").classList.add("show_message");
				
				bell.play();
				
				interval = true
				minutes=5;
				seconds=0;
				
			}
			seconds=60;
		}
	}
}