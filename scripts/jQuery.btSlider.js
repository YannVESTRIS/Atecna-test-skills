(function($){
     $.fn.btSlider = function(options) {
        // settings
        var settings = $.extend({
        	'interval':3000,//control the speed of the slide
        	'controls':true //enable the prev & next control button
    	}, options||{});

     	return this.each(function(){
     		var $slide_items = $(this).find('.items');//slide list
     		var $nav_pointer = $(this).find('.pagination li');
	    	var slide_len = $nav_pointer.length;
	    	var playTimer = null;
	    	var index = 0;//the index of img

	    	if(settings.controls===true){
				//prev、next button process opacity when mouse hover
				$(this).find('.preNext').css('opacity',0.9).hover(function() { //0.2
					$(this).stop(true,false).animate({'opacity':'0.5'},300); //0.5
				},function() {
					$(this).stop(true,false).animate({'opacity':'0.9'},300); //0.2
				});

				//prev button
				$(this).find('.pre').click(function() {
					clearInterval(playTimer);
					index -= 1;
					if(index === -1) {index = slide_len - 1;}
					showImg(index);
				});

				//next button
				$(this).find('.next').click(function() {
					clearInterval(playTimer);
					index += 1;
					if(index == slide_len) {index = 0;}
					showImg(index);
				});
	    	}
	    	else{
	    		$(this).find('.preNext').hide();
	    	}
	    	//navigate to one image
		    $nav_pointer.mouseover(function(){
		       index =  $nav_pointer.index(this);
		       showImg(index);
		    });

		    //mouse hover the slideshow
		    $(this).hover(function(){
		         if(playTimer){
		         clearInterval(playTimer);
		         }
		    },function(){
		         playTimer = setInterval(function(){
		           showImg(index)
		         index++;
		         if(index === slide_len){index = 0;}
		         } , settings.interval);
		    });

		    // loop
		    var playTimer = setInterval(function(){
		       showImg(index)
		       index++;
		       if(index===slide_len){index=0;}
		    } , settings.interval);

			function showImg(i){
			   // fade in/out
			   $slide_items.stop(true,false).find('li').eq(i).fadeIn(400).siblings().fadeOut();
			   // change the nav of the images when the image changed
			   $nav_pointer.eq(i).addClass('active').siblings().removeClass('active');
			} 
     	});
     };
})(jQuery);