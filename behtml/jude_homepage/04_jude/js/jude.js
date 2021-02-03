$(function(){
     $("#top .a").click(function(){
      $("#top .b").slideToggle();
     });
    });



    $(window).resize(function(){
      if(window.innerWidth>=1099){
        $('#top .b').show();
      }
    });



	function slideimg(){
			$('.slideimg').animate({left:-1000}, function(){
				$('.slideimg li:first').appendTo('.slideimg');
				$('.slideimg').css({left:0});
			})
		}
		setInterval(slideimg, 3000)