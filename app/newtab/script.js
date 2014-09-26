function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var o = "";
    if (h <= 11) {
        o = "AM";
        if (h == 0)
            h = 12;
    }
    else {
        if (h != 12) {
            h-=12;
        }
        o = "PM";
    }
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + o;
    var t = setTimeout(function(){startTime()},500);
    checkHour();
}

function checkHour() {
    $(document).ready(function () {
        var today = new Date();
        var h = today.getHours();
            if (h < 5) {
                $("#image").attr("src", "img/mountains-night-1.jpg");
            }
            else if (h < 9) {
                $("#image").attr("src", "img/mountains-dawn-1.jpg");
            }
            else if (h < 17) {
                $("#image").attr("src", "img/mountains-noon-1.jpg");
            }
            else if (h < 21) {
                $("#image").attr("src", "img/mountains-sunset-1.jpg");
            }
            else {
                $("#image").attr("src", "img/mountains-night-1.jpg");
            }
    });
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}