(function($){

    $.fn.extend({
         

        aniTag: function(options) {
			
			
			var defaults = {
			radius: 25,
			defaultradius: 0,
			enableTilt: true,
			tilt : 20,
			random : true, 
			randomMax : 25,
			colors: ['4AC7ED', 'FDC015', '9F78EC', 'F25C33']			
			};
			
			var options = $.extend(defaults,options);
 
            return this.each(function() {
				 
				var o = options;

				
				$(this).hover(function(){
				var randColor = Math.floor ( Math.random() * options.colors.length );
				$(this).css({background:'#'+ options.colors[randColor]});
				$(this).animate({'-webkit-border-radius':o.radius},200);
				if(o.enableTilt == true){

								if(o.random == true){ 
									var tilt=Math.floor(Math.random()*o.randomMax); 
									var x = Math.floor(Math.random()*2); 
								
									if(x == 0){
										$(this).css("-webkit-transform","rotate("+tilt+"deg)");
										$(this).css("-moz-transform","rotate("+tilt+"deg)");
									
									}
									if(x == 1){
										$(this).css("-webkit-transform","rotate(-"+tilt+"deg)");
										$(this).css("-moz-transform","rotate(-"+tilt+"deg)");
									
									}
								}else{
									$(this).css("-webkit-transform","rotate(-"+o.tilt+"deg)");
									$(this).css("-moz-transform","rotate(-"+o.tilt+"deg)");
								}
							}

				
				});
             
             
            });
        }
    });
     
})(jQuery);