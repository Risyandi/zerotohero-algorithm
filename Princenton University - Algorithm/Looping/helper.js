var element = "";
for (let index = 0; index < 10; index++) {
    element += "<div id='header-" + index + "'>\
                div header "+ index + "\
                </div>";
    document.getElementById('main').innerHTML = element;
}