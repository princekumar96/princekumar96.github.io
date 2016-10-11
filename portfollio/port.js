
var slideIndex = 1;   //First, set the slideIndex to 1. (First picture)
showSlides(slideIndex); //Then call showSlides() to display the first image

function plusSlides(n) //When the user clicks one of the buttons call plusSlides()
 {         //The plusSlides() function subtracts one or  adds one to the slideIndex
  showSlides(slideIndex += n);
 }

function currentSlide(n) 
 {
  showSlides(slideIndex = n);
 }

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");


  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}


  for (i = 0; i < slides.length; i++)
   {
      slides[i].style.display = "none"; 
   }


  for (i = 0; i < dots.length; i++) 
   {
      dots[i].className = dots[i].className.replace(" active", "");
   }


  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
};


