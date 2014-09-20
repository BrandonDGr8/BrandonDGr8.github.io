$(document).ready(function () {
	$(".bar").mouseenter(function () {
		$(this).addClass("barHighlight");
	});
	$(".bar").mouseleave(function () {
		$(this).removeClass("barHighlight");
	});
	
});