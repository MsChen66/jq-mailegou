require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'gongju' : 'instrument'
	}
})	
require(['jquery','cookie','instrument'],function($,cookie,gongju){
	$(function(){
		//导航条的滑动事件
		let $arr2 = $(".conter .conter-t a");
		var $xian = $(".conter .conter-t>.xian");
		var $tt = $(".conter .conter-t");
		gongju.hover($arr2,$xian,$tt);
		
		let Ob = document.querySelectorAll(".set1 span b");
		let Ob2 = document.querySelectorAll(".set2 b");
		let sj1 = 0;
		let sj2 = 36;
		setInterval(function(){
			if(sj1 <=-36){
				sj1 = 0;
			}else{
				Ob[0].style.top = sj1 +'px';
				Ob[1].style.top = sj1 +'px';
				Ob[2].style.top = sj1 +'px';
				sj1--;
			}
			if(sj2 <= 0){
				sj2 = 36;
			}else{
				Ob2[0].style.top = sj2 +'px';
				Ob2[1].style.top = sj2 +'px';
				Ob2[2].style.top = sj2 +'px';
				sj2--;
			}
		},40)
		//banner下面的小图片轮
		let $Oimg = $(".conter-b ul li");
		let $index2 = 0 ;
		$Oimg.each(function(index,value){
			$(value).mouseover(function(){
				clearInterval(timer)
				$Oimg.each(function(index,value){
					$(value).css("top",0);
					
				})
				$(this).css("top",-10)
				$index2 = index;
			})
			$(value).mouseout(function(){
				timer = setInterval(function(){
					$Oimg.each(function(index,value){
						$(value).css("top",0);
					})
					if($index2 ==  $Oimg.length){
						$index2 = 0 
					}else{
						$Oimg.eq($index2).css("top",-10)
						$index2++;
					}				
				},2000)
				
			})
		})
		timer = setInterval(function(){
				$Oimg.each(function(index,value){
					$(value).css("top",0);
				})
				if($index2 ==  $Oimg.length){
					$index2 = 0 
				}
				$Oimg.eq($index2).css("top",-10)
				$index2++;
				
		},2000)
		//banner轮播加上背景图片的轮播
		let $index3 = 0;
		let $Olunbo = $(".conter-c .lunbo");
		let $Obanner = $("#banner");
		let $Olimg = $(".conter-c .lunbo img");
		setInterval(function(){
			$Olimg.each(function(index,value){
				$(value).css({"opacity":0,transform:"scale(1.2) "});
			})
			if($index3 >= $Olimg.length){
				$index3 = 0;
			}
			$Olimg.eq($index3).css({"opacity":100,transform:"scale(1.05)"});
			switch($index3){
				case 1 : $Obanner.css("background","rgb(254, 228, 229)"); break;
				case 2 : $Obanner.css("background","rgb(254, 226, 212)"); break;
				case 3 : $Obanner.css("background","rgb(131, 215, 238)"); break;
				case 4 : $Obanner.css("background","rgb(254, 222, 204)"); break;
			}
			$index3++;
		},2400)
		//亚马逊菜单
		$Olis = $(".bottom .left ul>li");
		$Olis.each(function(index,value){
			$(value).mouseenter(function(){
				$Olis.each(function(index,value){
					$(value).children(".yamaxun").css("display","none");
				})
				$(this).children(".yamaxun").animate({
					left : 180,
				},400)
				$(this).children(".yamaxun").css("display","block");
				$(this).css("background","#a90000");
				$(this).children("i").animate({"margin-left":10},1000)
				$(this).children("span").children("b").css("color","#fff");
			})
			$(value).mouseleave(function(){
				$(this).children(".yamaxun").animate({
					left : 170
				},100)
				$(this).children(".yamaxun").css("display","none");
				$(this).css("background","#cb3e25");
				$(this).children("i").css("margin-left","0")
				$(this).children("span").children("b").css("color","#eca598");
			})
		})
		//侧边栏显示
		let $Oas = $("aside");
		let $Oaside = $("aside .you>span");
		gongju.kaiguan($Oas, $Oaside)
		//猜你喜欢的轮播
		$Olove = $("#love");
		$Oloveu = $("#love ul");
		$Oloveleft = $("#love .loveleft");
		$Oloveright = $("#love .loveright");
		$index4 = 0;
		$Oloveleft.click(function(){
			$Oloveu.each(function(index,value){
				$(value).css("opacity",0);
			})
			if($index4 <= 0){
				$index4 =  $Oloveu.length;
			}
			$index4--;
			$Oloveu.eq($index4).css("opacity",100);
		})
		$Oloveright.click(function(){
			$Oloveu.each(function(index,value){
				$(value).css("opacity",0);
			})
			$index4++;
			if($index4 >= $Oloveu.length){
				$index4 =  0;
			}
			$Oloveu.eq($index4).css("opacity",100);
		})
		//锚点的轮播
		function $lunbo($Omli,$Omspan ){
			let $index5 = 0;
			$Omspan.eq(0).click(function(){
				$Omli.each(function(index,value){
					$(value).css("opacity",0);
				})
				
				if($index5 <= 0){
					$index5 = $Omli.length ;
				}
				$index5--;
				$Omli.eq($index5).css("opacity",100);
			})
			$Omspan.eq(1).click(function(){
				$Omli.each(function(index,value){
					$(value).css("opacity",0);
				})
				if($index5 >= $Omli.length){
					$index5 = 0 ;
				}
				$Omli.eq($index5).css("opacity",100);
				$index5++
			})
			timer2 = setInterval(function(){
				$Omli.each(function(index,value){
					$(value).css("opacity",0);
				})
				if($index5 >= $Omli.length){
					$index5 = 0 ;
				}
				$Omli.eq($index5).css("opacity",100);
				$index5++
			},2000)
			$Omli.mouseenter(function(){
				clearInterval(timer2);
			})
			$Omli.mouseleave(function(){
				timer2 = setInterval(function(){
				$Omli.each(function(index,value){
					$(value).css("opacity",0);
				})
				if($index5 >= $Omli.length){
					$index5 = 0 ;
				}
				$Omli.eq($index5).css("opacity",100);
					$index5++
				},2000)
			})
		}
		let $Omli1 = $("#foot-1 .dl ul li");
		let $Omspan1 = $("#foot-1 .dl span");
		$lunbo($Omli1,$Omspan1);
		let $Omli2 = $("#foot-2 .dl ul li");
		let $Omspan2 = $("#foot-2 .dl span");
		$lunbo($Omli2,$Omspan2);
		let $Omli3 = $("#foot-3 .dl ul li");
		let $Omspan3 = $("#foot-3 .dl span");
		$lunbo($Omli3,$Omspan3);
		let $Omli4 = $("#foot-4 .dl ul li");
		let $Omspan4 = $("#foot-4 .dl span");
		$lunbo($Omli4,$Omspan4);
		let $Omli5 = $("#foot-5 .dl ul li");
		let $Omspan5 = $("#foot-5 .dl span");
		$lunbo($Omli5,$Omspan5);
		let $Omli6 = $("#foot-6 .dl ul li");
		let $Omspan6 = $("#foot-6 .dl span");
		$lunbo($Omli6,$Omspan6);
		let $Omli7 = $("#foot-7 .dl ul li");
		let $Omspan7 = $("#foot-7 .dl span");
		$lunbo($Omli7,$Omspan7);
		let $Omli8 = $("#foot-8 .dl ul li");
		let $Omspan8 = $("#foot-8 .dl span");
		$lunbo($Omli8,$Omspan8);
		let $Omli9 = $("#foot-9 .dl ul li");
		let $Omspan9 = $("#foot-9 .dl span");
		$lunbo($Omli9,$Omspan9);
		//晒单区的轮播
		let $Oshai = $(".shai");
		let $Oshaiul = $(".shai ul");
		let $index6 = 0;
		setInterval(function(){			
			if($index6 >= $Oshaiul.children("li").length /2 ){
				$index6 = 0;
			}
			$Oshaiul.css("left",-($index6  * 230) );
			$index6++;
		},1000)
		//时间戳
		$Osjc = $(".special ul li u span b");
		setInterval(function(){
			$Osjc.each(function(index,value){
			let $data1 = new Date();
			let $data2 = new Date("2020/11/11")
			var ss = $data2 - $data1;
			var 
				tian = parseInt(ss / (24 * 60 * 60 * 1000)),
		 		xiaoshi = parseInt(ss % (24 * 60 * 60 * 1000) /(60 * 60 * 1000)),
		 		fenzhong = parseInt(ss % (24 * 60 * 60 * 1000) %(60 * 60 * 1000) /(60 *1000)),
		 		miao = parseInt(ss % (24 * 60 * 60 * 1000) %(60 * 60 * 1000) % (60 *1000) / 1000);
		 		let $str = "剩余:" + tian + "天" + xiaoshi + "小时" + fenzhong + "分钟" + miao + "秒";
		 		$(value).html($str);
		 		
			})
		},1000)
		//头部的关闭事件
		$Ospan = $(".CPP span");
		$Ospan.click(function(){
			$(this).parent().parent().remove();
		})
		//右边侧边栏的显示
		$Oca = $("aside .you>b a");		
		 gongju.youshow($Oca);
		//楼梯效果
		let $Ozaside = $("#aside");
		let $Osrc = $("#src");
		let $Oa = $("#aside .zuo a");
		let $Omao = $("main .yangshi");
		//实现楼梯滚动
		$Oa.each(function(index,value){
			$(value).click(function(){
				let $index6 = $(this).index();
				let $top = $(".yangshi").eq($index6).offset().top ;
				$("body,html").animate({"scrollTop": $top - 50}, 500)
				$(this).children("span").css("display","block");
			})
		})
		//鼠标滑过事件
		$Oa.hover(function(){
			$(this).children("i").css("display","none");
			$(this).children("span").css("display","block");
		},function(){
			$(this).children("i").css("display","block");
			$(this).children("span").css("display","none");
		})
		//监听滚动高度事件
		$(window).scroll(function(){
			let $t = $(this).scrollTop();
			if($t >= 3000){
				$Ozaside.fadeIn();
			}else{
				$Ozaside.fadeOut();
			}
			if($t >= 2000){
				$Osrc.fadeIn();
			}else{
				$Osrc.fadeOut();
			}
		})
		//右边侧边栏
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
