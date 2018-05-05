var squareColors = document.querySelectorAll(".square");
var colors = ["red","orange","yellow","blue","violet","green"];


//automatic load random colors 
$(function() {
	fillColors();
});

$(".square").on("click", function(){

	$(this).css("background","#ccd7ea");

})


//shuffle all Colors
function shuffleColor() {
    for (var i = colors.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
    }
}
function fillColors() {
	shuffleColor();
	for (var i = 0 ; i < colors.length ; i++ ){
		squareColors[i].style.background=colors[i];
	}

}
