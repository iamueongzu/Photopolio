//모니터 이미지 슬라이드
/*function slide1(){
    $('.slide_1').stop().animate({marginLeft:-864},800,function(){
        $('.slide_1 li:first').appendTo('.slide_1');
        $('.slide_1').css('margin-left',0);
    });
}
setInterval(slide1,3000); */

function slide2(){
	$('.slide2').stop().animate({marginLeft:-864},800,function(){
		$('.slide2 li:first').appendTo('.slide2');
		$('.slide2').css('margin-left',0);
	});
}
setInterval(slide2,3000);

function slide3(){
	$('.slide_3').stop().animate({marginTop:-567},500,function(){
		$('.slide_3 li:first').appendTo('.slide_3');
		$('.slide_3').css('margin-top',0);
	});
}
setInterval(slide3,2000);

function slide4(){
	$('.slide_4').stop().animate({marginTop:-567},500,function(){
		$('.slide_4 li:first').appendTo('.slide_4');
		$('.slide_4').css('margin-top',0);
	});
}
setInterval(slide4,2000);


//모니터화면 페이드
$(function(){
	$('.wrap_1').hide();
	$('.monitor').mouseover(function(){
		$(this).children('.wrap_1').stop().fadeIn('fast');
	}).mouseout(function(){
		$(this).children('.wrap_1').stop().fadeOut('fast');
	});
});