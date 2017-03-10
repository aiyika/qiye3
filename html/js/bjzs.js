

$(function(){
$(".guanyu ul li").click(function(){
	var index=$(".guanyu ul li").index(this)+1;
	file="cs"+index+".txt";
			$.ajax({
				 type:"POST",
				 url:"getfile.php",
				 data:{name:file},
				 success:function(data,st){
					 
					$(".jieshao_right").html(data); 
				  }
				  
				  })
	
	
	
	
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
			div_id=parseInt(div_id)+1;
			file="cs"+div_id+".txt";
			$.ajax({
				 type:"POST",
				 url:"getfile.php",
				 data:{name:file},
				 success:function(data,st){
					 
					$(".jieshao_right").html(data); 
				  }
				  
				  })
	
	
		}
	}

})
