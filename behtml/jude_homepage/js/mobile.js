//모바일 이미지 스크롤
$(function(){
	$('.section2 .phone').mouseover(function(){
    	$(this).find('.phonebox > img').stop().animate({marginTop:'-6300px'},17000);
	}).mouseleave(function(){
		$(this).find('.phonebox > img').stop().animate({margin:'0'},3000);
	});
});

$(function(){
	$('.section3 .phone').mouseover(function(){
    	$(this).find('.phonebox > img').stop().animate({marginTop:'-5485px'},16000);
	}).mouseleave(function(){
		$(this).find('.phonebox > img').stop().animate({margin:'0'},3000);
	});
});


//모바일 이동
$(function(){
	$('.section2 .site').mouseover(function(){
		$(this).find('.phone').stop().animate({marginLeft:-25},200);
	}).mouseleave(function(){
		$('.phone').stop().animate({marginLeft:0},200);
	});
});

$(function(){
	$('.section3 .site').mouseover(function(){
		$(this).find('.phone').stop().animate({marginRight:-25},200);
	}).mouseleave(function(){
		$('.phone').stop().animate({marginRight:0},200);
	});
});