(function(a){a(document).ready(function(){a(".portfolio-carousel").owlCarousel({loop:true,responsive:{0:{items:1},768:{items:1},991:{items:1},1200:{items:1},1920:{items:1}}});a(".testimonial-carousel").owlCarousel({loop:true,margin:20,responsive:{0:{items:1},768:{items:2},991:{items:2},1200:{items:2},1920:{items:2}}});a("#circle-1").circleProgress({value:0.85,size:100,fill:{color:"#130f40"}});a("#circle-2").circleProgress({value:0.95,fill:{color:"#130f40"}});a("#circle-3").circleProgress({value:0.9,fill:{color:"#130f40"}});a(".counter-single h3").counterUp({delay:10,time:1000});a.scrollIt();a('a[href*="#"]:not([href="#"]):not([data-toggle])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);b=b.length?b:a("[name="+this.hash.slice(1)+"]");if(b.length){a("html, body").animate({scrollTop:b.offset().top},1000);return false}}})});a(window).on("scroll",function(){var b=a(window).scrollTop();if(b<100){a("#header").removeClass("sticky")}else{a("#header").addClass("sticky")}});a(window).on("load",function(){a(".preloader").fadeOut(500)})}(jQuery));