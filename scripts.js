// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(document).ready(function(){
    $('#la_module, this').hover(
           function(){ $(this).children(".details").addClass('opacity-in') },
           function(){ $(this).children(".details").removeClass('opacity-in') }
    )

    
    
    
	$(".slideshow > div:gt(0)").hide();
	
	$("#indicator-01").click(
		   function () {
			   $(this).addClass('indicator_active');
			   $('#indicator-02').removeClass('indicator_active');
			   $("#slide-01").show();
			   $("#slide-img-01").show();
			   $("#slide-02").hide();
			   $("#slide-img-02").hide();
		   }
	   );
	$("#indicator-02").click(
		   function () {
			   $(this).addClass('indicator_active');
			   $('#indicator-01').removeClass('indicator_active');
			   $("#slide-02").show();
			   $("#slide-img-02").show();
			   $("#slide-01").hide();
			   $("#slide-img-01").hide();
		   }
	   );
    
    
});

