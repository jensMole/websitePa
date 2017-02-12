/* Afbeelding top laten veranderen */

/* Eerste foto init */
var slideIndex = 1;
showDivs(slideIndex);

/* kijken welke knop gedrukt */
function plusDivs(n) {
    showDivs(slideIndex += n);
    /* Resetten van de timer als je op een knop hebt gedrukt */
    clearTimeout(timer);
    timer = setTimeout(carousel, 15000);
}

/* kijken welke foto op display */
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    /* Als einde bereikt is terug naar de eerste */
    if (n > x.length) {slideIndex = 1}
    /* Als n 0 is dan geven we de lengte mee aan de slideIndex (gaat naar laatste foto) */
    if (n < 1) {slideIndex = x.length} ;
    /* iedere foto gaan we niet gaan displayen */
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    /* De foto die we willen gaan we displayen. */
    x[slideIndex-1].style.display = "block";
}

/* Afbeelding top laten veranderen */

/* Auto laten bewegen van de fotos */

var slideIndex = 0;
var timer = null;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    timer = setTimeout(carousel, 15000); // Change image every 15 seconds
}

/* Auto laten bewegen van de fotos */
