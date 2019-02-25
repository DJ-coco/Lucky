function over(data) {
    var dd = data;
    dd.style.opacity = 1;
    dd.style.filter = 'blur(0px)';

}

function out(data) {
    var qq = data;
    qq.style.opacity = 0.4;
    qq.style.filter = 'blur(15px)';
}

function menu(data) {
    var m = data;
    m.style.width = '10%';
    m.style.backgroundRepeat = 'repeat-y';
    m.style.opacity = 1;
    m.setAttribute("onmouseover", "");
    m.setAttribute("onmouseout", "");
    m.setAttribute("onclick", "ret(this)");
    var css = m.getAttribute("class").split(" ")[1];
    var iframe = $("iframe")[0];
    iframe.setAttribute("src", css + ".html");
    displayNoneOths(m);
}

function ret(data) {
    var m = data;
    m.style.width = '18%';
    m.style.backgroundRepeat = 'no-repeat';
    m.setAttribute("onmouseover", "over(this)");
    m.setAttribute("onmouseout", "out(this)");
    m.setAttribute("onclick", "menu(this)");
    var iframe = $("iframe")[0];
    iframe.setAttribute("src", "");
    displayBlockOths(m);
}

function displayNoneOths(m) {
    var divs = $("div.main0");
    var css = m.getAttribute("class").split(" ")[1];
    for (var i = 0; i < divs.length; i++) {
        var cs = divs[i].getAttribute("class").split(" ")[1];
        if (cs != css) {
            divs[i].style.display = 'none';
        }
    }
    var content = $("div.content")[0];
    content.style.display = 'block';
}

function displayBlockOths(m) {
    var divs = $("div.main0");
    var css = m.getAttribute("class").split(" ")[1];
    for (var i = 0; i < divs.length; i++) {
        var cs = divs[i].getAttribute("class").split(" ")[1];
        if (cs != css) {
            divs[i].style.display = 'block';
        }
    }
    var content = $("div.content")[0];
    content.style.display = 'none';
}

function go(n) {
    $("div.xmenu").fadeOut();
    if (n == 1) {
        var l = $("div.L")
        l.fadeIn();
    } else if (n == 2) {
        var m = $("div.M")
        m.fadeIn();
    } else if (n == 3) {
        var s = $("div.S")
        s.fadeIn();
    }
}

function backL(){
	$("div.d").fadeOut();
	$("div.xmenu").fadeIn();
}
