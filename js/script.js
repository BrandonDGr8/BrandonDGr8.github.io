$(document).ready(function () {
	// $(".bar").mouseenter(function () {
	// 	$(this).fadeTo("slow",0.5);
	// });
	// $(".bar").mouseleave(function () {
	// 	$(this).fadeTo("slow",1);
	// });
	$(".bar").mouseenter(function () {
		$(this).addClass("barHighlight");
	});
	$(".bar").mouseleave(function () {
		$(this).removeClass("barHighlight");
	});
});