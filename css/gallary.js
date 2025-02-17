let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll(".slideshow-container:not(.reverse) .mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Reset to first slide
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    slides[slideIndex - 1].classList.add('fade'); // Add fade class for animation
    setTimeout(showSlides, 3000);  // Change slide every 3 seconds
}