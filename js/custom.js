
$(document).ready(function () {
    
    //preloder
    $(".fakeloader").fakeLoader({

//Time in milliseconds for fakeLoader disappear
timeToHide:1500, 

//'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
spinner:"spinner1",//Options: 

//Background color. Hex, RGB or RGBA colors
bgColor:"#35649A",

});
    
    $(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
	
 	//animated fixed header   
    $(window).scroll(function () {
        "use strict";
        var scroll = $(window).scrollTop();
        if (scroll > 80) {
            $(".navbar-static-top").addClass("sticky");
        } else {
            $(".navbar-static-top").removeClass("sticky");
        }
    });
   
	
	 //scroll-up js
	 $(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').on("click", function () {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
    
    //Wow JS Active
    new WOW().init();
    
    
	
});


(function ($){
    "use strict";

        //home slider js /
     $(".homepage-slider").owlCarousel({
         items: 1,
         dots: true,
         nav: true,
         autoplay: true,
         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
         loop: true,
         animateOut: 'fadeOut'
      });
   

	
}(jQuery));

