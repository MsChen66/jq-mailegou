define(function(){
	return {
		tuo : function(id){
			var $ele = $('#' + id);
			$ele.mousemove(function(evt){
				var disX = evt.pageX - $(this).offset().left -$(this).children("b").width()/2;
				var disY = evt.pageY - $(this).offset().top - $(this).children("b").height()/2;
				if(disX <= 0){
					disX = 0;
				}else if(disX >= $(this).width() - $(this).children("b").width()){
					disX = $(this).width() - $(this).children("b").width();
				}
				if(disY <= 0){
					disY = 0;
				}else if(disY >= $(this).height() - $(this).children("b").height()){
					disY = $(this).height() - $(this).children("b").height();
				}
				$(this).children("b").css({left:disX,top:disY})
				$(this).next().next(".big").children("img").css({left:-2*disX,top:-2*disY})
			})
		}
	}
})