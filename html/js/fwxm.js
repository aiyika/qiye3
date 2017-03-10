

//
$(function(){
	$(".guanyu ul li").click(function(){
		var index=$(".guanyu ul li").index(this);
		$(".guanyu ul li").removeClass("current").eq(index).addClass("current");
		$(".con_right_b").removeClass("current").eq(index).addClass("current");
	})
	var iUrl=location.href;
	var sI=iUrl.indexOf("div_id");
	if(sI!=-1){
		var nStr=iUrl.substring(sI);
		var div_id;
		if(nStr.indexOf(";")!=-1){
			div_id=nStr.substring(7,nStr.indexOf(";"));
		}else{
			div_id=nStr.substring(7)
		}
		if(div_id!=''){
			$(".guanyu ul li").removeClass("current").eq(div_id).addClass("current");
			$(".con_right_b").removeClass("current").eq(div_id).addClass("current");
		}
	}
})