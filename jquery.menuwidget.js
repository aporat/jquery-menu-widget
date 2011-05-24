
(function($){  
    $.fn.menuWidget = function(options) {  
     
     var defaults = {  
      effect: 'slide',
      width: 180
     };  
     var options = $.extend(defaults, options);  
         
     return this.each(function() {  
  	   obj = $(this);  

		obj.children("ul").children("li").hover(function(){
			if(options.effect=='slide') { 
				$(this).children("ul").slideDown(100);
         	 } else {
       		$(this).children("ul").show();
       		}
      	}, function() {
          if(options.effect=='slide'){
        	  $(this).children("ul").slideUp(100);
           } else {
              $(this).children("ul").hide();            
           }
     	 });
     
	     obj.children("ul").children("li").children("ul").children("li").hover(function(){
	 	   	 $(this).css("background-color", "#FEF9D9");
	 	    },function(){
	 	   	 $(this).css("background-color", "white");
	 	 });

	     obj.children("ul").children("li").children("ul").children("li").click(function() {
		     $(this).parent().hide();
	     });
	
	     obj.children("ul").children("li").width(options.width);
	     obj.children("ul").children("li").children("ul").children("li").width(options.width);
	     
	     obj.children("ul").children("li").children("ul").children("li").children("a").css("line-height",1);
	     obj.children("ul").children("li").children("ul").children("li").children("a").css("text-decoration", "none");	    
	 }
    );};  
})
(jQuery); 