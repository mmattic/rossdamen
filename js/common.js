$(document).ready(function(){ 
	
    //header
    if($(document).scrollTop() != 0) {
        $('.header').addClass('header-hover');
    }
    $(window).scroll(function() {
        if($(document).scrollTop() == 0) {
            $('.header').removeClass('header-hover');
        }else{
            if(!$('.header').hasClass('header-hover')){
                $('.header').addClass('header-hover');
            }
        }
    });
	
	//Mobile nav
	/*$(".btn-m-list").click(function(){
		$(".mask").show();
		$(this).addClass('on');
		$(".mob-nav").addClass('on');
	});
	$(".mask").click(function(){
		$(".mask").hide();
		$(".mob-nav").removeClass('on');
		$(".btn-m-list").removeClass('on');
	});
	$('.subbtn').click(function(){
	 if(!$(this).parent().hasClass('on')){
	  $(this).parent().addClass('on').find('.submenu').stop(true,true).slideDown(500);
	}else{
	  $(this).parent().removeClass('on').find('.submenu').stop(true,true).slideUp(500);
	 }
	});*/
	$(".btn-m-list").click(function(){
		//$(".mask").show();
		$(this).addClass('on');
		$(".neirong").addClass('neirong-show');
	});
	$(".neirong .neirong-close").click(function(){
		//$(".mask").hide();
		$(".neirong").removeClass('neirong-show');
		$(".btn-m-list").removeClass('on');
	});  
	
	//backtop
	$('.backtop').click(function(){$('html,body').animate({scrollTop: '0px'}, 1000);return false;});
	$('.sub-mouse').click(function(){$('html,body').animate({scrollTop: $(".bannerwarp").height()}, 1000);return false;});
		 
	//index CASE
    /*var Cli = $('.index-case ul li').length,
	    Sli = $('.index-ser ul li').length;
    for (var i=0; i<Cli; i++)
    {   
       if((i+1)%4==0){ 
	     $('.index-case ul li').eq(i).css({'margin-right':'0'});
	     $('.index-ser ul li').eq(i).css({'margin-right':'0'});
	   }
    }*/
		  
});//end ready
/*
$(function() {
   
   //Banner
   var WnHit = $(window).height();
   $('.bannerheight').height(WnHit);
   $('.bx-viewport').height(WnHit);
   
   //News
   var hotHit = $('.hottou .item').height();
   $('.hotbox .bg').height(hotHit);
   $(window).resize(function() {
	   //News
	   var hotHit = $('.hottou .item').height();
	   $('.hotbox .bg').height(hotHit);
	   
	   //Banner
	   var WnHit = $(window).height();
	   $('.bannerheight').height(WnHit);
	   $('.bx-viewport').height(WnHit);
	   
   })
   
})
*/