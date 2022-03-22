// opening and closing the contact form
function openForm() {
    document.getElementById("myForm").style.display= "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This displays the first image in the slide show
var slideIndex = 1;
showSlides(slideIndex);

//This changes the slides when the arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This changes the slides if the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //This stores elements with the class"mySlides" in an array
    var dots = document.getElementsByClassName("dot"); //This stores elements in the dot array
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length };
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block"; //This displays the image in the slideshow
    dots[slideIndex -1].className += " active";
}

//This is to close the contact form. The event listener checks for clicks not on an element
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") &&
    !event.target.closest(".contact")){
        closeForm()
    }
}, false)

