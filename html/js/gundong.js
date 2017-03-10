
//
//	function move(){//横行滚动函数
//		iLeft--;
//		if(iLeft<=-1896){//li的宽度加上margin值*个数就是走完的个数，然后归0，复制的一份是一个ul的然后接上，就形成循环
//			iLeft=0;
//		}
//		oNei.style.left=iLeft+"px";
//	}
$(function(){
	//横行滚动
var speed=20;
var tab=document.getElementById("tab");
var tab1=document.getElementById("tab1");
var tab2=document.getElementById("tab2");
tab2.innerHTML=tab1.innerHTML;
function Marquee3(){
	
if(tab2.offsetWidth-tab.scrollLeft<=0)
tab.scrollLeft-=tab1.offsetWidth
else{
tab.scrollLeft++;
 
}
}
var MyMar3=setInterval(Marquee3,speed);
tab.onmouseover=function() {clearInterval(MyMar3)};
tab.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)};

	
	//为服务项目添加事件，打开页面fwxm.html在地址后加入div_id.
	$(".main_er ul li").click(function(){
		var index=$(".main_er ul li").index(this);
		location.href="server.html?div_id="+index;
	})
	
	//为服务项目添加事件，打开页面fwxm.html在地址后加入div_id.
	$("#marquee #marquee1 p").click(function(){
		var index=$("#marquee #marquee1 p").index(this);
		location.href="bjzs.html?div_id="+index;
	})
})


