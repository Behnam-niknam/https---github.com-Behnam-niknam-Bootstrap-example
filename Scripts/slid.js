
var slides = document.querySelector(".slider-items").children;
var nextslide = document.querySelector(".right-slide");
var preslide = document.querySelector(".left-slide");
var totalslides = slides.length;
var index = 0;
nextslide.onclick = function () {
    next("next");
}
preslide.onclick = function () {
    next("pre");
}
function next(direction) {
    if (direction == "next") {
        index++;
        if (index == totalslides) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = totalslides - 1;
        }
        else {
            index--;
        }
    }
    for (var i = 0; i < totalslides; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
