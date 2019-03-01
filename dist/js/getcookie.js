define(function(){
	return {
		cookie :function(name){
			  var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for(var i = 0; i < arrCookie.length; i++){
                var arr = arrCookie[i].split("=");
                if(name == arr[0]){
                    return arr[1];
                }
            }
		}
	}
})