require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
	}
})
require(['jquery','cookie'],function($,cookie){
	$(function(){
		let $ran = $(".ran");
		$ran.html($rand());
		let $huan = $ran.next();
		$huan.click(function(){
			$ran.html($rand());
		})
		$ran.click(function(){
			$ran.html($rand());
		})
		function $rand(){
			let $str = "";
			for(let i = 0 ; i < 4 ; i++){
				$str += parseInt(Math.random() * 10 );
			}
			return $str;
		}
		let $strs = JSON.parse($.cookie("register"));
//		console.log($account);
		console.log( $strs);
		let $ture4 = '';
		let $Osubmit = $(".register-b .table  input[type='submit']");
		//验证
		$ran.prev().blur(function(){
			let $yz = $(this).next().html();
			if($(this).val() == $yz){
					$ture4 = true;
				}else{
					$(this).parent().next().html("验证码输入有误，请重新输入").css({"display":"block","color":"#ff6b52"})
			}
		})
		let  $Oname1 = $(".register-b .table #name");
		$Oname1.bind({
			input:function(){
				let $reg = /^[a-zA-Z]/;
				if($reg.test($(this).val())){
					$(this).val() == $(this).val("");
				}
			}
		})
		$Osubmit.click(function(){
			let $Oname = $(".register-b .table #name").val();
			let $Opsd = $(".register-b .table #pwd").val();
			for(key in $strs){
				if($Oname == $strs[key].name && $Opsd == $strs[key].psd && $ture4 == true){
					location.href = "index.html"
				}else{
					location.reload();
				}
			}
		})
	
	})
})