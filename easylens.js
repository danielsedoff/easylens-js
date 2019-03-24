function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function toggleLens() {
    lens = getCookie("lens");
    if (lens == "on") {
        document.cookie = "lens=off";
        lensOff();
    } else {
        document.cookie = "lens=on";
        lensOn();
    }
}

function lensOn() {
    var sheet = document.createElement('style');
    sheet.innerHTML = "* {background-image: none; background: white; color: black; font-size: 32px;} img {display: none;} .easylensimage{display: inline-block;}";
    document.body.appendChild(sheet);
}

function lensOff() {
    location.reload();
}
