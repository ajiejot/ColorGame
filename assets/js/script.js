var squareColors = document.querySelectorAll(".square");
var colors = ["red","orange","yellow","blue","violet","green"];
var audio = ["assets/audio/red.mp3","assets/audio/orange.mp3","assets/audio/yellow.mp3","assets/audio/blue.mp3",
"assets/audio/violet.mp3","assets/audio/green.mp3"]

//random color for pickedColor
/*var pickedColor= Math.floor(Math.random() * (6 - 0) + 0);
*/


//Start up load page
	$(function() {
		
		fillColors();	

	});


	function pickingColors() {
		var randomNumber= Math.floor(Math.random() * (6 - 0) + 0);
		return randomNumber;

	}



//Clicking every color events
$(".square").on("click", function(){
	var pickedColor = $("#selectedColor").text();
	var clickedColor = $(this).css("background-color");
	clickedColor=(colorInWord(clickedColor));
	console.log(pickedColor);
	console.log(clickedColor);




	if (clickedColor === pickedColor) {
		alert("CORRECT!!!!");
		$(".square").css("background",pickedColor);
		$('input[type="submit"').attr("value","PLAY AGAIN?");

	} else {
		alert("WRONG! TRY AGAIN!");
		$(this).css("background","#ccd7ea");
	}

})


$("#btnPlay").on("click",function () {
	if ($("#btnPlay").val() ==="PLAY AGAIN?" )  {
		alert("PLAY AGAIN!")
		playAgain();
	} else {
		alert("Play now");
	}

})

function playAgain() {
	fillColors();	

}



//shuffle all Colors
function shuffleColor() {
    for (var i = colors.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;

        
    }
}

//filling square of random colors
function fillColors() {
	shuffleColor();
	for (var i = 0 ; i < colors.length ; i++ ){
		squareColors[i].style.background=colors[i];
		 
	}
	
	var pickedColor=colors[pickingColors()];
	$("#selectedColor").text(pickedColor);
	$("#selectedColor").css("color",pickedColor);
	
}

//converting rgb colors to word
function colorInWord(color){
	var wordColor="";
	if (color=="rgb(0, 0, 255)"){
		wordColor="blue";
	} else if (color=="rgb(255, 0, 0)") {
		wordColor="red";
	} else if (color=="rgb(255, 255, 0)") {
		wordColor="yellow";
	} else if (color=="rgb(255, 165, 0)") {
		wordColor="orange";
	} else if (color=="rgb(238, 130, 238)") {
		wordColor="violet";
	} else {
		wordColor="green";
	}

	return wordColor;

}

/*function playAudio(num) {

	  var audioPlay =  document.createElement('audio');
	  audioPlay.setAttribute('src',audio[num]);

	  audioPlay.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
	}, false);
	audioPlay.play();
}*/

