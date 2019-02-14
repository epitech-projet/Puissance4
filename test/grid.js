$(document).ready(function(x,y){
	var x = 6;
	var y =7;
$('#jeu').append('<table>');
    for (var i = 0; i < x; i++) {
        $('#jeu').append('<tr id="'+ i +'">');
        for (var s = 0; s < y; s++) {
	        $('#jeu').append('<td><div id="'+ i +''+ s +'" class="buttons"></div></td>');
	    }
	    $('div').append('</tr>');
	    
    }
    $('tr').append('</table>');
    var joueur = 0;
$('td').click(function() {
	joueur++;
	if (joueur %2 == 0) {
		$(this).css({background:'red'});
	}else{
		$(this).css({background:'yellow'});
	}

	$(this).css({left:'250px', with:'+=150px'},1);

	});
	/*$.fn.puissance4 = function(options) {
        var settings = $.extend({
            buttons: ["0", "1", "2", "3", "4", "5", "6"]
        }, options );

        var colors = [ 'red','yellow']
        $each(settings.buttons,function(index , value ){
	$('.buttons').
        })
*/
        
 
});





/*$(document).ready(function(){
	var hey ="HELLO";
	function sayhello(){
		console.log('say hello');
	}

	for(var i=3;i<20 ; i++){
		console.log(i);
	}
*/
/*let monTitre = document.querySelector('h1');
monTitre.textContent = 'Marjorie';
});*/