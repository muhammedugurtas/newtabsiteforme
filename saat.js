function say(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}

window.addEventListener("load", function tarihvesaat() {
    var sure = new Date();
    document.getElementById("saat-text").innerHTML = say(sure.getHours()) + ":"
        + say(sure.getMinutes()) + ":"
        + say(sure.getSeconds());
    document.getElementById("tarih-text").innerHTML = say(sure.getDate()) + "."
        + say(sure.getMonth() + 1) + "."
        + say(sure.getFullYear());
    setInterval(tarihvesaat, 1000)
}, false);

window.addEventListener("load", function() {
    var search_input = document.getElementById("searchinput");
    search_input.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
    
            window.open("https://www.google.com/search?q=" + encodeURIComponent(search_input.value));
        }
    });
}, false);

window.addEventListener("load", function() {
    var searchButton = document.getElementById("searchButton");
    var search_input = document.getElementById("searchinput");
    searchButton.addEventListener("click", function() {
        window.open("https://www.google.com/search?q=" + encodeURIComponent(search_input.value));
    });
}, false);