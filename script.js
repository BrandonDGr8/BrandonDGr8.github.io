$(document).ready(function(){
	$("#menuButton").click(function(){
		$("#menuButton").hide();
		$("#closeButton").show("fast");
		$("#navS").fadeTo("fast", 1);
	});
	$("#closeButton").click(function(){
		$(this).hide("fast");
		$("#menuButton").show();
		$("#navS").fadeTo("fast", 0);
		$("#navS").hide("fast");
	});
	$(".button").click(function(){
		$("#closeButton").hide("fast");
		$("#menuButton").show();
		$("#navS").fadeTo("fast", 0);
		$("#navS").hide("fast");
	});
	//cycles through the hackathon photos
	var intervalID;
	function picLoops() { 
		var backImg = $('.hack-logos img:first-child');
		backImg.siblings().hide();
		backImg.remove();
		$('.hack-logos').append(backImg);
		backImg.fadeIn();
	};
	//cycles through the mobile hackathon photos
	intervalID = setInterval(function(){picLoops();}, 2000);
	var intervalIDm;
	function picLoopsM() { 
		var backImg = $('.hack-logos-m img:first-child');
		backImg.siblings().hide();
		backImg.remove();
		$('.hack-logos-m').append(backImg);
		backImg.fadeIn();
	};
	intervalIDm = setInterval(function(){picLoopsM();}, 2000);
	//reveal text links in contacts page
	$('.iContainer').mouseenter(function() {
		if ($(this).hasClass('cEmail')) {
			$('.contactText').hide();
			$('.cEmail').show();
		};
		if ($(this).hasClass('cTwitter')) {
			$('.contactText').hide();
			$('.cTwitter').show();
		};
		if ($(this).hasClass('cGithub')) {
			$('.contactText').hide();
			$('.cGithub').show();
		};
		if ($(this).hasClass('cLinkedin')) {
			$('.contactText').hide();
			$('.cLinkedin').show();
		};
		if ($(this).hasClass('cResume')) {
			$('.contactText').hide();
			$('.cResume').show();
		};
	});
});
//scroll effect to anchors
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