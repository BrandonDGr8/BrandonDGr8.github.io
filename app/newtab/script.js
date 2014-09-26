$(document).ready(function () {
    var today = new Date();
    var h = today.getHours;
    if (h > 5 && h < 9) {
        $("#image").attr("src", "img/mountains-dawn-1.jpg");
    }
    else if (h > 10 && h < 17) {
        $("#image").attr("src", "img/mountains-noon-1.jpg");
    }
    else if (h > 17 && h < 21) {
        $("#image").attr("src", "img/mountains-sunset-1.jpg");
    }
    else {
        $("#image").attr("src", "img/mountains-night-1.jpg");
    }
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var o = "";
    if (h <= 12) {
        o = "AM";
    }
    else {
        h-=12;
        o = "PM";
    }
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + o;
    var t = setTimeout(function(){startTime()},500);
}




function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}