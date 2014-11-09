//$.cookie("notes_array", JSON.stringify(notes_array));
//var notes_array = $.parseJSON($.cookie("notes_array"));


//note object
function Note(text, title) {
	this.text = text;
	this.title = title;
}

//note array
var notes_array = [];
$.cookie("notes_array", JSON.stringify(notes_array));


//saves notes and title to a new note object
function saveNote(note, title) {
	var n = document.getElementById(note).value;
	var t = document.getElementById(title).value;
	var o = new Note(n, t);
	$.cookie("notes_array", JSON.stringify(notes_array));
	var notes_array = $.parseJSON($.cookie("notes_array"));
	notes_array.push(o);
	$.cookie("notes_array", JSON.stringify(notes_array));
	//save note to cookie
	//save title to corresponding cookie
	// console.log(notes_array);
	loadTitlesToDropdown();
}


function deleteNote() {
	var notes_array = $.parseJSON($.cookie("notes_array"));
	var index = notes_array.indexOf(current_note);
	if (index > -1) {
		notes_array.splice(index, 1);
	}
	$.cookie("notes_array", JSON.stringify(notes_array));
	$(".new_text").remove();
	loadTitlesToDropdown();
}

function loadTitlesToDropdown() {
	$(".titles").remove();
	var notes_array = $.parseJSON($.cookie("notes_array"));
	for (var i = notes_array.length - 1; i >= 0; i--) {
		$('select').append("<option class='titles' value=" + i + ">" + notes_array[i].title + "</option>");
	};
	$.cookie("notes_array", JSON.stringify(notes_array));
	// var t = setTimeout(function(){loadTitlesToDropdown()},1000);
}

var current_note = '';

$("select").click(function () {
	console.log("title clicked")
	var notes_array = $.parseJSON($.cookie("notes_array"));
	current_note = notes_array[$(this).val()];
	$.cookie("notes_array", JSON.stringify(notes_array));
	updateViewedText();
});

function updateViewedText() {
	if (current_note !== null) {
		$(".new_text").remove();
		var notes_array = $.parseJSON($.cookie("notes_array"));
		$('.loaded_text').append("<h2 class='header_title new_text'>" + current_note.title + "</h2>");
		$('.loaded_text').append("<p class='viewed_text new_text'>" + current_note.text + "</p>");
		$.cookie("notes_array", JSON.stringify(notes_array));
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
