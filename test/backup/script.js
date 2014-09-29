$(document).ready(function () {
	var red = "'background-color','#e74c3c'";
	var green = "'background-color','#2ecc71'";
	var yellow = "'background-color','#f1c40f'";
	var orange = "'background-color','#e67e22'";

	$("#backEdu").hide();
	$("#frontEdu").hide();
	$("#textEdu").hide();
	$("#footerEdu").hide();

	$("#backProj").hide();
	$("#frontProj").hide();
	$("#textProj").hide();
	$("#footerProj").hide();

	$("#backContact").hide();
	$("#frontContact").hide();
	$("#textContact").hide();
	$("#footerContact").hide();


	$(".bar").mouseenter(function () {
		$(this).addClass("barHighlight");
	});

	$(".bar").mouseleave(function () {
		$(this).removeClass("barHighlight");
	});

	$("#barAbout").click(function () {
		window.scrollTo(0, 0);
		$("body").css('background-color','#e74c3c');
		$("#barEducation").removeClass("barHighlightStay");
		$("#barProjects").removeClass("barHighlightStay");
		$("#barContact").removeClass("barHighlightStay");

		$("#barAbout").addClass("barHighlightStay");

		$("#backEdu").hide();
		$("#frontEdu").hide();
		$("#textEdu").hide();
		$("#footerEdu").hide();

		$("#backProj").hide();
		$("#frontProj").hide();
		$("#textProj").hide();
		$("#footerProj").hide();

		$("#backContact").hide();
		$("#frontContact").hide();
		$("#textContact").hide();
		$("#footerContact").hide();

		$("#backAbout").show();
		$("#frontAbout").show();
		$("#textAbout").show();
		$("#footerAbout").show();
	});

	$("#barEducation").click(function () {
		window.scrollTo(0, 0);
		$("body").css('background-color','#2ecc71');
		$("#barAbout").removeClass("barHighlightStay");
		$("#barProjects").removeClass("barHighlightStay");
		$("#barContact").removeClass("barHighlightStay");

		$("#barEducation").addClass("barHighlightStay");

		$("#backAbout").hide();
		$("#frontAbout").hide();
		$("#textAbout").hide();
		$("#footerAbout").hide();

		$("#backProj").hide();
		$("#frontProj").hide();
		$("#textProj").hide();
		$("#footerProj").hide();

		$("#backContact").hide();
		$("#frontContact").hide();
		$("#textContact").hide();
		$("#footerContact").hide();

		$("#backEdu").show();
		$("#frontEdu").show();
		$("#textEdu").show();
		$("#footerEdu").show();
	});

	$("#barName").click(function () {
		window.scrollTo(0, 0);
		$("body").css('background-color','#e74c3c');
		$("#barEducation").removeClass("barHighlightStay");
		$("#barProjects").removeClass("barHighlightStay");
		$("#barContact").removeClass("barHighlightStay");

		$("#barAbout").addClass("barHighlightStay");
		
		$("#backEdu").hide();
		$("#frontEdu").hide();
		$("#textEdu").hide();
		$("#footerEdu").hide();

		$("#backContact").hide();
		$("#frontContact").hide();
		$("#textContact").hide();
		$("#footerContact").hide();

		$("#backProj").hide();
		$("#frontProj").hide();
		$("#textProj").hide();
		$("#footerProj").hide();

		$("#backAbout").show();
		$("#frontAbout").show();
		$("#textAbout").show();
		$("#footerAbout").show();
	});

	$("#barProjects").click(function () {
		window.scrollTo(0, 0);
		$("body").css('background-color','#f1c40f');
		$("#barEducation").removeClass("barHighlightStay");
		$("#barAbout").removeClass("barHighlightStay");
		$("#barContact").removeClass("barHighlightStay");

		$("#barProjects").addClass("barHighlightStay");

		$("#backEdu").hide();
		$("#frontEdu").hide();
		$("#textEdu").hide();
		$("#footerEdu").hide();

		$("#backAbout").hide();
		$("#frontAbout").hide();
		$("#textAbout").hide();
		$("#footerAbout").hide();

		$("#backContact").hide();
		$("#frontContact").hide();
		$("#textContact").hide();
		$("#footerContact").hide();

		$("#backProj").show();
		$("#frontProj").show();
		$("#textProj").show();
		$("#footerProj").show();
	});

	$("#barContact").click(function () {
		window.scrollTo(0, 0);
		$("body").css('background-color','#e67e22');
		$("#barEducation").removeClass("barHighlightStay");
		$("#barProjects").removeClass("barHighlightStay");
		$("#barAbout").removeClass("barHighlightStay");

		$("#barContact").addClass("barHighlightStay");

		$("#backEdu").hide();
		$("#frontEdu").hide();
		$("#textEdu").hide();
		$("#footerEdu").hide();

		$("#backAbout").hide();
		$("#frontAbout").hide();
		$("#textAbout").hide();
		$("#footerAbout").hide();

		$("#backProj").hide();
		$("#frontProj").hide();
		$("#textProj").hide();
		$("#footerProj").hide();

		$("#backContact").show();
		$("#frontContact").show();
		$("#textContact").show();
		$("#footerContact").show();
	});
	
});