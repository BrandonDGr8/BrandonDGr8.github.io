// var night = "img/mountains-night-1.jpg";
// var day = "img/mountains-day-1.jpg";
// var dawn = "img/mountains-dawn-1.jpg";
// var sunset = "img/mountains-sunset-1.jpg";
var night = "";
var day = "";
var dawn = "";
var sunset = "";


$(document).ready(function () {
    $.removeCookie("scene");
    $.cookie("scene","beach");
    $(".list").hide();
    $(".button").fadeTo("fast",0.2);
    $(".button").mouseenter(function () {
        $(this).fadeTo("fast",0.5)
    });
    $(".button").mouseleave(function () {
        $(this).fadeTo("fast",0.2)
    });
    $(".button").click(function () {
        $(".list").fadeTo("fast",0.7);
    });
    $(".list").mouseleave(function () {
        $(this).hide("fast");
    });
    $(".mountains").click(function () {
        // setCookie("scene", "mountains", 365);
        $.removeCookie("scene");
        $.cookie("scene", "mountains", { expires: 365 });
        // night = "img/mountains-night-1.jpg";
        // day = "img/mountains-day-1.jpg";
        // dawn = "img/mountains-dawn-1.jpg";
        // sunset = "img/mountains-sunset-1.jpg";
    });
    $(".beach").click(function () {
        // setCookie("scene", "beach", 365);
        $.removeCookie("scene");
        $.cookie("scene", "beach", { expires: 365 });
        // night = "img/beach-night-1.jpg";
        // day = "img/beach-day-1.jpg";
        // dawn = "img/beach-dawn-1.jpg";
        // sunset = "img/beach-sunset-1.jpg";
    });
    $(".sky").click(function () {
        // setCookie("scene", "sky", 365);
        $.removeCookie("scene");
        $.cookie("scene", "sky", { expires: 365 });
        // night = "img/sky-night-1.jpg";
        // day = "img/sky-day-1.jpg";
        // dawn = "img/sky-dawn-1.jpg";
        // sunset = "img/sky-sunset-1.jpg";
    });
});



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
    document.getElementById('txt').innerHTML = h + ":" + m;
    document.getElementById('smaller').innerHTML = ":" + s;
    document.getElementById('small').innerHTML = o;
    var t = setTimeout(function(){startTime()},500);
    checkCookie();
    checkHour();
}

function checkHour() {
    $(document).ready(function () {
        var today = new Date();
        var h = today.getHours();
            if (h < 5) {
                $("#image").attr("src", night);
            }
            else if (h < 9) {
                $("#image").attr("src", dawn);
            }
            else if (h < 17) {
                $("#image").attr("src", day);
            }
            else if (h < 21) {
                $("#image").attr("src", sunset);
            }
            else {
                $("#image").attr("src", night);
            }
    });
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1);
//         if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
//     }
//     return "";
// }

function checkCookie() {
    var s = $.cookie("scene");
    if (s == undefined) {
        night = "img/mountains-night-1.jpg";
        day = "img/mountains-day-1.jpg";
        dawn = "img/mountains-dawn-1.jpg";
        sunset = "img/mountains-sunset-1.jpg";
        // console.log("null");
    }
    else if (s == "mountains") {
        night = "img/mountains-night-1.jpg";
        day = "img/mountains-day-1.jpg";
        dawn = "img/mountains-dawn-1.jpg";
        sunset = "img/mountains-sunset-1.jpg";
        // console.log("mountains");
    }
    else if (s == "beach") {
        night = "img/beach-night-1.jpg";
        day = "img/beach-day-1.jpg";
        dawn = "img/beach-dawn-1.jpg";
        sunset = "img/beach-sunset-1.jpg";
        // console.log("beach");
    }
    else if (s == "sky") {
        night = "img/sky-night-1.jpg";
        day = "img/sky-day-1.jpg";
        dawn = "img/sky-dawn-1.jpg";
        sunset = "img/sky-sunset-1.jpg";
        // console.log("sky");
    }
        
}

// function deleteCookie() {
//     document.cookie = "scene=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
// }

            // if (h < 5) {
            //     $("#image").attr("src", "img/mountains-night-1.jpg");
            // }
            // else if (h < 9) {
            //     $("#image").attr("src", "img/mountains-dawn-1.jpg");
            // }
            // else if (h < 17) {
            //     $("#image").attr("src", "img/mountains-day-1.jpg");
            // }
            // else if (h < 21) {
            //     $("#image").attr("src", "img/mountains-sunset-1.jpg");
            // }
            // else {
            //     $("#image").attr("src", "img/mountains-night-1.jpg");
            // }




            // if (h < 5) {
            //     $("#image").attr("src", "img/beach-night-1.jpg");
            // }
            // else if (h < 9) {
            //     $("#image").attr("src", "img/beach-dawn-1.jpg");
            // }
            // else if (h < 17) {
            //     $("#image").attr("src", "img/beach-day-1.jpg");
            // }
            // else if (h < 21) {
            //     $("#image").attr("src", "img/beach-sunset-1.jpg");
            // }
            // else {
            //     $("#image").attr("src", "img/beach-night-1.jpg");
            // }




            // if (h < 5) {
            //     $("#image").attr("src", "img/sky-night-1.jpg");
            // }
            // else if (h < 9) {
            //     $("#image").attr("src", "img/sky-dawn-1.jpg");
            // }
            // else if (h < 17) {
            //     $("#image").attr("src", "img/sky-day-1.jpg");
            // }
            // else if (h < 21) {
            //     $("#image").attr("src", "img/sky-sunset-1.jpg");
            // }
            // else {
            //     $("#image").attr("src", "img/sky-night-1.jpg");
            // }