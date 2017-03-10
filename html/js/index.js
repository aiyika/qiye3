//banner轮播
var screenType={w:0,h:0}
var user={};
user.now=0;
user.pic=["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
user.timer=null;
$(function(){
	screenType.w=$(window).width();
	if(screenType.w<1000){
		$("#banner").css("width","1000px");
		}else{
			$("#banner").css("width","100%");
			}	
			
	$(".ctrl ul li").click(function(){
		var index=$(".ctrl ul li").index(this);
		user.now=index;
		exe();
	})
		setV();
		
		$("#banner").mouseover(function(){
			clearInterval(user.time);
			}).mouseout(function(){
				setV();
			})
	})
		function setV(){
		user.time=setInterval(function(){
			user.now++;
			if(user.now>user.pic.length-1){
				user.now=0;
				}
				exe();
			},5000);
		}		

	function exe(){
			$(":animated").stop(true,true);
			$(".shang ul li").css({"background-image":"url("+user.pic[user.now]+")","opacity":"0"}).animate({"opacity":"1"},3000);
			$(".ctrl ul li").removeClass("on").eq(user.now).addClass("on");
			}
//

