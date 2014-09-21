$(document).ready(function () {
	$(".bar").mouseenter(function () {
		$(this).addClass("barHighlight");
	});
	$(".bar").mouseleave(function () {
		$(this).removeClass("barHighlight");
	});
	$("#barAbout").click(function () {

	});
	$("#barEducation").click(function () {
		$("#backAbout").hide();
		$("#frontAbout").hide();
		$("#textAbout").hide();
		$("#footerAbout").hide();
	});
	$("#barName").click(function () {

	});
	$("#barProjects").click(function () {

	});
	$("#barContact").click(function () {

	});
});