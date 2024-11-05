function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
        content.style.opacity = 0;
        var opacity = 0;
        var intervalID = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(intervalID);
            } else {
                opacity += 0.1;
                content.style.opacity = opacity;
            }
        }, 50);
    } else {
        content.style.display = "none";
    }
}