var about_scroll = $(".about_scroll").offset().top;
var projects_scroll = $(".projects_scroll").offset().top;
var hire_scroll = $(".hire_scroll").offset().top;
var contact_scroll = $(".contact_scroll").offset().top;

var interval = setInterval(function() {
    if ($(window).scrollTop() < projects_scroll) {
        $(".about_button").addClass("underline");
        $(".projects_button").removeClass("underline");
        $(".hire_button").removeClass("underline");
        $(".contact_button").removeClass("underline");
        // interval();
    }
    else if ($(window).scrollTop() >= projects_scroll && $(window).scrollTop() < hire_scroll) {
        $(".about_button").removeClass("underline");
        $(".projects_button").addClass("underline");
        $(".hire_button").removeClass("underline");
        $(".contact_button").removeClass("underline");
        // interval();
    }
    else if ($(window).scrollTop() >= hire_scroll && $(window).scrollTop() < contact_scroll) {
        $(".about_button").removeClass("underline");
        $(".projects_button").removeClass("underline");
        $(".hire_button").addClass("underline");
        $(".contact_button").removeClass("underline");
        // interval();
    }
    else if ($(window).scrollTop() >= contact_scroll) {
        $(".about_button").removeClass("underline");
        $(".projects_button").removeClass("underline");
        $(".hire_button").removeClass("underline");
        $(".contact_button").addClass("underline");
        // interval();
    }
}, 250);


$(document).ready(function () {
	$(".a").mouseenter(function () {
		$(this).addClass("underline_two");
	});
	$(".a").mouseleave(function () {
		$(this).removeClass("underline_two");
	});
});

$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });