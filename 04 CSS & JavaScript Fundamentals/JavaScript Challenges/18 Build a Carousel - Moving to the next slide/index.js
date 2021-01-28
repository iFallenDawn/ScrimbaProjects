/*
    Moving to the next slide!
    
    1) Check if (slidePosition === totalSlides -1) (yes minus 1 because we start from 0 on 'slidePosition' - so if the slide is the last one (after a user has clicked through all the slides and then hits next again) we must reset the 'slidePosition' to 0, in turn taking them back to the first slide! 
    1: Info) Why reset? well, if we try access 'slides[slidePosition]' as such 'slides[3]' or 'slides[4]' or 'slides[5]', these don't exist (we have 3 carousel items), so we will get an error! We have [slide0, slide1, slide2] <- remember our const 'slides'? That is has an array structure in that the items index start from 0! In a none programming world, we start from 1 when counting, but this is programming, so we start counting from 0 😄
    2) Once we've done our check for slidePosition against totalSlides -1 (if this conditional is true) we reset 'slidePosition' to 0, if this conditional is not true, we increment the 'slidePosition' by 1, so we go to the next slide
    3) Within our function 'moveToNextSlide' we have a conditional, after the conditional, we want to add the class name of 'carousel-item-visible' to our current slide! 'carousel-item-visible' is our CSS class that makes the 'carousel-item' a block element (and not hidden) and shows it!
    3.1) Use 'slidePosition' to access the current array element in 'slides', and then add the class name 'carousel-item-visible', accessing an array element is as simple as 'slides[slidePosition]'
    4) Test out your next button by clicking on it, you'll see there's some clean up to do in the next Scrimba cast!
*/

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    slides[slidePosition].classList.remove("carousel-item-visible");
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    
}