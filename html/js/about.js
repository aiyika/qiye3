$(function(){
	$(".guanyu ul li").click(function(){
		var index=$(".guanyu ul li").index(this);
		$(".guanyu ul li").removeClass("current").eq(index).addClass("current");
		$(".con_right_a").removeClass("current").eq(index).addClass("current");
	})
})