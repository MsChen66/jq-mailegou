require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'gongju' : 'instrument'
		
	}
})	
require(['jquery','cookie','instrument'],function($,cookie,gongju){
	$(function(){
		//轮播
		$.getJSON("dist/json/particulars.json",function(data){
			let $Ouls = $(".main2-b-r .main2-b-r-t #lb>ul");
			let $str = '';
			$.each(data,function(index,value){
				let $Oli = $("<li></li>");
				 $str = `
					<img src=${data[index].img} alt="" />
					<p>${data[index].p}</p>
					<span>${data[index].span}</span>
					<b>
						价格
						<s>${data[index].s}</s>
					</b>
					<button class="qiang">立即抢购</button>
				 `;
				$Oli.html($str);
				$Ouls.append($Oli);
			})
			$Opaing = $(".main2-b-r-t .qiang");
			$Opaing.click(function(){
				location.href = "car.html";
			})
			let $Ospan = $(".main2-b-r-t>span");
			let $index = 0;
			let $Olis = $(".main2-b-r .main2-b-r-t #lb>ul>li").length;
			$Ospan.eq(0).click(function(){
				$index--;
				if($index <= -1){
					$index =  ($Olis / 4) -1 ;
				}
				$Ouls.animate({left:-$index * 900},500)
			})
			$Ospan.eq(1).click(function(){
				$index++;
				if($index >= ($Olis / 4) ){
					$index = 0;
				}
				$Ouls.animate({left:-$index * 900},500)
			})
			timer1 = setInterval(function(){
				$index++;
				if($index >= ($Olis / 4) ){
					$index = 0;
				}
				$Ouls.animate({left:-$index * 900},500)
			},5000)
			let $Olb = $(".main2-b-r .main2-b-r-t #lb");
			$Olb.hover(
				function(){
					clearInterval(timer1);
				},
				function(){
					timer1 = setInterval(function(){
						$index++;
						if($index >= ($Olis / 4) ){
							$index = 0;
						}
						$Ouls.animate({left:-$index * 900},500)
					},5000)
				}
			)
		})
		
		//亚马逊菜单
		$Oh3 = $("#list .left>h3");
		$Oleft = $("#list");
		$Oul = $("#list .left>ul");
		$Oya = $("#list .left>ul>li");
		gongju.yamaxun($Oleft,$Oul,$Oya,$Oh3);
		//折叠菜单的实现
		$Ofold = $(".main2-b-l-t .fold");
		$Oddi = $(".main2-b-l-t dl>dd>u>i");
		$true = 0;
		$Oddi.each(function(inex,value){
			$(value).click(function(){
				$Ofold.each(function(index,value){
					$(value).css("display","none");
				})
				if($true == 0){
					$(this).parent().next().css("display","block");
					$(this).css("background-position","0 0")
					$true = 1;
				}else{
					$(this).parent().next().css("display","none");
					$(this).css("background-position","0 -16px")
					$true = 0;
				}
			})
		})
		//获取数据
		$.getJSON('dist/json/list.json',function(data){
			$ste2 = ' ';
			$Oul2 = $(".main2-b-r-b>ul")
			$.each(data,function(index,value){
				$Oli = $("<li></li>");
				$ste2 = `
					<img src=${data[index].img} alt="" />
					<span>
						<b>${data[index].b}</b>
						<i>|</i>
						<s>单价：</s>
						<u>${data[index].u}</u>
					</span>
					<a href="#">
						<b>${data[index].ab}|</b>
						<i>${data[index].a}</i>
					</a>
					<s>
						<p>${data[index].sp}</p>
						<span>${data[index].span}</span>
					</s>
					<h4>
						<p class="btn">加入购物车</p>
						<span><i></i>收藏</span>
					</h4>
				`;
				$Oli.html($ste2);
				$Oul2.append($Oli);
			})
			$Obtn = $(".main2-b-r-b ul li .btn");
			
			$Obtn.each(function(index,value){
				$(value).click(function(){
					let $Oss = $(this).offset.top;
					let id = index+1;
					let $img = $(this).parent().parent().children("img").attr("Src");
					let $wenzi = $(this).parent().parent().children("a").children("i").html();
					let $jiage = $(this).parent().parent().children("span").children("u").html();
					let $shuliang = $(this).parent().children("span").children("b").html();
					let cookieStr = $.cookie('shopping') ? $.cookie('shopping') : '';
					let shopping = convertCookieStrToCookieObj(cookieStr);
					if(id in shopping ){
						shopping[id].num +=1;
					}else{
						shopping[id]={
							"img" : $img,
							"weizi":$wenzi,
							"jiage" : $jiage,
							"shuliang": $shuliang,
							"num" : 1
						}
					}
					$.cookie("shopping",JSON.stringify(shopping),{expires :7,path:"/"});
					let ss = $("aside .you>span .num").html();
					ss++;
					$("aside .you>span .num").html(ss);
					
					
				})
			})
			function convertCookieStrToCookieObj(cookieStr){
				if(!cookieStr){
					return {};
				}
				return JSON.parse(cookieStr);
			}
		})
		
		//侧边栏显示
		let $Oas = $("aside");
		let $Oaside = $("aside .you>span");
		gongju.kaiguan($Oas, $Oaside);
		//右边侧边栏的显示
		$Oca = $("aside .you>b a");		
		gongju.youshow($Oca);
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
