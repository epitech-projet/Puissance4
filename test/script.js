$(document).ready(function(){
	$("body").puissance4(3,4);	
});
$.fn.puissance4 = function(x,y){
$('#jeu').append('<div class="grid"></div>');
	$('.grid').css("width"(100*x)+10+"px");

	//je genere ma grille 

	for (var i = 1; i <= x ; i++) {
			$('.grid').append('<div class="raw"></div>');
			for (var j = 1; j <= y; j++) {
				$('.raw')append('<div class="cell" id="cell"></div>');
			}
		}	
};
