//note object
function Note(text, title) {
	this.text = text;
	this.title = title;
}

//note array
var notes_array = [];


//saves notes and title to a new note object
function saveNote(note, title) {
	var n = document.getElementById(note).value;
	var t = document.getElementById(title).value;
	var o = new Note(n, t);
	notes_array.push(o);
	//save note to cookie
	//save title to corresponding cookie
	// console.log(notes_array);
	loadTitlesToDropdown();
}


function deleteNote() {
	var index = notes_array.indexOf(current_note);
	if (index > -1) {
		notes_array.splice(index, 1);
	}
	$(".new_text").remove();
	loadTitlesToDropdown();
}

function loadTitlesToDropdown() {
	$(".titles").remove();
	for (var i = notes_array.length - 1; i >= 0; i--) {
		$('select').append("<option class='titles' value=" + i + ">" + notes_array[i].title + "</option>");
	};
	// var t = setTimeout(function(){loadTitlesToDropdown()},1000);
}

var current_note = '';

$("select").click(function () {
	console.log("title clicked")
	current_note = notes_array[$(this).val()];
	updateViewedText();
});

function updateViewedText() {
	if (current_note !== null) {
		$(".new_text").remove();
		$('.loaded_text').append("<h2 class='header_title new_text'>" + current_note.title + "</h2>");
		$('.loaded_text').append("<p class='viewed_text new_text'>" + current_note.text + "</p>");
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
