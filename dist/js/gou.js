require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
		'gongju' : 'instrument'
	}
})
require(['jquery','cookie','instrument'],function($,cookie,gongju){
	$(function(){
		let $cookie = (JSON.parse($.cookie("shopping")));
		let $Otable = $("#car table");
		$.each($cookie,function(index,value){
			let jiage = parseFloat($cookie[index].jiage.substring(1));
			let	$Otr = $("<tr class='tex'></tr>");
			$str = `
				<td>
					<input type="checkbox" class="te" />
					<img src=${$cookie[index].img}  class="img"/>
					<p>${$cookie[index].weizi}</p>
				</td>
				<td>
					<b>${$cookie[index].jiage}</b>
				</td>
				<td>
					<input type="button" value="-" class="jian" />
					<input type="text" value='${$cookie[index].num} ' class="num"/>
					<input type="button" value="+" class="jia" />
				</td>
				<td>
					<i class="jiage">￥${$cookie[index].num* jiage}</i>
				</td>
				<td>
					<a href="javescript:;" class="del">删除</a>
				</td>
			`;
			$Otr.html($str);
			$Otable.append($Otr);
		})
		//减
		
		let $Ojian = $("#car table .jian");
		$Ojian.click(function(){
			var num1 = $(this).next().val();
			if(num1 == 1){
				num1 = 1;
			}else{
				num1--;
			}
			$(this).next().val(num1);
			let $jiage = $(this).parent().prev().children("b").html().substring(1);
			let $num = $(this).next().val();
			$(this).parent().next().children("i").html('￥' + ( $jiage* $num));
			//设置总价跟随点击事件
			let $zong = 0;
			$.each($arr,function(index,value){
				$zong += 1*($($arr[index]).html().substring(1));
			})
			$("#car .zong").html('￥'+ $zong)	
			//加入cookie
			let $Oimg3 = $(this).parent().parent().children().children(".img").attr("src");
			let shopping =(JSON.parse($.cookie("shopping")));
			for(key in shopping){
				if(shopping[key].img == $Oimg3){
					shopping[key].num--;
				}
			}
			console.log(shopping[key].num);
			$.cookie("shopping",JSON.stringify(shopping),{expires :7,path:"/"});
		})
		let $Ojia = $("#car table .jia");
		$Ojia.click(function(){
			var num2 = $(this).prev().val();
			num2++;
			 $(this).prev().val(num2);
			 let $jiage = $(this).parent().prev().children("b").html().substring(1);
			 let $num = $(this).prev().val();
			 $(this).parent().next().children("i").html('￥' + ($jiage * $num ));
			let $zong = 0;
			$.each($arr,function(index,value){
				$zong += 1*($($arr[index]).html().substring(1));
			})
			$("#car .zong").html('￥'+ $zong)	
			//加入cookie
			let $Oimg3 = $(this).parent().parent().children().children(".img").attr("src");
			let shopping =(JSON.parse($.cookie("shopping")));
			for(key in shopping){
				if(shopping[key].img == $Oimg3){
					shopping[key].num++;
				}
			}
			console.log(shopping[key].num);
			$.cookie("shopping",JSON.stringify(shopping),{expires :7,path:"/"});
		})
		//删除单个
		let $Odel = $("#car table .del");
		$Oclick = $(".click");
		$Obtn = $(".click .show button");
		$true = "";
		let id = '';
		$Odel.each(function(index,value){
			$Odel.click(function(){
				$Oclick.fadeIn();
				let $Oimg2 = $(this).parent().parent().children().children(".img").attr("src")
				$Obtn.each(function(index,value){
					$(this).click(function(){
						$true = $(this).attr("class");
						if($true == 'yes'){
							let shopping = JSON.parse($.cookie("shopping"));
							for(key in shopping){
								if(shopping[key].img == $Oimg2){
									delete shopping[key];
								}
							}
							$.cookie("shopping",JSON.stringify(shopping),{expires :7,path:"/"});
							if($(".s b .u").html() == 1){
								$("#car table ").css({"display":"none"});
								$("#car .p").css({"display":"none"});
								$("#car .s").css({"display":"none"});
								$Oimg = $("<img src='dist/img/carEmpty.png' />");
								$Oimg.css({"display":"block","margin":"30px auto"});
								$Oclick.css({"display":"none"});
								$("#car .margin3").append($Oimg);
							}else{
								location.reload();
							}
								
						}else{
							$Oclick.css({"display":"none"});
						}
					})
					
				})
			})
		})
		//总价
		let $arr = $("#car table .jiage");
		$(".s b .u").html($("#car table .num").length) ;
		let $zong = 0;
		$.each($arr,function(index,value){
			$zong += 1*($($arr[index]).html().substring(1));
		})
		$("#car .zong").html('￥'+ $zong)	
		//全选按钮
		let $Ocheck = $("#car input[type='checkbox']");
			$Ocheck.each(function(index,value){
				$(value).attr("checked","checked");
			})
			$Ocheck.eq(0).click(function(){
				if(($Ocheck.eq(0).prop('checked') == true)){
					$Ocheck.each(function(index,value){
						$(value).attr("checked","checked");
					})
				}else{
					$Ocheck.each(function(index,value){
						$(value).removeAttr("checked");
					})
					$("#car .zong").html(0.00)	
				}
			})
			//表格内的单行
			let $input = $("#car .te");
			if(($Ocheck.eq(5).prop('checked') == true)){
				$Ocheck.each(function(index,value){
					$(value).attr("checked","checked");
				})
				$input.each(function(index,value){
					$(value).click(function(){
						if($(value).prop('checked') == false){
						let $zongjia = $("#car .zong").html().substring(1);
						let $num1 = $(this).parent().next().next().next().children("i").html().substring(1);
						$zongjia -= $num1
						$("#car .zong").html('￥' + $zongjia);
						}else{
							let $zongjia = $("#car .zong").html().substring(1);
							let $num2 = $(this).parent().next().next().next().children("i").html().substring(1);
							$zongjia  = $zongjia*1 +  $num2 * 1;
							$("#car .zong").html('￥' + $zongjia);
						}
					})
				})
			}else{
				$Ocheck.each(function(index,value){
					$(value).removeAttr("checked");
				})
				$("#car .zong").html(0.00)	
				$input.each(function(index,value){
					$true = '$true' + index + "=" + 0;
					$(value).click(function(){
						if($(value).prop('checked') == true){
						let $zongjia = $("#car .zong").html().substring(1);
						let $num2 = $(this).parent().next().next().next().children("i").html().substring(1);
						$zongjia  = $zongjia*1 +  $num2 * 1;
						$("#car .zong").html('￥' + $zongjia);
						}else{
							let $zongjia = $("#car .zong").html().substring(1);
							let $num1 = $(this).parent().next().next().next().children("i").html().substring(1);
							$zongjia -= $num1
							$("#car .zong").html('￥' + $zongjia);
						}
					})
				})
			}
			//轮播 
		$Olun = $(".huan #lunbotu ul");
		$.getJSON("dist/json/gou.json",function(data){
			$.each(data,function(index,value){
				let $Oli = $('<li></li>');
				let $str =`
					<img src=${data[index].img} alt="" />
					<h3>满112立减42元</h3>
					<a href="#">${data[index].a}</a>
					<span>
						<s>
							<i>${data[index].spansi}</i>
							<b>价格:${data[index].b}</b>
						</s>
						<i>
							<b>${data[index].ib}</b>
							<button>加入购物车</button>
						</i>
					</span>
				`;
				$Oli.html($str);
				$Olun.append($Oli);
			})
			$Ospan = $(".ul>span");
			$Oul = $("#lunbotu ul");
			$Olis = $("#lunbotu ul li");
			gongju.carousel($Ospan.eq(0),$Ospan.eq(1),$Oul,$Olis.length);
			//单个删除
			$(".s .shan").click(function(){
				let ss = $.cookie("shopping")
				$.cookie("shopping",JSON.stringify(ss),{expires :-7,path:"/"});
				$("#car table ").css({"display":"none"});
				$("#car .p").css({"display":"none"});
				$("#car .s").css({"display":"none"});
				$Oimg = $("<img src='dist/img/carEmpty.png' />");
				$Oimg.css({"display":"block","margin":"30px auto"});
				$("#car .margin3").append($Oimg);
				$Oclick.css({"display":"none"});
			})
			//判断表格内是否有数据如果没有数据则显示图片
			if($(".s b .u").html() == 0){
				$("#car table ").css({"display":"none"});
				$("#car .p").css({"display":"none"});
				$("#car .s").css({"display":"none"});
				$Oimg = $("<img src='dist/img/carEmpty.png' />");
				$Oimg.css({"display":"block","margin":"30px auto"});
				$("#car .margin3").append($Oimg);
			}
		})
	})
})
