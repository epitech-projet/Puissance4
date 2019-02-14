$(function($) {
	$.fn.puissance4 = function(options) {
        var settings = $.extend({
            buttons: ["0", "1", "2", "3", "4", "5", "6"]
        }, options );

        var colors = [ 'red','yellow']
        $each(settings.buttons,function(index , value ){
	$('.buttons').click(function(){
		joueur++;
	if (joueur %2 == 0) {
		$(this).css({background:'red'});
	}else{
		$(this).css({background:'yellow'});
	}

	$(this).css({left:'250px', with:'+=150px'},1);

	});
});