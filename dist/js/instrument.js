define(function(){
	return{
		 carousel:function(leftspan,rightspan,ele,lilength){
		 	var index = 0;
		 	leftspan.click(function(){
		 		index--;
		 		if(index == -1){
		 			index = lilength / 4 - 1;
		 		}
		 		ele.css({left:-index*940});
		 	})
		 	rightspan.click(function(){
		 		if(index >= lilength / 4 -1){
		 			index = 0;
		 		}else{
		 			index++;
		 		}
		 		ele.css({left:-index*940});
		 		console.log(ele.css("left"))
		 	})
		 },
		 kaiguan:function ta($Oas, $Oaside){
			let $str = 0;
			$Oaside.click(function(){
				if($str == 0){
					$Oas.css("right",0)
					$str = 1;
				}else{
					$str = 0;
					$Oas.css("right",-280)
				}	
			})
		},
		youshow: function(ele){
			ele.each(function(index,value){
				$(value).mouseover(function(){
					ele.each(function(index,value){
						$(value).next().css("display","none");
					})
					$(this).next().css("display","block");
				})
				$(value).mouseout(function(){
					$(this).next().css("display","none");
				})
			})
		},
		yamaxun: function($Oleft,$Oul,$Oya,$Oh3){
				$Oleft.delegate('h3','mouseover',function(){
				$(this).children("i").css("background-position","0 0");
				$Oul.css("display","block");	
				$Oya.each(function(index,value){
					$(value).mouseover(function(){
						$(this).children("i").css("margin-left",10)
						$(this).children(".yamaxun").css("display","block");
						$(this).children(".yamaxun").css("left",180);
					})
					$(value).mouseout(function(){
						$(this).children("i").css("margin-left",0)
						$(this).children(".yamaxun").css("left",175);
						$(this).children(".yamaxun").css("display",'none');
					})
				})
				$Oleft.delegate('ul','mouseleave',function(){
					$Oh3.children("i").css("background-position",'0 -11px');
					$Oul.css("display","none");	
				})
			})
		},
		hover : function($arr2,$xian,$tt){
				$arr2.each(function(index,value){
				$arr2.eq(0).mouseenter(function(){
					$xian.css({width:$(this).width(),left:12});
				
				})
				$arr2.eq(1).mouseenter(function(){
					$xian.css({width:$(this).width(),left:68});
				
				})
				$arr2.eq(2).mouseenter(function(){
					$xian.css({width:$(this).width(),left:154});
				
				})
				$arr2.eq(3).mouseenter(function(){
					$xian.css({width:$(this).width(),left:252});
				
				})
				$arr2.eq(4).mouseenter(function(){
					$xian.css({width:$(this).width(),left:340});
				
				})
				$arr2.eq(5).mouseenter(function(){
					$xian.css({width:$(this).width(),left:429});
				
				})
				$arr2.eq(6).mouseenter(function(){
					$xian.css({width:$(this).width(),left:517});
				
				})
				$arr2.eq(7).mouseenter(function(){
					$xian.css({width:$(this).width(),left:600});
				
				})
				$arr2.eq(8).mouseenter(function(){
					$xian.css({width:$(this).width(),left:677});
				
				})
			})
			$tt.mouseleave(function(){
			 	$xian.css({left:12,width:32})
			})
		}	
	}
})