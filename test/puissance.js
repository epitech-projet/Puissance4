$(document).ready(function(){
	var puissance4 ={
	grille : [],
	turn: 1,
	game_status:0,
	coups:0,
	x:7,
	y:6,

	init: function(parent, lignes, colonnes){
		if (lignes) this.n = lignes;
		if (colonnes) this {}
	}


	}

});



/*$('#jeu').show(function() {
	$('<td></td>').css({left:'250px', with:'+=150px'},1).css({opacity:'0.25'},1);

})*/


















	/*$('body').append('<div class="marj"></div>');
	for (var k = 1; k <= 35; k++) {
		$('.marj').append('<p>cccc</p>');
		
	}
	$.fn.puissance4 = function(x,y){
	$('body').append('<div class="grid"></div>');
	$('.grid').css("width"(100*x)+10+"px");
		for (var i = 1; i <= x; i++) {
			$('.grid').append('<div class="raw"></div>');
			for (var j = 1; j <= y; j++) {
				$('.raw')append('<div class="cell" id="cell"></div>');
			}
		}
};

	/*$("body").puissance4(3,4);	
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
		}*/	
};
