$.fn.puissance4 = function(x,y){
	
	var joueur1 ='yellow';
	var joueur2 ='red';
	var pion_plateau=[];
	var	tour = 0;
	var	count = 0;

$('#jeu').append('<table>');
    for (var i = 0; i < x; i++) {
        $('#jeu').append('<tr id="'+ i +'">');
        for (var s = 0; s < y; s++) {
	        $('#jeu').append('<td class="empty"><div id="'+ i +''+ s +'" class="buttons"></div></td>');
	    }
	    $('td[class]').append('</tr>');
	    
    }
    $('tr').append('</table>');

    var joueur = 0;
$('td').click(function() {
	
	console.log($(this).hasClass('empty'));
	if ($(this).hasClass('empty')) {

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