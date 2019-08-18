var op=['+','-','*','/'];
var num1=Math.floor((Math.random()*100)+1);
var num2=Math.floor((Math.random()*100)+1);
var a=Math.floor(Math.random()*4);
function operator(){

	var totalScore = localStorage.getItem("TotalScore");
		if(totalScore!=null){
			document.getElementById("level").innerHTML = "Level: "+localStorage.getItem("TotalScore");
		}
	document.getElementById("ques").innerHTML="Q.>      "+num1+"    "+op[a]+"   "+num2;
	var a1=num1+num2;
	document.getElementById('op1').value = a1;
	document.getElementById("op1").innerHTML=a1;
	var a2=num1-num2;
	document.getElementById('op2').value = a2;
	document.getElementById("op2").innerHTML=a2;
	var a3=num1*num2;
	document.getElementById('op3').value = a3;
	document.getElementById("op3").innerHTML=a3;
	var a4=Math.floor(num1/num2);
	document.getElementById('op4').value = a4;
	document.getElementById("op4").innerHTML=a4;

	if(localStorage.getItem("name")==null || localStorage.getItem("name")==""){
			alert("User Not found");
			window.location = "login.html";
		}
		else{
			document.getElementById("user").innerHTML = ""+localStorage.getItem("name");
			document.getElementById("score").innerHTML = "score:  "+localStorage.getItem("TotalScore");
		}
}

var userRes=0;

function storeTempRes(ans){
	userRes = document.getElementById(ans).value;
}

function ValidateAnswer(){
	var res = 0;
	switch(op[a]){
		case '+': res = num1+num2;
					break;
		case '-': res = num1-num2;
					break;
		case '*': res = num1*num2;
					break;
		case '/': res = Math.floor(num1/num2);
					break;
		default : break;
	}
	if(res==userRes){
		var totalScore = localStorage.getItem("TotalScore");
		var temptop=localStorage.getItem("TopScore");
		if(totalScore==null){
	        localStorage.setItem("TotalScore",1);
			if(localStorage.getItem("TopScore")==null){
				localStorage.setItem("TopScore",1);
			}
			else if(temptop<totalScore){
				tempTop = totalScore;
				localStorage.setItem("TopScore",tempTop);
			}
		}
		else{
			var tempScore = parseInt(localStorage.getItem("TotalScore"))+1;
			localStorage.setItem("TotalScore",tempScore);
			if(localStorage.getItem("TopScore")==null){
				localStorage.setItem("TopScore",1);
			}
			else {
				var tempScore1 = parseInt(totalScore);
				if(tempScore1>parseInt(localStorage.getItem("TopScore"))){
					var tempTop = parseInt(localStorage.getItem("TopScore"))+1;
					localStorage.setItem("TopScore",tempTop);
				}
				
			}
		}
		window.location = "Game.html";
		
	}
	else{
		
		alert("Game is over...");
		localStorage.removeItem("TotalScore");
		window.location = "TopScore.html";
	}
}