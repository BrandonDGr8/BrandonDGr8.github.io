//$.cookie("notes_array", JSON.stringify(notes_array));
//var notes_array = $.parseJSON($.cookie("notes_array"));


//note object
function Note(text, title) {
	this.text = text;
	this.title = title;
}

//note array
var notes_array = [];
if ($.cookie('notes_array') == undefined) {
	$.cookie("notes_array", JSON.stringify(notes_array), {expire:365});
};


//saves notes and title to a new note object
function saveNote(note, title) {
	var n = document.getElementById(note).value;
	var t = document.getElementById(title).value;
	var o = new Note(n, t);
	var notes_array = $.parseJSON($.cookie("notes_array"));
	notes_array.push(o);
	$.cookie("notes_array", JSON.stringify(notes_array), {expire:365});
	//save note to cookie
	//save title to corresponding cookie
	// console.log(notes_array);
	loadTitlesToDropdown();
}


function loadTitlesToDropdown() {
	$(".titles").remove();
	var notes_array = $.parseJSON($.cookie("notes_array"));
	for (var i = 0; i < notes_array.length; i++) {
		$('select').append("<option class='titles' value=" + i + ">" + notes_array[i].title + "</option>");
	};
	$.cookie("notes_array", JSON.stringify(notes_array), {expire:365});
	// var t = setTimeout(function(){loadTitlesToDropdown()},3000);
}

var current_note = '';

$("select").click(function () {
	var notes_array = $.parseJSON($.cookie("notes_array"));
	current_note = notes_array[$(this).val()];
	console.log(current_note);
	$.cookie("notes_array", JSON.stringify(notes_array), {expire:365});
	updateViewedText();
});


function deleteNote() {
	var notes_array = $.parseJSON($.cookie("notes_array"));
	var indx = notes_array.indexOf(current_note);
	notes_array.splice(indx, 1);
	$.cookie("notes_array", JSON.stringify(notes_array), {expire:365});
	$(".new_text").remove();
	loadTitlesToDropdown();
}

function updateViewedText() {
	if (current_note !== null) {
		$(".new_text").remove();
		var notes_array = $.parseJSON($.cookie("notes_array"));
		$('.loaded_text').append("<h2 class='header_title new_text'>" + current_note.title + "</h2>");
		$('.loaded_text').append("<p class='viewed_text new_text'>" + current_note.text + "</p>");
		$.cookie("notes_array", JSON.stringify(notes_array), {expire:365});
	};
};







function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
};
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
};



//saveNote will save note and title to a corresponding cookie. (make object?)
//make array of cookies (that are objects)
//add new cookie after every time user saves
//delete button will delete that cookie
//drop down menu should take in array values
