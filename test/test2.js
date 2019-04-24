$.fn.puissance4 = function(x,y){
	
	var joueur1 ='yellow';
	var joueur2 ='red';
	var pion_plateau=[];
	var	tour = 0;
	var	count = 0;

$('#jeu').append('<table>');
    for (var i = 0; i < x; i++) {
        $('table').append('<tr id="'+ i +'">');
        for (var s = 0; s < y; s++) {
	        $('tr:last').append('<td class="empty" id="bbb" ></td>');
	    }    
    }
    

    /*var joueur = 0;
    function first(s){
    	var cells = $('#bbb');
    	console.log(cells);
    	for (var p = cells.length - 1; p >= 0; p--) {
    		let cell = cells[p];
    		if(cells.hasClass('empty')) {
    			return cells;
    		}
    	}
    }*/
var vide = $('.empty');
$('td').click(function(vide) {
	
	console.log($(this).hasClass('empty'));
	if (first(this)) {

		if (joueur %2 == 0) {
			$(this).css('background-color',joueur1);
			$(this).removeClass('empty').addClass(joueur1);
			

		}else{
			$(this).css('background-color',joueur2);
			$(this).removeClass('empty').addClass(joueur2);
			

		}
		joueur++;
	}else{
		console.log('bad');
	}

	$(this).css({left:'250px', with:'+=150px'},1);

	
	});
};