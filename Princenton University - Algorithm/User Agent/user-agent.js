
var userAgents, element, textLinus, quotes;
userAgents = navigator.userAgent.toLowerCase();
element = document.getElementById("main");
textLinus = "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program - Linus Torvalds";
quotes = document.createTextNode(textLinus);

// test log : user agents & elements
console.log(userAgents, "check user agents");
console.log(element, "check get ID");
console.log(quotes,"text quotes");


// checking user agents : safari version & chrome version
if (userAgents.indexOf('safari') != -1) {
    if (userAgents.indexOf('chrome') > -1) {
        element.classList.add("userAgent","color-aliceblue");
        console.log("print agents one");
    } else {
        element.classList.add("userAgent","color-black");
        element.innerHTML = "";
        element.appendChild(quotes);
        console.log("print agents two");
    }
}
