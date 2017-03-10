//通过点击跳转

$(function(){
$("#marquee #marquee1 p").click(function(){	
	var index=$("#marquee #marquee1 p").index(this);
	location.href="bjzs.html?div_id="+index;
})	

})

//

$(function(){
	$("#marquee ul li").click(function(){
		var index=$("#marquee ul li").index(this)+1;
		file="cs"+index+".txt";
			$.ajax({
				 type:"POST",
				 url:"getfile.php",
				 data:{name:file},
				 success:function(data,st){
					 
					$(".jieshao").html(data); 
				  }
				  
				})
	})

var iUrl=location.href;

var sI=iUrl.indexOf("div_id");//判断一下有木有ID
if(sI=-1){
	var nStr=iUrl.substring(sI);
	var div_id="";
	
	if(nStr.indexOf(";")!=-1){
		div_id=nStr.substring(7,nStr.indexOf(";"));
	}else{
		div_id=nStr.substring(7);
	}
	if(div_id!=""){
		div_id=parseInt(div_id);
		$(".guanyu ul li").removeClass("current").eq(div_id).addClass("current");
		div_id++;
		file="cs"+div_id+".txt";
		$.ajax({
			type:"POST",
			url:"getfile.php",
			data:{name:file},
			success:function(data,st){
				$(".jieshao").html(data);
			}
		});
	}
}
})