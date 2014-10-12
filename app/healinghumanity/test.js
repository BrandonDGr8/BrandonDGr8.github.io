$(document).ready(function () {
	$(".footL").mouseenter(function () {
		$(".description").show();
	});
	$(".footL").mouseleave(function () {
		$(".description").hide();
	});
	$(".footR").mouseenter(function () {
		$(".instructions").show();
	});
	$(".footR").mouseleave(function () {
		$(".instructions").hide();
	});
});