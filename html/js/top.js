window.onload=function(){
	var speed=40;//数字越大滚得越慢
    var marquee=document.getElementById("marquee"); 
	var marquee2=document.getElementById("marquee2"); 
	var marquee1=document.getElementById("marquee1"); 
	marquee2.innerHTML=marquee1.innerHTML //克隆2为1
	function Marquee(){ 
		if(marquee2.offsetHeight-marquee.scrollTop<=0) 
  			marquee.scrollTop-=marquee1.offsetHeight 
		else{ 
  			marquee.scrollTop++ 
			} 
	} 
	var MyMar=setInterval(Marquee,speed) //设置定时器
	marquee.onmouseover=function() {clearInterval(MyMar)} //鼠标经过时清除定时器达到滚动停止的目的
	marquee.onmouseout=function() {MyMar=setInterval(Marquee,speed)} //鼠标移开时重设定时器
	
}
	

