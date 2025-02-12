// script.js
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
    setTimeout(showSlides, 3000);  // Change slide every 3 seconds
}

// Function to handle the reverse slideshow
// let reverseSlideIndex = 0;
// showReverseSlides();

// function showReverseSlides() {
//     let i;
//     const reverseSlides = document.querySelectorAll(".reverse .mySlides");
//     for (i = 0; i < reverseSlides.length; i++) {
//         reverseSlides[i].style.display = "none";  // Hide all reverse slides
//     }
//     reverseSlideIndex++;
//     if (reverseSlideIndex > reverseSlides.length) { reverseSlideIndex = 1 }  // Reset to first slide
//     reverseSlides[reverseSlideIndex - 1].style.display = "block";  // Show the current reverse slide
//     setTimeout(showReverseSlides, 3000);  // Change slide every 3 seconds
// }