require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'fad'    : 'fangda',
		'gongju' : 'instrument'
	}
})
require(['jquery','cookie','fangda','instrument'],function($,cookie,fad,gongju){
	$(function(){
		//放大镜
		$Oimg = $(".main3-b .main3-b-l .img");
		$Obigimg = $(".main3-b .main3-b-l .big")
		$Osmallimg = $(".main3-b .main3-b-l .small img");
		$Ospan = $(".main3-b .main3-b-l .small span")
//		console.log($Obigimg,$Osmallimg,$Ospan,$Oimg );
		$Osmallimg.each(function(index,value){
			$(value).mouseenter(function(){
				$Oimg.children("img").attr("src", $(this).attr("src"));
				$Osmallimg.each(function(index,value){
					$(value).css("border","1px solid #cccccc");
				})
				$(this).css("border","2px solid #ff6600");
			})
		})
		$index = 0;
		$Ospan.eq(0).click(function(){
			$index--;
			if($index <= -1){
				$index = 0;
			}
			$(this).prev().animate({left:-($Osmallimg.eq(0).outerWidth() + 6) * $index },1000)
		})
		$Ospan.eq(1).click(function(){
			$index++;
			if($index >= $Osmallimg.length- 4){
				$index = $Osmallimg.length - 4;
			}
			$(this).prev().prev().animate({left:-$Osmallimg.eq(0).outerWidth() * $index},1000)
		})
		$Oimg.mouseenter(function(){
			$(this).children("b").css("display","block");
				fad.tuo("ss");
				$Obigimg.css("display","block");
				$Obigimg.children("img").attr("src",$(this).children("img").attr("src"))
		})
		$Oimg.mouseleave(function(){
			$(this).children("b").css("display","none");
			$Obigimg.css("display","none");
		})
		//加入购物车的页面
		$Obtn = $(".main3-b-c .btn");
		$Oduan = $('.main3-b-c p:nth-of-type(2)>span');
		$Onum = $(".main3-b-c p:nth-of-type(3)>span");
		$Ospans = $(".main3-b-c p:nth-of-type(4)>input[type='button']");
		$Oduan.each(function(index,value){
			$(value).click(function(){
				$Oduan.each(function(index,value){
					$(value).css({'background':"#fff",'border':"2px solid #dddddd"})
				})
				$(this).css({'background':"url(dist/img/dui.png) no-repeat right bottom",'border':"2px solid #ff1d02"})
			})
		})
		$Onum.each(function(index,value){
			$(value).click(function(){
				$Onum.each(function(index,value){
					$(value).css({'background':"#fff",'border':"2px solid #dddddd"})
				})
				$(this).css({'background':"url(dist/img/dui.png) no-repeat right bottom",'border':"2px solid #ff1d02"})
			})
		})
		//按钮的点击事件
		$Ospans.eq(0).click(function(){
			let $num =  parseInt($(this).next().val());
			$num++;
			 parseInt($(this).next().val($num));
		})
		$Ospans.eq(1).click(function(){
			let $num2 = $(this).prev().val();
			if(parseInt($num2) == 1){
				$(this).prev().val(1);
			}else{
				$num2--;
				parseInt($(this).prev().val($num2));
			}
		})
		let $Oprice = $('.yin  b:first-child>u');
		$Obtn.click(function(){
			let id = $(".main3-b-c h4 b").html();
			let jiage = $Oprice.html();
			let shuliang = parseInt($Ospans.eq(1).prev().val())
			let wenzi =  $(".main3-b-c h4 a i").html();
			let img = $(".main3-b-l .img img").attr("src");
			let $cookie = $.cookie("shopping") ? $.cookie("shopping") : "";
			let str = convertCookieStrToCookieObj($cookie);
			if(id in str ){
				str[id].num = str[id].num + shuliang;
			}else{
				str[id] = {
					"jiage" : jiage,
					"num" : shuliang,
					"weizi" : wenzi,
					"img" : img 
				}
			}
			$.cookie("shopping",JSON.stringify(str),{expires :7,path:"/"});
			location.href = "gou.html";
		})
		function convertCookieStrToCookieObj(cookieStr){
			if(!cookieStr){
				return {};
			}
			return JSON.parse(cookieStr);
		}
		//侧边栏显示
		let $Oas = $("aside");
		let $Oaside = $("aside .you>span");
		gongju.kaiguan($Oas, $Oaside);
		//右边侧边栏的显示
		$Oca = $("aside .you>b a");		
		gongju.youshow($Oca);
		//亚马逊
		$Oh3 = $("#list .left>h3");
		$Oleft = $("#list");
		$Oul = $("#list .left>ul");
		$Oya = $("#list .left>ul>li");
		gongju.yamaxun($Oleft,$Oul,$Oya,$Oh3);
		let $arr2 = $("#list .conter a");
		var $xian = $("#list .conter>.xian");
		var $tt = $("#list .conter");
		gongju.hover($arr2,$xian,$tt);
		//右边侧边栏的购物车
		$cookie = JSON.parse($.cookie("shopping"));
		let ss = 0;
		$.each($cookie,function(index,value){
			ss  += $cookie[index].num;
		})
		let $Oasss = $("aside .hide");
		let $num = $("aside .you>span .num");
		$("aside .hide #xia").click(function(){
			location.href = "gou.html";
		})
		$cookie = JSON.parse($.cookie("shopping"));
		if(Boolean($cookie) == true){
			let ss = 0;
			let zong = 0;
			$.each($cookie,function(index,value){
				$Oasss.children("img").css({"display":"none"});
				$Oasss.children("p").css({"display":"none"});
				$Oasss.children("s").css({"display":"none"});
				$Oasss.children("span").css({"display":"block"});
				$Oasss.children("#xia").css({"display":"block"});
				$Oyin = $("<div class='yincang'></div>")
				let str = `
					<img src=${$cookie[index].img} alt="" />
					<p>${$cookie[index].weizi}</p>
					<b>
						<s>${$cookie[index].jiage}×</s>
						<i>${$cookie[index].num}</i>
					</b>`;
				$Oyin.html(str)
				ss  += $cookie[index].num;
				zong += ($cookie[index].num * $cookie[index].jiage.substring(1))
				$Oasss.children("span").after($Oyin);
			})
			$num.html(ss);
			$("aside .hide #xia p i b").html(ss);
			$("aside .hide #xia p s").html('￥'+zong);
			
		}
	
		
	})
})

















